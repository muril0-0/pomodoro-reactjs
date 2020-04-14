import React, { useState, useEffect } from "react";
import "../styles/display.css";

import { useWork, useRelax } from "../utils/CustomHook";

export default function Display() {
  const { Work } = useWork();
  const { Relax } = useRelax();

  let [workCount, setWorkCount] = useState(Work);
  const [relaxCount, setRelaxCount] = useState(Relax);

  useEffect(() => {
    setWorkCount(Work);
    setRelaxCount(Relax);
  }, [Work, Relax]);

  function handlerStart() {
    const initiateWork = setInterval(() => {
      if (workCount > 0) {
        workCount = workCount - 1;
        setWorkCount(workCount);
        console.log(workCount);
      } else {
        clearInterval(initiateWork);
      }
    }, 1000);
  }

  return (
    <>
      <div className="wrapper-display">
        <div className="work-time">{`${Math.floor(workCount / 60)}:${
          workCount - Math.floor(workCount / 60) * 60
        }`}</div>
        <div className="relax-time">{`${Math.floor(Relax / 60)}:${
          relaxCount - Math.floor(relaxCount / 60) * 60
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
