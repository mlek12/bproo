import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
document.addEventListener("DOMContentLoaded", () => {
  const navToggler = document.getElementById("nav-toggler");
  const navMenu = document.getElementById("nav-menu");
  let lastScrollTop = 0;

  // Toggle navigation menu on click
  navToggler.addEventListener("click", () => {
    navMenu.classList.toggle("nav__active");
  });

  // Close navigation menu on scroll up
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
      navMenu.classList.remove("nav__active");
    }
    lastScrollTop = scrollTop;
  });
});
reportWebVitals();
