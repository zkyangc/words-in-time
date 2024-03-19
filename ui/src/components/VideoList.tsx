import React from 'react';
import './VideoList.css';

const VideoList = ({ videos, onSelectVideo }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div
          key={video.id}
          className="video-item"
          onClick={() => onSelectVideo(video)}
        >
          <img
            src={`https://i.ytimg.com/vi/${video.vid}/hqdefault.jpg`}
            alt={video.display}
            className="video-thumbnail"
          />
          <div className="video-details">
            <p className="video-title">{video.display}</p>
            <p>Language: Placeholder</p>
            <p>Length: Placeholder</p>
            <p>Category: Placeholder</p>
            {/* Additional details can be added here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
