import React from "react";
import Hero from "./hero/Hero";

import Hblog from "./Hblog";
import Testimonal from "./testimonal/Testimonal";

import AboutCard from "../about/AboutCard";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="form-container2">
              <h1>SOMOS EDU-EASY</h1>
             
             
            </div>
      <AboutCard />
 
      <Testimonal />
      <Hblog />

    </>
  );
};

export default Home;
