import React from "react";
import "../styles/display.css";

import { useWork, useRelax } from "../utils/CustomHook";

export default function Display() {
  let { Work } = useWork();
  let { Relax } = useRelax();

  return (
    <>
      <div className="wrapper-display">
        <div className="work-time">{`${
          Math.floor(Work / 60) < 24 ? Math.floor(Work / 60) : 24
        }:${Math.floor(Work) < 60 ? Math.floor(Work) : Math.floor(Work) % 60}:${
          Math.floor(Work) / 60 / 60 < 1 ? 0 : Math.floor(Work) / 60 / 60
        }`}</div>
        <div className="relax-time">{`${
          Math.floor(Relax / 60) < 24 ? Math.floor(Relax / 60) : 24
        }:${
          Math.floor(Relax) < 60 ? Math.floor(Relax) : Math.floor(Relax) % 60
        }:${
          Math.floor(Relax) / 60 / 60 < 1 ? 0 : Math.floor(Relax) / 60 / 60
        }`}</div>
        <div className="controls">
          <button id="play-btn">Start</button>
          <button id="pause-btn">Pause</button>
          <button id="reset-btn">Reset</button>
        </div>
      </div>
    </>
  );
}
