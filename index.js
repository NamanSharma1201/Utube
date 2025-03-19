const videoContainer = document.querySelector(".videocard-container");
const searchInput = document.getElementById("searchbar-input");
const searchButton = document.getElementById("search-btn");

let allVideos = [];

async function fetchVideos() {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=500"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.data && data.data.data) {
      allVideos = data.data.data;
      renderVideos(allVideos);
    } else {
      console.error("Invalid data structure received from API");
    }
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
}

function filterVideos(query) {
  if (!query.trim()) {
    return allVideos;
  }

  const lowerCaseQuery = query.toLowerCase();

  return allVideos.filter((video) => {
    const title = video.items.snippet.title.toLowerCase();
    const channelTitle = video.items.snippet.channelTitle.toLowerCase();

    return (
      title.includes(lowerCaseQuery) || channelTitle.includes(lowerCaseQuery)
    );
  });
}

function renderVideos(videos) {
  let html = "";

  if (videos.length === 0) {
    videoContainer.innerHTML = `
      <div class="no-results">
        <h2>No videos found matching your search</h2>
        <p>Try different keywords or browse all videos</p>
      </div>
    `;
    return;
  }

  videos.forEach((element) => {
    const videoId = element.items.id;
    const videoUrl = "https://www.youtube.com/watch?v=" + videoId;
    const channelId = element.items.snippet.channelId;
    const channelUrl = "https://www.youtube.com/channel/" + channelId;
    const title = element.items.snippet.title;
    const channelTitle = element.items.snippet.channelTitle;
    const thumbnailUrl = element.items.snippet.thumbnails.high.url;
    const { likeCount, viewCount, commentCount } = element.items.statistics;

    html += `
      <div class="video-card">
        <a target="_blank" href="${videoUrl}">
          <div class="video-thumbnail">
            <img src="${thumbnailUrl}" alt="${title}" />
            <span class="video-duration">10:28</span>
          </div>
        </a>
        <div class="video-info">
          <div class="channel-image">
            <img src="${thumbnailUrl}" alt="${channelTitle}" />
          </div>
          <div class="video-meta-data">
            <div class="video-title">
              ${title}
            </div>
            <a href="${channelUrl}" target="_blank">
              <div class="channel-name">${channelTitle}</div>
            </a>
            <div class="video-stats">
              <span class="stat">
                <span class="stat-icon">👁️</span> ${viewCount}
              </span>
              <span class="stat">
                <span class="stat-icon">👍</span> ${likeCount}
              </span>
              <span class="stat">
                <span class="stat-icon">💬</span> ${commentCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  videoContainer.innerHTML = html;
}

function handleSearch() {
  const query = searchInput.value;
  const filteredVideos = filterVideos(query);
  renderVideos(filteredVideos);
}

searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

fetchVideos();
