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
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: '1vw', // Ajusta el espacio entre las imágenes
    variableWidth: true,
    // autoplay: true, // Habilita la reproducción automática
    // autoplaySpeed: 1000,
  };

  // Asegúrate de que imagePaths sea un array antes de llamar a map
  if (!Array.isArray(imagePaths) || imagePaths.length === 0) {
    return null; // O maneja este caso de manera apropiada para tu aplicación
  }

  return (
    <div style={{ width: '70vw', marginLeft: '5%' }}>
        <Slider {...settings}>
            {imagePaths.map((imagePath, index) => (
                <div
                key={index}>
                <img
                    className={ 'carousel-image' }
                    src={`/${imagePath}`}
                    alt={`Slide ${index + 1}`}
                />
                </div>
            ))}
        </Slider>
    </div>
    
  );
};

export default Carousel;
