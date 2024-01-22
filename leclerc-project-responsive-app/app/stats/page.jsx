"use client";

import { React, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {

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
        <div className='stats-container'
            style={{ height: '40vw'}}>
            <div className='p-8' style={{ marginLeft: '10%' }}>
                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 30 },
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className='font-general'
                    style={{ fontSize: '4vw', color: 'black' }}>Stats
                </motion.h1>
            </div>
            <div className="top-row" style={{ marginLeft: '10%' }}>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -30 },
                    }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className="top-div first-div"
                    style={{ borderColor: '#A30016' }}>
                    <h1 className='font-general'>Races</h1>
                    <div className="dot-container">
                        <div className="dot" style={{ backgroundColor: '#A30016' }}></div>
                    </div>
                    <p className='font-general'>125</p>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 30 },
                    }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="top-div second-div"
                    style={{ borderColor: '#A30016' }}>
                    <h1 className='font-general'>Victories</h1>
                    <div className="dot-container">
                        <div className="dot" style={{ backgroundColor: '#A30016' }}></div>
                    </div>
                    <p className='font-general'>5</p>
                </motion.div>
            </div>
            <div className="bottom-row" style={{ marginLeft: '10%' }}>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -30 },
                    }}
                    transition={{ duration: 0.3, delay: 0.75 }}
                    className="bottom-div third-div"
                    style={{ borderColor: '#A30016' }}>
                    <h1 className='font-general'>Podiums</h1>
                    <div className="dot-container">
                        <div className="dot" style={{ backgroundColor: '#A30016' }}></div>
                    </div>
                    <p className='font-general'>30</p>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 30 },
                    }}
                    transition={{ duration: 0.3, delay: 1 }}
                    className="bottom-div four-div"
                    style={{ borderColor: '#A30016' }}>
                    <h1 className='font-general'>Poles</h1>
                    <div className="dot-container">
                        <div className="dot" style={{ backgroundColor: '#A30016' }}></div>
                    </div>
                    <p className='font-general'>27</p>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 30 },
                    }}
                    transition={{ duration: 0.3, delay: 1.25 }}
                    className="bottom-div last-div">
                    <h1 className='font-general'>Highest championship<br/> position</h1>
                    <div className="dot-container">
                        <div className="dot" style={{ backgroundColor: '#A30016' }}></div>
                    </div>
                    <p className='font-general'>2</p>
                </motion.div>
            </div>
        </div>
      );
    };
    
export default Stats;