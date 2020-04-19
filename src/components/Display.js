import React, { useState, useEffect } from "react";
import "../styles/display.css";

import { useWork, useRelax } from "../utils/CustomHook";

export default function Display() {
  const { Work } = useWork();
  const { Relax } = useRelax();

  let [workCount, setWorkCount] = useState(Work);
  let [relaxCount, setRelaxCount] = useState(Relax);
  let [inLoop, setinLoop] = useState(false);

  useEffect(() => {
    setWorkCount(Work);
    setRelaxCount(Relax);
  }, [Work, Relax]);

  function handlerStart() {
    const initiateWork = setInterval(() => {
      if (workCount > 0) {
        workCount = workCount - 1;
        setWorkCount(workCount);
      } else if (!inLoop || workCount === 0) {
        clearInterval(initiateWork);
        const initiateRelax = setInterval(() => {
          if (relaxCount > 0) {
            relaxCount = relaxCount - 1;
            setRelaxCount(relaxCount);
          } else if (!inLoop || relaxCount === 0) {
            clearInterval(initiateRelax);
          }
        }, 1000);
      }
    }, 1000);
  }

  function handlerReset() {
    workCount = Work;
    relaxCount = Relax;
    setinLoop(!inLoop);
  }

  return (
    <>
      <div className="wrapper-display">
        <div className="work-time">{`${Math.floor(workCount / 60)}:${
          workCount - Math.floor(workCount / 60) * 60
        }`}</div>
        <div className="relax-time">{`${Math.floor(relaxCount / 60)}:${
          relaxCount - Math.floor(relaxCount / 60) * 60
        }`}</div>
        <div className="controls">
          <button id="play-btn" onClick={handlerStart}>
            Start
          </button>
          <button id="pause-btn">Pause</button>
          <button id="reset-btn" onClick={handlerReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
