import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <AiFillGithub />
      </div>
      <div>
        <AiFillLinkedin />
      </div>
      <div>
        <AiFillMail />
      </div>
    </div>
  );
}

export default SocialMedia