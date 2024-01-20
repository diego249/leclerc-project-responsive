"use client";

// components/Hero.js
import { React, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Aboutme = () => {

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
    <div style={{ height: '50vw' }}>
      <div className='rotatedRectangle'>
          <motion.img
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, rotate: -7 },
              hidden: { opacity: 0, y: 30, rotate: -7 },
            }}
            transition={{ duration: 0.15, delay: 0.15 }}
            src="/lec_who.png"
            alt="Imagen"
            className="image-whoami"
            style={{
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              borderRadius: '5px' }}
             />
          <div className='text-whoami font-general'>
              <motion.h1
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, rotate: -7 },
                  hidden: { opacity: 0, y: 30, rotate: -7 },
                }}
                transition={{ duration: 0.15, delay: 0.3 }}
                style={{ color: "#FDFDFD", fontSize: "4vw" }}>About me
              </motion.h1>
              <motion.p
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, rotate: -7 },
                  hidden: { opacity: 0, y: 30, rotate: -7 },
                }}
                transition={{ duration: 0.15, delay: 0.45 }}
                style={{ color: "#FDFDFD", fontSize: "1vw" }}>
                  A precocious champion with breathtaking talent,
                  Monaco’s Charles Leclerc is pursuing a sensational career in motorsport.
                  He has not stopped developing his innate talent since the earliest days,
                  thanks to his sharp intelligence, a pronounced taste for hard work and an exceedingly likeable personality.
                  Having entered Formula 1 in 2018 with Alfa Romeo Sauber F1,
                  his dream continued in 2019 inside the prestigious Scuderia Ferrari alongside four-time World Champion Sebastian Vettel.
              </motion.p>
          </div>
      </div>
    </div>
    );
  };
  
  export default Aboutme;
  