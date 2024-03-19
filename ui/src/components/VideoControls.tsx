import React from "react";

// Define a single Button component that takes icon and onClick as props
const ControlButton = ({ icon, onClick }) => (
  <button className="btn btn-secondary" onClick={onClick}>
    <i className={`fas ${icon}`}></i>
  </button>
);

const VideoControls = () => {
  // Define an array of control objects
  const controls = [
    { icon: "fa-step-backward", action: () => console.log("Step backward") },
    { icon: "fa-backward", action: () => console.log("Backward") },
    { icon: "fa-play", action: () => console.log("Play") },
    { icon: "fa-forward", action: () => console.log("Forward") },
    { icon: "fa-step-forward", action: () => console.log("Step forward") },
  ];

  return (
    <div className="video-buttons">
      {controls.map((control, index) => (
        <ControlButton
          key={index}
          icon={control.icon}
          onClick={control.action}
        />
      ))}
    </div>
  );
};

export default VideoControls;
