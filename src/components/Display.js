import React from "react";
import "../styles/display.css";

import { useWork, useRelax } from "../utils/CustomHook";

export default function Display() {
  const { Work } = useWork();
  const { Relax } = useRelax();

  function handlerStart() {}

  return (
    <>
      <div className="wrapper-display">
        <div className="work-time">{`${Math.floor(Work) / 60}:${
          Math.floor(Work) % 60
        }`}</div>
        <div className="relax-time">{`${Math.floor(Relax) / 60}:${
          Math.floor(Relax) % 60
        }`}</div>
        <div className="controls">
          <button id="play-btn" onClick={handlerStart}>
            Start
          </button>
          <button id="pause-btn">Pause</button>
          <button id="reset-btn">Reset</button>
        </div>
      </div>
    </>
  );
}
