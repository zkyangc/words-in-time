import { useState, useEffect } from "react";
import { mockFetchSubtitleContent } from "../__mocks__/mockFetchSubtitleContent";

const parseVTTContent = (vttString) => {
  const captions = [];
  // Split the string by lines first
  const lines = vttString.split("\n");
  let currentCaption = null;

  lines.forEach((line, index) => {
    // Check if line contains timestamp
    if (line.includes("-->")) {
      const [start, end] = line.split(" --> ");
      // Prepare to capture the text following the timestamp
      captions.push({ start, end, text: lines[index + 1] });
    }
  });

  return captions;
};

// Custom hook to manage YouTube Player and current playback time
function useYouTubePlayer(vid, onTimeUpdate) {
  useEffect(() => {
    let player;
    // Initialize YouTube Player
    function onYouTubeIframeAPIReady() {
      player = new window.YT.Player("youtube-player", {
        videoId: vid,
        events: {
          onReady: onPlayerReady,
        },
      });
    }

    if (!window.YT) {
      // Load YouTube Iframe API script
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Assign global function for YouTube API to call
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    function onPlayerReady(event) {
      const interval = setInterval(() => {
        const currentTime = event.target.getCurrentTime();
        onTimeUpdate(currentTime);
      }, 1000); // Update time every second

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }

    // Cleanup function to destroy player
    return () => {
      if (player && player.destroy) player.destroy();
    };
  }, [vid, onTimeUpdate]);
}

const Transcript = ({ vid }) => {
  const [captions, setCaptions] = useState([]);
  const [currentCaption, setCurrentCaption] = useState(null);

  useEffect(() => {
    mockFetchSubtitleContent(vid).then((vttContent) => {
      const subtitles = parseVTTContent(vttContent);
      setCaptions(subtitles);
    });
  }, []);

  // Custom hook to manage YouTube player and update current caption based on time
  useYouTubePlayer(vid, (currentTime) => {
    const newCurrentCaption = captions.find((caption) => {
      const startSeconds = Number(
        caption.start.replace(":", "").replace(".", "")
      );
      const endSeconds = Number(caption.end.replace(":", "").replace(".", ""));
      const currentSeconds = Math.floor(currentTime * 100); // Convert to similar format
      return currentSeconds >= startSeconds && currentSeconds <= endSeconds;
    });

    setCurrentCaption(newCurrentCaption);
  });

  return (
    <>
      <div class="caption-container">
        <span class="caption-text">
          "<span class="highlight">Hi</span>, I'm Joe Biden."
        </span>
      </div>
    </>
  );
};

export default Transcript;
