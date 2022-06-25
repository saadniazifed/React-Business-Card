import React from "react";
import ReactDOM from "react-dom";
import Saad from "./images/Saad.jpeg";

export default function Info() {
  return (
    <div className="infoContainer">
      <div>
        <img src={Saad} alt="Logo" />{" "}
      </div>
    </div>
  );
}
