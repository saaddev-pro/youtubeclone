import React from 'react';

function VideoList({ videos }) {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      ))}
    </div>
  );
}

export default VideoList;