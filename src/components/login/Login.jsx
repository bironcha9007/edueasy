import React, { useState } from "react";
import Back from "../common/back/Back";
import "./login.css";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
      <Back title="Ingreso y Registro" />
      <section className="auth">
        <div className="container shadow">
          <div className="form-container">
            {isRegistering ? (
              <div className="register-form">
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
              <div className="login-form">
                <h1>Iniciar Sesión</h1>
                <p>Ingresa a tu cuenta para continuar aprendiendo con nosotros</p>
                <form>
                  <input type="email" placeholder="Correo electrónico" required />
                  <input type="password" placeholder="Contraseña" required />
                  <button className="primary-btn">Ingresar</button>
                </form>
                <p>
                  ¿No tienes una cuenta?{" "}
                  <span onClick={toggleForm} className="toggle-link">
                    Regístrate
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
