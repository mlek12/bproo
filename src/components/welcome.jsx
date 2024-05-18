// Welcome.js
import React from 'react';
import './welcome.css';
import foto from '../assets/p.png';

function Welcome() {
  return (
    <div className="main-page">
      <div className="content">
        <div className="right-image">
          <img src={foto} alt="Right" />
        </div>
        <div className="left-content">
          <div className="center-text">
            <h1>Selamat Datang di BantenPro!</h1>
          </div>
          <a href="/main" className="btn">
            Let's Start
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;