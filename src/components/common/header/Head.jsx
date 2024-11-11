import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Head = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="EDU-EASY Logo" />
          </div>

          <div className="social">
            <div><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube icon"></i>
            </a>
            </div>

            {/* Botón de Login / Logout con Dropdown */}
            <div className="login-dropdown" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="login-icon">
                {isAuthenticated ? (
                  <>
                    <img src={user.picture} alt="User Profile" className="user-icon" />
                    <span className="spl">{user.name}</span>
                  </>
                ) : (
                  <i className="fas fa-sign-in-alt icon"></i>
                )}
              </button>

              {/* Submenú desplegable */}
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  
                  {isAuthenticated ? ( 
                    <button className="butonlo" onClick={() => logout({ returnTo: window.location.origin })}>
                      Cerrar Sesión
                    </button>
                  ) : (
                    <button className="butonlo" onClick={() => loginWithRedirect()}>
                      Iniciar Sesión
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
