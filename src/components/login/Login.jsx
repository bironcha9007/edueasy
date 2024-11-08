import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Back from "../common/back/Back";
import "./login.css";

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogin = () => {
    loginWithRedirect({
      screen_hint: isRegistering ? "signup" : "login",
    });
  };

  // Muestra un mensaje de carga mientras Auth0 obtiene la información del usuario
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Back title="Ingreso y Registro" />
      <section className="auth">
        <div className="container shadow">
          <div className="form-container">
            {isAuthenticated ? (
              <div className="user-info">
                <h3>BIENVENIDO A EDU-EASY</h3>
                <img src={user?.picture} alt={user?.name} />
                <h2>Usuario:<p> {user?.name || "Usuario"}</p></h2>
                <h2>Correo:</h2><p>{user?.email || "Email no disponible"}</p>
                <button onClick={() => logout({ returnTo: window.location.origin })}>
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <>
                {isRegistering ? (
                  <div className="register-form">
                    <h1>Registro</h1>
                    <p>Crea una cuenta para acceder a todos nuestros cursos y recursos educativos</p>
                    <button onClick={handleLogin} className="primary-btn">
                      Registrarse con Auth0
                    </button>
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
                    <button onClick={handleLogin} className="primary-btn">
                      Iniciar sesión con Auth0
                    </button>
                    <p>
                      ¿No tienes una cuenta?{" "}
                      <span onClick={toggleForm} className="toggle-link">
                        Regístrate
                      </span>
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
