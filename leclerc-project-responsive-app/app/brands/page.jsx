"use client";

import { React, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Brands = () => {

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
        <div className='brands-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20vh', backgroundColor: '#161616', marginLeft: '-20%', marginRight: '-27.5%'}}>
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.3 }}
              src="/ferrari.png" alt="brand_ferrari" style={{ marginRight: '10%', marginLeft: '5%' }}/>
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.3, delay: 0.15 }}
              src="/apm.png" alt="brand_ferrari" style={{ marginRight: '10%' }} />
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.3, delay: 0.3 }} 
              src="/dior.png" alt="brand_ferrari" style={{ marginRight: '10%' }}/>
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.3, delay: 0.45 }}  
              src="/richard.png" alt="brand_ferrari" style={{ marginRight: '10%' }}/>
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.3, delay: 0.6 }}  
              src="/vista.png" alt="brand_ferrari" style={{ marginRight: '10%' }}/>
            <motion.img
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.3, delay: 0.75 }}  
              src="/riva.png" alt="brand_ferrari" style={{ marginRight: '10%' }}/>
        </div>
      );
    };
    
export default Brands;