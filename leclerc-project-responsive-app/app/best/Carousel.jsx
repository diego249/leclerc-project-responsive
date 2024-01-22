// components/Carousel.js

import { React, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { distance, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomNextArrow = (props) => (
    <div
        className="custom-next-arrow"
        onClick={props.onClick}
        style={{ position: "absolute", right: "-5%", top: "50%", zIndex: 1 }}
    >
        <IoIosArrowForward />
    </div>
);
  
const CustomPrevArrow = (props) => (
    <div
        className="custom-prev-arrow"
        onClick={props.onClick}
        style={{ position: "absolute", left: "-5%", top: "50%", zIndex: 1 }}
    >
        <IoIosArrowBack />
    </div>
);

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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  if (!Array.isArray(imagePaths) || imagePaths.length === 0) {
    return null;
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
        }}
        transition={{ duration: 0.15 }}
        style={{ width: '60vw', marginLeft: '10vw', marginTop: '2vw'}}>
        <Slider {...settings} afterChange={handleSlideChange}>
        {imagePaths.map((imagePath, index) => {
          const distanceFromCenter = Math.abs(index - currentSlide);
          const scale = distanceFromCenter === 1 ? 1 : 0.8;
          const blur = distanceFromCenter > 1 || distanceFromCenter < 1 ? 'blur(5px)' : 'none';

          return (
            <div key={index}>
              <img
                className='carousel-image'
                src={`/${imagePath}`}
                alt={`Slide ${index + 1}`}
                style={{
                  transform: `scale(${scale})`,
                  filter: blur,
                  transition: 'transform 0.45s, filter 0.45s',
                  width: '15vw',
                  height: 'auto',
                  borderRadius: '3px',
                }}
              />
            </div>
          );
        })}
      </Slider>
    </motion.div>
  );
};

export default Carousel;
