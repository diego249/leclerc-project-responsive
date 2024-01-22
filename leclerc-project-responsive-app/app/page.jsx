"use_client"

import Image from 'next/image'
import Navbar from './navbar/page'
import Hero from './hero/page'
import Aboutme from './aboutme/page'
import Best from './best/page'
import Brands from './brands/page'
import Stats from './stats/page'
import Footer from './footer/page'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Aboutme />
      <Best />
      <Brands />
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;