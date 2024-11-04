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
            <input type="text" placeholder="Enter email address" />
            <button className="subscribe-btn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container container">
          <div className="footer-section">
            <h3>Enlaces</h3>
            <ul className="footer-links">
              <li><a href="#module1">Módulo 1</a></li>
              <li><a href="#module2">Módulo 2</a></li>
              <li><a href="#module3">Módulo 3</a></li>
              <li><a href="#module4">Módulo 4</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <p>
              <i className="fa fa-map-marker"></i> Calle Ficticia 123, Ciudad, País
            </p>
            <p>
              <i className="fa fa-phone"></i> +123 456 7890
            </p>
            <p>
              <i className="fa fa-envelope"></i> contacto@edueasy.com
            </p>
          </div>

          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="#facebook"><i className="fa fa-facebook"></i></a>
              <a href="#twitter"><i className="fa fa-twitter"></i></a>
              <a href="#instagram"><i className="fa fa-instagram"></i></a>
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
