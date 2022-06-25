import React from "react";
import Saad from "./images/Saad.jpeg";

export default function Info() {
  return (
    <div className="infoContainer">
      <div>
        <img src={Saad} alt="Logo" />{" "}
      </div>

      <div>
        <p>Saad Niazi</p>
        <p>Front End Developer (MERN Stack)</p>
        <p>LinkedIn Username: saadniazifed</p>
        <button>Email</button>
      </div>
    </div>
  );
}
