import React, { useState } from 'react';
import '../components/navbar.css';
import logo from '../assets/p.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <nav className="nav">
        <Link to="/main" className="nav__brand">
          <img src={logo} alt="Logo" className="nav__logo" />
          BantenPro
        </Link>
        <ul className={`nav__menu ${isNavActive ? 'nav__active' : ''}`}>
          <li className="nav__item">
            <Link to="/main" className="nav__link" onClick={() => setIsNavActive(false)}>
              Main Page
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/gallery" className="nav__link" onClick={() => setIsNavActive(false)}>
              Gallery
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/weather" className="nav__link" onClick={() => setIsNavActive(false)}>
              Weather
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/group" className="nav__link" onClick={() => setIsNavActive(false)}>
              Group
            </Link>
          </li>
        </ul>
        <div onClick={toggleNav} className={`nav__toggler ${isNavActive ? 'nav__active' : ''}`}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;