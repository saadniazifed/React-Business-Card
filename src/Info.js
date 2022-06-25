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
        <p>Front End Developer (MERN)</p>
        <p>LinkedIn: SaadNiaziFed</p>
        <button>Email</button>
      </div>
    </div>
  );
}
