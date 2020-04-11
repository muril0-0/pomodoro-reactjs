import React from "react";
import "../styles/switch.css";

export default function Switch() {
  return (
    <>
      <input
        type="checkbox"
        className="react-switch-checkbox"
        id={`react-switch-new`}
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className="react-switch-button"></span>
      </label>
    </>
  );
}
