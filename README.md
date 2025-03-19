# UTube - YouTube Clone Project

## Overview
UTube is a lightweight YouTube clone that allows users to browse and search through videos fetched from a public YouTube API. This project demonstrates the implementation of a responsive video browsing interface with search functionality, similar to YouTube's homepage.
![Uploading image.png…]()

## Features
- **Video Browsing**: Display YouTube videos in a responsive grid layout
- **Search Functionality**: Filter videos by title or channel name
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Video Information**: Shows video title, channel name, view count, likes, and comments
- **External Links**: Clicking on videos opens the original YouTube video in a new tab

## Technologies Used
- HTML5
- CSS3 (with Flexbox and CSS Grid)
- Vanilla JavaScript (ES6+)
- Fetch API for data retrieval
- Responsive design using media queries

## Project Structure
```
├── index.html        # Main HTML file
├── styles.css        # CSS styles
├── index.js          # JavaScript functionality
└── README.md         # Project documentation
```

## Setup and Installation
1. Clone the repository:


2. Open the project:
   - Use a local server (like Live Server extension in VS Code)
   - Or simply open the `index.html` file in your browser

## API Usage
This project uses the free YouTube API from freeapi.app:
```
https://api.freeapi.app/api/v1/public/youtube/videos
```

## How to Use
1. When you open the application, it automatically loads videos from the API
2. Use the search bar at the top to filter videos by title or channel name
3. Click on any video thumbnail or title to open the original YouTube video
4. The interface will adapt to different screen sizes automatically

## Responsive Breakpoints
- Desktop: 900px and above
- Tablet: 768px to 900px
- Mobile: Below 480px

## Future Enhancements
- User authentication
- Video categories/playlists
- Video playback within the application
- Dark mode toggle
- Comment section functionality
- Infinite scrolling for more videos

## License
This project is open source and available under the [MIT License](LICENSE).

## Credits
- YouTube API provided by [freeapi.app](https://freeapi.app)
- Icons and design inspiration from YouTube

## Contact
For any questions or feedback, please contact:
- GitHub: [NamanSharma1201](https://github.com/NamanSharma1201)
