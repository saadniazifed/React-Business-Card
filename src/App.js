import "./App.css";
import React from "react";
// import { ReactDOM } from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

function App() {
  return (
    <div className="appContainer">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
