import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../images/Group.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Introduce Your Product Quickly & Effectively</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br/><br/>
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div className="hero-buttons">
          <button className="primary-button">Purchase UI Kit</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero Illustration" />
      </div>
    </section>
  );
};

export default HeroSection;
