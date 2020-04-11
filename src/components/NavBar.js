import React from "react";
import "../styles/navBar.css";

import Switch from "./Switch";

export default function NavBar() {
  return (
    <>
      <div className="wrapper-bar">
        <div className="title-bar">
          <p>Pomodoro</p>
        </div>
        <div className="theme-switch">
          <span>Theme</span>
          <Switch />
        </div>
      </div>
    </>
  );
}
