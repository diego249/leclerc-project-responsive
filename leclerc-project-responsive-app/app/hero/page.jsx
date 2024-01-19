"use client";

// components/Hero.js
import { React, useEffect } from 'react';
import ImageStack from './ImageStack';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

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
    <div style={{ height: '100vh' }}>
      <div className="text-white p-8" style={{ position: 'absolute', top: '25vw', left: '10%', transform: 'translate(0%, -50%)' }}>
        {/* Cartel con opacidad detrás de los h1 */}
        <div
          className="absolute flex items-center"
          style={{
            top: '12.5vw',
            left: '5%',
            transform: 'translate(0%, -50%)',
            zIndex: -1, // Coloca el cartel detrás de los h1
            width: '100%', // Ajusta el ancho según tus necesidades
            height: '100%', // Ajusta la altura según tus necesidades
          }}
        >
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 0.05, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            transition={{ duration: 0.3 }}
            className="text-custom-large title-charles"
            style={{ marginRight: '3rem' }}>Charles
          </motion.h1>
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 0.05, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            transition={{ duration: 0.3 }}
            className="text-custom-large title-leclerc">Leclerc
          </motion.h1>
        </div>
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 30 },
          }}
          transition={{ duration: 0.3 }}>
          <span className='title-ferrari'>FERRARI</span>
        </motion.h1>
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 30 },
          }}
          transition={{ duration: 0.3, delay: 0.15 }}>
          <span className='title-formula'>Formula One</span>
        </motion.h1>
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 30 },
          }}
          transition={{ duration: 0.3, delay: 0.3 }}>
          <span className='title-formula'>Driver</span>
        </motion.h1>
      </div>
      <div style={{ position: 'absolute', top: '10vw', left: '52.5%' }}>
        <ImageStack />
      </div>
    </div>
  );
};

export default Hero;