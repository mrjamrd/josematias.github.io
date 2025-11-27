// Navbar.jsx

import React from 'react';
import './Navbar.css'; // Asegúrate de tener tu archivo CSS con los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#inicio">José Matías</a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#inicio" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#sobre-mi" className="nav-link">Sobre Mí</a>
          </li>
          <li className="nav-item">
            <a href="#habilidades" className="nav-link">Habilidades</a>
          </li>
          <li className="nav-item">
            <a href="#proyectos" className="nav-link">Proyectos</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link">Contacto</a>
          </li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;