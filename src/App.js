import React from "react";
import "./styles/globals.css";

import NavBar from "./components/NavBar";
import Display from "./components/Display";

function App() {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Display />
      </div>
    </>
  );
}

export default App;
