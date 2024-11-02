import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
       
            <img
              src={process.env.PUBLIC_URL + "/logo.png"} // Ruta relativa a la imagen
              alt="EDU-EASY Logo"
               // Ajusta el tamaño según sea necesario
            />
      
          </div>

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
            <a href="/login" className="login-icon">
              <i className="fas fa-sign-in-alt icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
