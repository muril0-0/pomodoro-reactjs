import React from "react";
import "../styles/display.css";

export default function Display() {
  return (
    <>
      <div className="wrapper-display">
        <div className="work-time">00:00</div>
        <div className="relax-time">00:00</div>
        <div className="controls">
          <p>Play</p>
          <p>Pause</p>
          <p>Stop</p>
        </div>
      </div>
    </>
  );
}
