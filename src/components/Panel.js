import React from "react";
import "../styles/panel.css";

import { useWork, useRelax } from "../utils/CustomHook";

export default function Panel() {
  const { Work, setWork } = useWork();
  const { Relax, setRelax } = useRelax();

  function UpHours(SelectTime) {
    const newTime = SelectTime + 60;
    return newTime;
  }

  function DownHours(SelectTime) {
    if (SelectTime <= 0) {
      return 0;
    } else {
      const newTime = SelectTime - 60;
      return newTime;
    }
  }

  function UpMinutes(SelectTime) {
    if (SelectTime <= 60 * 24 + 59) {
      const newTime = SelectTime + 1;
      return newTime;
    } else {
      return 0;
    }
  }

  function DownMinutes(SelectTime) {
    if (SelectTime <= 0) {
      return 0;
    } else {
      const newTime = SelectTime - 1;
      return newTime;
    }
  }

  return (
    <>
      <div className="wrapper-panel">
        <div className="work-panel">
          <div className="selector-time">
            <div className="controls-time">
              <button onClick={() => setWork(UpHours(Work))}>+</button>
              <button onClick={() => setWork(DownHours(Work))}>-</button>
            </div>

            <div className="work-inputs">
              <input
                type="number"
                id="workHour"
                value={Math.floor(Work / 60) < 24 ? Math.floor(Work / 60) : 24}
                min="0"
                max="60"
                onChange={(event) => setWork(event.target.value)}
              />
              :
              <input
                type="number"
                id="workMinutes"
                value={
                  Math.floor(Work) < 60
                    ? Math.floor(Work)
                    : Math.floor(Work) % 60
                }
                min="0"
                onChange={(event) => setWork(event.target.value)}
              />
            </div>

            <div className="controls-time">
              <button onClick={() => setWork(UpMinutes(Work))}>+</button>
              <button onClick={() => setWork(DownMinutes(Work))}>-</button>
            </div>
          </div>
          <p>Work</p>
        </div>
        <div className="relax-panel">
          <div className="selector-time">
            <div className="controls-time">
              <button onClick={() => setRelax(UpHours(Relax))}>+</button>
              <button onClick={() => setRelax(DownHours(Relax))}>-</button>
            </div>
            <div className="relax-inputs">
              <input
                type="number"
                id="relaxHour"
                value={
                  Math.floor(Relax / 60) < 24 ? Math.floor(Relax / 60) : 24
                }
                min="0"
                max="60"
                onChange={(event) => setRelax(event.target.value)}
              />
              :
              <input
                type="number"
                id="relaxMinutes"
                value={
                  Math.floor(Relax) < 60
                    ? Math.floor(Relax)
                    : Math.floor(Relax) % 60
                }
                min="0"
                max="60"
                onChange={(event) => setRelax(event.target.value)}
              />
            </div>

            <div className="controls-time">
              <button onClick={() => setRelax(UpMinutes(Relax))}>+</button>
              <button onClick={() => setRelax(DownMinutes(Relax))}>-</button>
            </div>
          </div>
          <p>Relax</p>
        </div>
      </div>
    </>
  );
}
