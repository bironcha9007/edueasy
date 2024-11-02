import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Nosotros</h1>
            <span>Nuestro Sistema de Gestión Educativa fortalece instituciones de educación básica y media gracias a la integración adecuada de las tecnologías de la información y las Comunicaciones (TIC).</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-papper-plane"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
