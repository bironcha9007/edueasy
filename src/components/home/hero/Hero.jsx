import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="BIENVENIDO A EDU-EASY"
              title="La mejor herramienta para Instituciones Educativas"
            />
            <p>
            Nuestro Sistema de Gestión Educativa optimiza el funcionamiento de instituciones de educación básica y media, aprovechando al máximo las tecnologías de la información y comunicación (TIC).
            </p>
            <div className="button">
              <button className="primary-btn">
                PLANES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                BENEFICIOS <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
