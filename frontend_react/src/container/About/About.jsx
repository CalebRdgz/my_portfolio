import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {

const [abouts, setAbouts] = useState([]);

useEffect(() => {
  const query = '*[_type == "abouts"]';

  client.fetch(query)
    .then((data) => setAbouts(data))
}, []);


  return (
    <>
      <h2 className="head-text">
        I Have a Passion for <span> Growing </span>and<span> Creating </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <div className='about-text'>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);