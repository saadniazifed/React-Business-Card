import React from "react";
import facebook from "./images/facebook.png";
import github from "./images/github.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div>
        <img src={facebook} alt="Facebook Logo" />
        <img src={github} alt="Github Logo" />
        <img src={instagram} alt="Instagram Logo" />
        <img src={twitter} alt="Twitter Logo" />
      </div>
    </div>
  );
}
