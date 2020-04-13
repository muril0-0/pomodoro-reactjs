import React from "react";
import "../styles/panel.css";

import { useWork, useRelax } from "../utils/CustomHook";

export default function Panel() {
  const { Work, setWork } = useWork();
  const { Relax, setRelax } = useRelax();

  function UpSeconds(SelectTime) {
    const newTime = SelectTime + 1;
    return newTime;
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
    const newTime = SelectTime + 60;
    return newTime;
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
            <p>{`${Math.floor(Work / 60)}:${Math.floor(Work % 60)}`}</p>
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
            <p>{`${Math.floor(Relax / 60)}:${Math.floor(Relax % 60)}`}</p>
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
