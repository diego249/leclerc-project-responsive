"use_client"

import Image from 'next/image'
import Navbar from './navbar/page'
import Hero from './hero/page'
import Aboutme from './aboutme/page'
import Best from './best/page'
import Brands from './brands/page'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Aboutme />
      <Best />
      <Brands />
    </div>
  );
};

export default Home;