import "./App.css";
import React from "react";
// import { ReactDOM } from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";

function App() {
  return (
    <div className="appContainer">
      <Info />
      <About />
      <Interests />
    </div>
  );
}

export default App;
