import React from 'react';
import '../styles/LoginSection.css';
import mobile_login from '../images/undraw_mobile_login_ikmv.png';
import TitleIcone from '../images/TitleIcone.png'
const LoginSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <h2>Light, Fast & Powerful</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br/><br/>
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div className="feature-list">
          <div className="feature-item">
            <img src={TitleIcone} alt="TitleIcone" /> 
            <h3>Title Goes Here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
          </div>
          <div className="feature-item">
            <img src={TitleIcone} alt="TitleIcone" />
            <h3>Title Goes Here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
          </div>
        </div>
      </div>
      <div className="feature-image">
        <img src={mobile_login} alt="Feature Illustration" />
      </div>
    </section>
  );
};

export default LoginSection;
