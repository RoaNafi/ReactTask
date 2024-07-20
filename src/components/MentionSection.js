import React from 'react';
import '../styles/HappyNewsSection.css';
import undraw_happy_news_hxmt from '../images/undraw_mention_6k5d.png';

const MentionSection = () => {
  return (
    <section className="feature-section">
      <div >
        <img className='mention-image' src={undraw_happy_news_hxmt} alt="Feature Illustration" />
      </div>
      <div className="feature-content">
        <h2>Light, Fast & Powerful</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br/><br/>
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

        <button className="Purchase-Now">Purchase Now</button>
      </div>
      
      
    </section>
  );
};

export default MentionSection;
