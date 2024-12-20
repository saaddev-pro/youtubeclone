import React from 'react';

const VideoList = ({ videos }) => {
    return (
        <ul className="video-list">
      {videos.map((video) => (
    <li className="video-item" key={video.id.videoId}>
      <img
        className="video-thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="video-details">
        <h3 className="video-title">{video.snippet.title}</h3>
        <p className="video-description">{video.snippet.description}</p>
      </div>
    </li>
  ))}
</ul>
    );
};
export default VideoList;



