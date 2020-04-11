import React from "react";
import "./styles/globals.css";
import "./styles/app.css";

import NavBar from "./components/NavBar";
import Display from "./components/Display";
import Panel from "./components/Panel";

function App() {
  return (
    <>
      <div className="wrapper-app">
        <NavBar />
        <Display />
        <Panel />
      </div>
    </>
  );
}

export default App;
