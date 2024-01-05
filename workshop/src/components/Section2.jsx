import img from "../assets/foto.png";
export default function Section2() {
  return (
    <>
      <div className="gintareBox">
        <h1 className="gintareh1">Get to know me</h1>
        <div className="gintareContainer">
          <img src={img} className="gintareimg" alt="img" />
          <div className="gintareBox">
            <p className="text2">
              I implement user interface design and solve user problems with
              HTML, CSS AND Javascript. I have 2 years of making products that
              solve user problems and implementing responsive website. I
              implement user interface design and solve user problems with HTML,
              CSS AND Javascript. I have 2 years of making products that solve
              user problems and implementing responsive website.I implement user
              interface design and solve user problems with HTML, CSS AND
              Javascript. I have 2 years of making products that solve user
              problems and implementing responsive website.
            </p>
            <div className="buttonBox">
              <button className="gintarebutton">Contact me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
