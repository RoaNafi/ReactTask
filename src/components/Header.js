import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="logo">Landing</div>
      <button className="buy-now">Buy Now</button>
    </header>
  );
};

export default Header;
