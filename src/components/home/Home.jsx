import React from "react";
import Hero from "./hero/Hero";

import Hblog from "./Hblog";
import Testimonal from "./testimonal/Testimonal";

import AboutCard from "../about/AboutCard";

const Home = () => {
  return (
    <>
      <Hero />
      
      <AboutCard />
 
      <Testimonal />
      <Hblog />

    </>
  );
};

export default Home;
