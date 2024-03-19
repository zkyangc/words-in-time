import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div class="video-player">
      <iframe
        src={`https://www.youtube.com/embed/${video.vid}?si=&amp;start=${video.start}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
