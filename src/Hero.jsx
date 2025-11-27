// Hero.jsx

import React from 'react';
import './Hero.css'; // Asegúrate de tener tu archivo CSS con los estilos

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">José Matías</span>
          </h1>
          <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
          <p className="hero-description">
            Creo experiencias digitales excepcionales con código limpio, 
            diseño moderno y las mejores prácticas de desarrollo.
          </p>
          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contacto" className="btn btn-secondary">Contactar</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Juan Pérez"
            />
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;