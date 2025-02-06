import React from 'react';
import image1 from "../../assets/hero/heroimage1.webp";
import image2 from "../../assets/hero/heroimage2.webp";
import image3 from "../../assets/hero/heroimage3.webp";
import image4 from "../../assets/hero/heroimage4.webp";
import image5 from "../../assets/hero/heroimage5.webp";
import image6 from "../../assets/hero/heroimage6.webp";
import image7 from "../../assets/hero/heroimage7.webp";
import image8 from "../../assets/hero/heroimage8.webp";
import image9 from "../../assets/hero/heroimage9.webp";
import './hero.css';

const Hero = () => {
  const images = [
    { id: 1, src: image1, alt: 'Burger' },
    { id: 2, src: image2, alt: 'Milkshake' },
    { id: 3, src: image3, alt: 'Burger hands' },
    { id: 4, src: image4, alt: 'Fries box' },
    { id: 5, src: image5, alt: 'Fries standing' },
    { id: 6, src: image6, alt: 'Fries standing' },
    { id: 7, src: image7, alt: 'Fries standing' },
    { id: 8, src: image8, alt: 'Fries standing' },
    { id: 9, src: image9, alt: 'Fries standing' }
  ];

  return (
    <div className="w-full px-4 md:px-8 py-8 bg-amber-200">
      <div className="text-center max-w-4xl mx-auto relative z-10 mb-16">
        <h2 className="text-6xl md:text-9xl font-black mb-2 leading-tight">
          SAVOR EVERY
        </h2>
        <div className="text-6xl md:text-9xl font-black mb-2 leading-tight inline-flex items-center">
          DELICIOUS{' '}
          <span
            className="inline-block -rotate-2 ml-3"
            style={{
              color: '#FF5733',
              fontFamily: 'Comic Sans MS, cursive',
              fontWeight: 'bold',
              textShadow: '3px 3px 0 #000',
              WebkitTextStroke: '2px black',
              letterSpacing: '0.02em',
              lineHeight: '1.1',
            }}
          >
            Bite
          </span>
        </div>
      </div>
      <div className="carousel-container w-full perspective-1000">
        <div className="carousel-content relative w-full h-full animate-rotate">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="carousel-item border-4 border-black-500"
              style={{
                backgroundImage: `url(${image.src})`, 
                transform: `rotateY(${(360 / images.length) * index}deg) translateZ(${window.innerWidth < 768 ? 300 : 400}px)`, 
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
