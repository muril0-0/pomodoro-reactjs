import React from "react";
import "./styles/globals.css";
import "./styles/app.css";

import NavBar from "./components/NavBar";
import Display from "./components/Display";
import Panel from "./components/Panel";

import CustomProvider from "./utils/CustomHook";

function App() {
  return (
    <>
      <CustomProvider>
        <div className="wrapper-app">
          <NavBar />
          <Display />
          <Panel />
        </div>
      </CustomProvider>
    </>
  );
}

export default App;
