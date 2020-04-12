import React from "react";
import { useState } from "react";
import "../styles/panel.css";

export default function Panel() {
  const [Work, setWork] = useState(60 * 25);
  const [Relax, setRelax] = useState(60 * 5);

  function Up(SelectTime) {
    const newTime = SelectTime + 60;
    return newTime;
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
            <p>{Work}</p>
            <div className="controls-time">
              <button onClick={() => setWork(Up(Work))}>+</button>
              <button onClick={() => setWork(Down(Work))}>-</button>
            </div>
          </div>
          <p>Work</p>
        </div>
        <div className="relax-panel">
          <div className="selector-time">
            <p>{Relax}</p>
            <div className="controls-time">
              <button onClick={() => setRelax(Up(Relax))}>+</button>
              <button onClick={() => setRelax(Down(Relax))}>-</button>
            </div>
          </div>
          <p>Relax</p>
        </div>
      </div>
    </>
  );
}
