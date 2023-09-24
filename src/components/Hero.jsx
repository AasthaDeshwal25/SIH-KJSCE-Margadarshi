import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSection.css'; // Create a CSS file for styling

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change autoplay speed to 5 seconds
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  const slides = [
    { imgSrc: 'assets/Home_hero1.png' },
    { imgSrc: 'assets/Home_hero2.png' },
    { imgSrc: 'assets/Home_hero3.png' },
    { imgSrc: 'assets/Home_hero4.png' },
  ];

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.imgSrc} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <div className="dot-navigation">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
