import React from "react";
import './hero.css';

const HeroSection = () => {
  const handleButtonClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="animate-slide title">Innovative Software Solutions</h1>
            <p className="animate-slide description">Building the future of technology</p>
          </div>
          <button className="homepagebtn" onClick={handleButtonClick}>
            Explore Our Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;