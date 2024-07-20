import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <p>&copy; 2023 Yourcompany</p>
          <div className="footer-logo">Landing</div>
          <button className="purchase">Purchase now</button>
        </div>
        <div className="footer-bottom">
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
