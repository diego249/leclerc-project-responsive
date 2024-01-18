"use_client"

import Image from 'next/image'
import Navbar from './navbar/page'
import Hero from './hero/page'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
    </div>
  );
};

export default Home;