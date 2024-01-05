import music from "../assets/music.svg";
import project2 from "../assets/project2.svg";
import project3 from "../assets/project3.svg";
import { useState } from "react";

export default function Projects() {
  const [enter, setEnter] = useState(false);
  const handleMouseEnter = (e) => {
    setEnter(true);
  };
  const handleMouseLeave = () => {
    setEnter(false);
  };
  return (
    <div className="project">
      <div className="projectContainer">
        <h2>Projects</h2>
        <div className="projectAplicationBox">
          <div className="projectBox">
            {!enter && (
              <img
                src={project2}
                className="project2"
                alt="project2Logo"
                onMouseEnter={handleMouseEnter}
              />
            )}
            {enter && (
              <>
                <img
                  src={project2}
                  className="project2"
                  alt="project2Logo"
                  onMouseLeave={handleMouseLeave}
                />
                <div className="projectOnTop">
                  <p className="p1">View live site</p>
                  <p className="p2">View github code</p>
                </div>
              </>
            )}
            <p className="projectName">Ticktok application</p>
            <div className="projectLanguage">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="projectBox">
            <img src={project3} className="project3" alt="project3Logo" />
            <p className="projectName">Fintech dashboard</p>
            <div className="projectLanguage">
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
          <div className="projectBox">
            <img src={music} className="projectMusic" alt="musicLogo" />
            <p className="projectName">E-commerce web application</p>
            <div className="projectLanguage">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="projectBox">
            <img src={project2} className="project22" alt="project22Logo" />
            <p className="projectName">Ticktok application</p>
            <div className="projectLanguage">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="projectBox">
            <img src={project3} className="project33" alt="project33Logo" />
            <p className="projectName">Fintech dashboard</p>
            <div className="projectLanguage">
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
