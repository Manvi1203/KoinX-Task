import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import koinxlogo from './koinx-logo.png';
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={koinxlogo} alt="Logo" />
      </div>
      <div className={`nav-links ${showMenu ? 'show' : ''}`}>
        <a href="#">Features</a>
        <a href="#">Exchanges</a>
        <a href="#">How it Works?</a>
        <a href="#">Blog</a>
        <a href="#">About us</a>
      </div>
      <button className="signin-button">Sign In</button>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'change' : ''}`} />
        <div className={`bar ${showMenu ? 'change' : ''}`} />
        <div className={`bar ${showMenu ? 'change' : ''}`} />
      </div>
    </div>
  );
};

export default Navbar;
