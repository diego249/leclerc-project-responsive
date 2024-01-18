"use client";

// components/Navbar.js
import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
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
        <div>
            <motion.nav
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30 },
                }}
                transition={{ duration: 0.3 }}
                className="w-full bg-transparent fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8 lg:ml-48 lg:mr-48 lg:ml-0 lg:mr-0">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* Logo */}
                            <Link href="/">
                                <img src="/ferrari_logo_black.png" alt="Icon" className="mr-2" style={{ width: 'auto' }} />
                            </Link>
                            {/* Hamburger mobile*/}
                            <div className="md:hidden">
                                <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                                >
                                {navbar ? (
                                    
                                    <button className="text-black focus:outline-none">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                ) : (
                                    <button className="text-black focus:outline-none">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                        </svg>
                                    </button>
                                )}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Items nav */}
                    <div>
                        <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'p-12 md:p-0 block' : 'hidden'
                        }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="font-general pb-6 text-m py-2 md:px-6 text-center border-b-2 md:border-b-0" style={{ color: "#6C6C6C" }}>
                                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="font-general pb-6 text-m py-2 px-6 text-center  border-b-2 md:border-b-0" style={{ color: "#6C6C6C" }}>
                                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                                        About me
                                    </Link>
                                </li>
                                <li className="font-general pb-6 text-m py-2 px-6 text-center  border-b-2 md:border-b-0" style={{ color: "#6C6C6C" }}>
                                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                                        The best
                                    </Link>
                                </li>
                                <li className="font-general pb-6 text-m py-2 px-6 text-center  border-b-2 md:border-b-0" style={{ color: "#6C6C6C" }}>
                                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                        Brands
                                    </Link>
                                </li>
                                <li className="font-general pb-6 text-m py-2 px-6 text-center  border-b-2 md:border-b-0" style={{ color: "#6C6C6C" }}>
                                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                        Stats
                                    </Link>
                                </li>
                                <li className="font-general pb-6 text-m py-2 px-6 text-center  border-b-2 md:border-b-0" style={{ color: "#6C6C6C" }}>
                                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};

export default Navbar;