import { React } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:calebrodgz@gmail.com" className="p-text">
            calebrodgz@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (469) 493-6698" className="p-text">
            +1 (469) 493-6698
          </a>
        </div>
      </div>

        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
