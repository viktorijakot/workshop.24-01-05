import React from "react";
import myImage from "../assets/foto.png";

export default function Section1() {
  return (
    <>
      <div className="top">
        <div className="right">
          <h3>FemiBlaq</h3>
        </div>
        <div className="left">
          <h5>About</h5>
          <h5>Projects</h5>
          <h5>Contact</h5>
        </div>
      </div>
      <div className="middle">
        <div className="text">
          <h3 className="first">ADEYEMO OLUFEMI</h3>
          <h2 className="second">FRONTEND DEVELOPER</h2>
          <p className="third">
            I implement user interface design and solve user problems with HTML,
            CSS AND Javascript. I have 2 years of making products that solve
            user problems and implementing responsive website.
          </p>
          <button className="whyIamCrying">Contact me</button>
        </div>
        <div className="image">
          <div className="image">
            <img src={myImage} alt="Ryan" className="Ryan" />
          </div>
        </div>
      </div>
    </>
  );
}
