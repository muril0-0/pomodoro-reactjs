import React from "react";
import "../styles/panel.css";

import { useWork, useRelax } from "../utils/CustomHook";

export default function Panel() {
  const { Work, setWork } = useWork();
  const { Relax, setRelax } = useRelax();

  function Up(SelectTime) {
    if (SelectTime < 60 * 60) {
      const newTime = SelectTime + 60;
      return newTime;
    } else {
      return 0;
    }
  }

  function Down(SelectTime) {
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
              <button onClick={() => setWork(Up(Work))}>+</button>
            </div>

            <div className="work-inputs">
              <input
                type="number"
                id="workMinutes"
                value={Math.floor(Work / 60)}
                min="0"
                onChange={(event) => setWork(event.target.value)}
              />
            </div>

            <div className="controls-time">
              <button onClick={() => setWork(Down(Work))}>-</button>
            </div>
          </div>
          <p>Work Session</p>
        </div>
        <div className="relax-panel">
          <div className="selector-time">
            <div className="controls-time">
              <button onClick={() => setRelax(Up(Relax))}>+</button>
            </div>
            <div className="relax-inputs">
              <input
                type="number"
                id="relaxMinutes"
                value={Math.floor(Relax / 60)}
                min="0"
                max="60"
                onChange={(event) => setRelax(event.target.value)}
              />
            </div>

            <div className="controls-time">
              <button onClick={() => setRelax(Down(Relax))}>-</button>
            </div>
          </div>
          <p>Relax Session</p>
        </div>
      </div>
    </>
  );
}
