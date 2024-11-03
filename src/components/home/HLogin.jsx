import React, { useState } from "react";
import Back from "../common/back/Back";
import Heading from "../common/heading/Heading";

import { coursesCard } from "../../dummydata";
import "../login/login.css";

const HLogin = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
      <Back title="Ingreso y Registro" />
      <section className="auth">
        <div className="container shadow">
          {isRegistering ? (
            <div className="form-container">
              <h1>Registro</h1>
              <p>Crea una cuenta para acceder a todos nuestros cursos y recursos educativos</p>
              <form>
                <input type="text" placeholder="Nombre completo" required />
                <input type="email" placeholder="Correo electrónico" required />
                <input type="password" placeholder="Contraseña" required />
                <input type="password" placeholder="Confirmar contraseña" required />
                <button className="primary-btn">Registrarse</button>
              </form>
              <p>
                ¿Ya tienes una cuenta?{" "}
                <span onClick={toggleForm} className="toggle-link">
                  Inicia sesión
                </span>
              </p>
            </div>
          ) : (
            <div className="courses-section">
              <Heading subtitle="Nuestros cursos" title="Explora nuestros cursos populares en línea" />
              <div className="coursesCard grid2">
                {coursesCard.slice(0, 3).map((val) => (
                  <div className="items" key={val.coursesName}>
                    <div className="content flex">
                      <div className="left">
                        <div className="img">
                          <img src={val.cover} alt={val.coursesName} />
                        </div>
                      </div>
                      <div className="text">
                        <h1>{val.coursesName}</h1>
                        <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <label>(5.0)</label>
                        </div>
                        <div className="details">
                          {val.courTeacher.map((details, index) => (
                            <div className="box" key={index}>
                              <div className="dimg">
                                <img src={details.dcover} alt={details.name} />
                              </div>
                              <div className="para">
                                <h4>{details.name}</h4>
                              </div>
                              <span>{details.totalTime}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <h3>
                        {val.priceAll} / {val.pricePer}
                      </h3>
                    </div>
                    <button className="outline-btn">¡INSCRÍBETE AHORA!</button>
                  </div>
                ))}
              </div>
              <p>
                ¿No tienes una cuenta?{" "}
                <span onClick={toggleForm} className="toggle-link">
                  Regístrate
                </span>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HLogin;
