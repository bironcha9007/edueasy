import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container flexSB">
          <div className="left">
            <div className="logo">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="EDU-EASY Logo"
              />
            </div>
            <h1>Nosotros</h1>
            <p>
              Nuestro Sistema de Gestión Educativa fortalece instituciones de
              educación básica y media gracias a la integración adecuada de las
              tecnologías de la información y las Comunicaciones (TIC).
            </p>
          </div>
          <div className="right">
            <input type="text" placeholder="Enter email address" id="foot"/>
            <button className="subscribe-btn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container container">
          <div className="footer-section">
            <h3>Conoce:</h3>
            <ul className="footer-links">
              <li><a href="/allcourse">SERVICIOS</a></li>
              <li><a href="/pricing">PLANES</a></li>
              <li><a href="/login">INGRESO</a></li>
              <li><a href="/about">NOSOTROS</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contacto:</h3>
            <p>
              <i className="fa fa-map-marker"></i> Bogotá, Colombia
            </p>
            <p>
              <i className="fa fa-phone"></i> +57 3012491404
            </p>
            <p>
              <i className="fa fa-envelope"></i> contacto@edueasy.com
            </p>
          </div>

          <div className="footer-section">
            <h3>Síguenos en:</h3>
            <div className="social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube icon"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok icon"></i>
            </a>
          </div>
          </div>
        </div>

        <div className="legal">
          <p>© 2023 EDU-EASY. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
