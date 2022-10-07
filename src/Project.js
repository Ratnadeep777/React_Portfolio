import React from "react";
import "./Project.css";
import Project1 from "./img/Tribute-Site.png";
import Project2 from "./img/Testinomials-grid-section.png";
import Project3 from "./img/Tip-Calculator.png";
import Project4 from "./img/Portfolio.png";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          Some of the projects I've worked or currently working on...
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text"></h5>
                <h4 className="project__text">Tribute-Site</h4>
                <a href="https://superb-douhua-50bd67.netlify.app/" className="project__btn" target="_blank" rel="noreferrer">
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text"></h5>
                <h4 className="project__text">Testinomials-Grid-Section</h4>
                <a href="https://beautiful-cranachan-52e8c1.netlify.app/" className="project__btn" target="_blank" rel="noreferrer">
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text"></h5>
                <h4 className="project__text">Tip-Calculator</h4>
                <a href="https://gleeful-marigold-2da19d.netlify.app/" className="project__btn" target="_blank" rel="noreferrer" >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Portfolio</h4>
                     <h4 className="project__text"></h4>
                     <a href="#" className="project__btn">View</a>
                     </div>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
