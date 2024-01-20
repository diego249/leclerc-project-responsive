"use client";

import { React, useState, useEffect } from 'react';
import Carousel from './Carousel';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Best = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);  

    const imagePaths = [
        'best1.png',
        'best2.png',
        'best3.png',
        'best4.png',
        'best5.png',
      ];

    return (
        <div
            style={{ justifyContent: 'center', height: '50vw'}}>
            <div className='p-8'>
                <motion.h1
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 30 },
                  }}
                  transition={{ duration: 0.3 }}
                  className='font-general'
                  style={{ fontSize: '4vw', color: '#A30016' }}>The Best</motion.h1>
                <motion.h2
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 30 },
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className='font-general'
                  style={{ fontSize: '2.5vw', color: '#161616' }}>Moments</motion.h2>
            </div>
            <Carousel imagePaths={imagePaths} />
        </div>
      );
    };
    
    export default Best;