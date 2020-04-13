import React from "react";
import "../styles/panel.css";

import { useWork, useRelax } from "../utils/CustomHook";

export default function Panel() {
  const { Work, setWork } = useWork();
  const { Relax, setRelax } = useRelax();

  function UpSeconds(SelectTime) {
    if (SelectTime < 60 * 60 + 59) {
      const newTime = SelectTime + 1;
      return newTime;
    } else {
      return 60 * 60;
    }
  }

  function DownSeconds(SelectTime) {
    if (SelectTime < 0) {
      return 0;
    } else {
      const newTime = SelectTime - 1;
      return newTime;
    }
  }

  function UpMinutes(SelectTime) {
    if (SelectTime < 60 * 60) {
      const newTime = SelectTime + 60;
      return newTime;
    } else {
      return 60 * 60;
    }
  }

  function DownMinutes(SelectTime) {
    if (SelectTime <= 0) {
      return 0;
    } else {
      const newTime = SelectTime - 60;
      return newTime;
    }
  }

  return (
    <>
      <div className="wrapper-panel">
        <div className="work-panel">
          <div className="selector-time">
            <div className="controls-time">
              <button onClick={() => setWork(UpMinutes(Work))}>+60</button>
              <button onClick={() => setWork(DownMinutes(Work))}>-60</button>
            </div>

            <div className="work-inputs">
              <input
                type="number"
                id="workMinutes"
                value={Math.floor(Work / 60)}
                min="0"
                max="60"
              />
              :
              <input
                type="number"
                id="workSeconds"
                value={Math.floor(Work % 60)}
                min="0"
                max="60"
              />
            </div>

            <div className="controls-time">
              <button onClick={() => setWork(UpSeconds(Work))}>+1</button>
              <button onClick={() => setWork(DownSeconds(Work))}>-1</button>
            </div>
          </div>
          <p>Work</p>
        </div>
        <div className="relax-panel">
          <div className="selector-time">
            <div className="controls-time">
              <button onClick={() => setRelax(UpMinutes(Relax))}>+60</button>
              <button onClick={() => setRelax(DownMinutes(Relax))}>-60</button>
            </div>
            <div className="relax-inputs">
              <input
                type="number"
                id="relaxMinutes"
                value={Math.floor(Relax / 60)}
                min="0"
                max="60"
              />
              :
              <input
                type="number"
                id="relaxSeconds"
                value={Math.floor(Relax % 60)}
                min="0"
                max="60"
              />
            </div>

            <div className="controls-time">
              <button onClick={() => setRelax(UpSeconds(Relax))}>+1</button>
              <button onClick={() => setRelax(DownSeconds(Relax))}>-1</button>
            </div>
          </div>
          <p>Relax</p>
        </div>
      </div>
    </>
  );
}
