import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LoginSection from './components/LoginSection';
import HappyNewsSection from './components/HappyNewsSection';
import SocialInfluencerSection from './components/SocialInfluencerSection';
import MentionSection from './components/MentionSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <LoginSection/>
      <HappyNewsSection/>
      <SocialInfluencerSection/>
      <MentionSection/>
      <PricingSection/>
      <Footer/>
      <Footer/>
    </div>
  );
}

export default App;
