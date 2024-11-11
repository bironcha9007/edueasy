import React from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const goToPlans = () => {
    navigate("/pricing"); // Navega a la página de planes
  };

  const goToBenefits = () => {
    navigate("/team"); // Navega a la página de beneficios
  };

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
              <button className="primary-btn" onClick={goToPlans}>
                PLANES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button onClick={goToBenefits}>
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
