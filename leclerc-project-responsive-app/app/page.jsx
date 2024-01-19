"use_client"

import Image from 'next/image'
import Navbar from './navbar/page'
import Hero from './hero/page'
import Aboutme from './aboutme/page'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Aboutme />
    </div>
  );
};

export default Home;