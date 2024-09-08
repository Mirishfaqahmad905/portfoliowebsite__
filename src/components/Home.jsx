import React from 'react';
import cv from '../assets/pdf/cv.pdf';
import image from '../assets/dev.jpg';

const Home = () => {
  return (
    <div className="container home" id='home'>
      <div className="left" id='home'>
        <h1 style={{ color: 'white' }}>
          Hello I am <span style={{ color: 'yellow' }}>a Full Stack Developer</span>
        </h1>
        <a
          href={cv}
          download='cv.pdf'
          className="btn btn-outline-warning"
          style={{ outlineColor: 'yellow', color: 'yellow', backgroundColor: 'black' }}
        >
          Download CV
        </a>
      </div>
      <div className="right">
        <div className="img">
          <img src={image} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
