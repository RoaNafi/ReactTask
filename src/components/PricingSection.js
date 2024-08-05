import React from 'react';
import '../styles/PricingSection.css';

const PricingSection = () => {
  return (
    <section className="pricing-section
    ">
      <div className="pricing-content">
        <h2>A Price To Suit Everyone</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <div className="price">
          <h3>$40</h3>
          <span className="kit">UI Design Kit</span>
        </div>
        <span 
        className="purchase-par">See, One price. Simple.</span>
        <button className="purchase-button">Purchase Now</button>
      </div>
    </section>
  );
};

export default PricingSection;
