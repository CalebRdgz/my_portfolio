import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import "./Header.scss";
import "./waving.scss";

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span className="wave">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hey! I'm</p>
              <h1 className="head-text">Caleb</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Full Stack Developer</p>
            <p className="p-text">Problem Solver</p>
          </div>

          <div className="tag-cmp app__flex">
            <div className="my-info">
              <p className="p-text">
                Thanks for stopping by! I am an Alumni of the Hack Reactor 19 week full stack 
                software engineering immersive boot camp where I developed multiple full
                stack applications and became the software engineer I am today. 
                I continue to work on personal projects to practice and hone my skills 
                as a full stack web developer.
              </p>
            </div>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, delayChildren: 1 }}
          src={images.circle}
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.python, images.javascript, images.react, images.django].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');