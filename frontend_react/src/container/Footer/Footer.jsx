import { React } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {

  return (
    <>
      <h2 className="head-text contact-me">
        <span>Contact</span> me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:calebrodgz@gmail.com" className="p-text">
            calebrodgz@gmail.com
          </a>
        </div>
      </div>

      <h2 className="head-text contact-me">
        Thanks for getting in <span>touch</span>!
      </h2>
    </>
  );
};


export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
