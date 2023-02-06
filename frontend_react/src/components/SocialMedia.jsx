import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";


const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/CalebRdgz/">
        <div>
          <AiFillGithub />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/calebrdgz/">
        <div>
          <AiFillLinkedin />
        </div>
      </a>
      
      <a href="mailto:calebrodgz@gmail.com">
        <div>
          <AiFillMail />
        </div>
      </a>
    </div>
  );
}

export default SocialMedia