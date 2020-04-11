import React from "react";
import "../styles/panel.css";

export default function Panel() {
  return (
    <>
      <div className="wrapper-panel">
        <div className="work-panel">
          <div className="selector-time">
            <p>00:00</p>
          </div>
          <p>Work</p>
        </div>
        <div className="relax-panel">
          <div className="selector-time">
            <p>00:00</p>
          </div>
          <p>Relax</p>
        </div>
      </div>
    </>
  );
}
