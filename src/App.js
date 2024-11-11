import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import CourseHome from "./components/allcourse/CourseHome";
import Team from "./components/team/Team";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

// RUTA PROTEGIDA para componentes que requieren autenticación
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loginWithRedirect, error } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  if (error) {
    console.error("Error durante la autenticación:", error);
    return <div>Error durante la autenticación. Por favor, inténtelo de nuevo.</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : null
      }
    />
  );
};

function App() {
  const [scrollPercent, setScrollPercent] = useState(0);

  // Maneja el scroll y la visibilidad del botón
  useEffect(() => {
    const handleScroll = () => {
      const bodyHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / bodyHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para volver al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Verifica que las variables de entorno necesarias estén presentes
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE; // Incluye la audiencia para Auth0

  if (!domain || !clientId) {
    console.error("Faltan las configuraciones de dominio o cliente para Auth0");
    return <div>Error de configuración de autenticación</div>;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: audience,
        scope: "openid profile email" // Define los alcances necesarios
      }}
    >
      <Router>
        <Header />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route exact path="/team" component={Team} />
          <ProtectedRoute exact path="/pricing" component={Pricing} />
          <Route exact path="/journal" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />

        {/* Botón de volver arriba */}
        <button
          className={`back-top-btn ${scrollPercent > 10 ? "show" : ""}`}
          onClick={scrollToTop}
        >
          {scrollPercent.toFixed(0)}%
        </button>
      </Router>
    </Auth0Provider>
  );
}

export default App;
