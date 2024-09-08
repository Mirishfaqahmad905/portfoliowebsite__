import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`container nav_bar ${isOpen ? 'active' : ''}`}>
        <div className="left nav_item">Portfolio</div>

        <div className="hamburger" onClick={toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="right">
          <Link to="home" smooth={true} duration={500}>
            <span className="nav_item" id="home">Home</span>
          </Link>
          <Link to="experience" smooth={true} duration={500}>
            <span className="nav_item" id="experience">Experience</span>
          </Link>
          <Link to="skill" smooth={true} duration={500}>
            <span className="nav_item" id="skill">Skill</span>
          </Link>
          <Link to="project" smooth={true} duration={500}>
            <span className="nav_item">Project</span>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <span className="nav_item" id="contact">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
