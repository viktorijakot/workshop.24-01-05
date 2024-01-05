import twitter from "../assets/twitter.svg";
import copyright from "../assets/copyright.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

function Section3() {
  return (
    <div className="rasabox">
      <div className="rasabox2">
        <div className="rasacontainer1">
          <div>
            <span className="rasafirst">DO you have a project in mind?</span>
          </div>
          <div>
            <span className="rasasecond">Contact me!</span>
          </div>
          <div>
            <span className="rasathird">adeyemotolulope2@gmail.com</span>
          </div>
        </div>

        <div className="rasacontainer2">
          <span className="rasatext">FemiBlaq</span>

          <div className="rasaicon-gap">
            <a href="#">
              <img src={instagram} alt="icon" />
            </a>
            <a href="#">
              <img src={linkedin} alt="icon" />
            </a>
            <a href="#">
              <img src={github} alt="icon" />
            </a>
            <a href="#">
              <img src={twitter} alt="icon" />
            </a>
          </div>
        </div>

        <div className="rasacontainer3">
          <div>
            <a href="#">
              <img src={copyright} className="rasaimg" alt="icon" />
            </a>
          </div>
          <span className="rasaend">FemiBlaq 2022</span>
        </div>
      </div>
    </div>
  );
}

export default Section3;
