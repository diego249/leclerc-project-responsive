// components/Hero.js
import { React, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageStack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div style={{ position: 'relative', width: '25vw', height: 'auto' }}>
      <motion.img
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: 10, y: 10 },
        }}
        transition={{ duration: 0.3 }}
        src="/lec1.png"
        alt="Lec1.png"
        style={{
          position: 'absolute',
          width: '12vw',
          height: 'auto',
          top: '0',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          borderRadius: '3px',
          transition: 'transform 0.3s' }} />
      <motion.img
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: 10, y: 10 },
        }}
        transition={{ duration: 0.3, delay: 0.15 }}
        src="/lec2.png"
        alt="Lec2.png"
        style={{
          position: 'absolute',
          width: '12vw',
          height: 'auto',
          top: '5vw',
          left: '10vw',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          borderRadius: '3px',
          transition: 'transform 0.5s' }} />
      <motion.img
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: 10, y: 10 },
        }}
        transition={{ duration: 0.3, delay: 0.3 }}
        src="/lec3.png"
        alt="Lec3.png"
        style={{
          position: 'absolute',
          width: '12vw',
          height: 'auto',
          top: '12.5vw',
          left: '20vw',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          borderRadius: '3px',
          transition: 'transform 0.5s' }} />
  </div>
  );
};
  
export default ImageStack;