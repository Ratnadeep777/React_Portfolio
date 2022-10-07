import React from "react";
import "./About.css";
import aboutImg from "./img/Profile-pic.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hey There!!
                <br />
                This is Ratnadeep Waghmare aka Vicky
                <br />
                I'm a self-driven IT professional with extensive knowledge and expertise in Java, HTML, CSS, JavaScript, and React web development, as well as good communication and management skills.
              </p>
              <p className="about__text p__color">
                Career Objective : Seeking a challenging position in the field of Information Technology with a lively work environment where I can grow personally while also contributing to the company's growth via my great communication, technical, and organizational abilities.
              </p>
              {/* <div className="about__button d__flex align__items__center">
                <a href="./img/Siddhartha-Resume.pdf" download='Siddhartha-Resume'>
                  <button className="about btn pointer">Resume</button>
                </a>
                <a href="https://www.buymeacoffee.com/notsid" target="_blank">
                  <button className="about btn pointer">Support</button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
