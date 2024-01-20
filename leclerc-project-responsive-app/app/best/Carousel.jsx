// components/Carousel.js

import { React, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ imagePaths }) => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);  

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (!Array.isArray(imagePaths) || imagePaths.length === 0) {
    return null;
  }

  return (
    <div style={{ width: '60vw', marginLeft: '10vw'}}>
        <Slider {...settings}>
            {imagePaths.map((imagePath, index) => (
                <div
                key={index}>
                <img
                    className='carousel-image'
                    src={`/${imagePath}`}
                    alt={`Slide ${index + 1}`}
                    style={{ width: '15vw', height: 'auto' }}
                />
                </div>
            ))}
        </Slider>
    </div>
    
  );
};

export default Carousel;
