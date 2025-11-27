import React from 'react';

import './Footer.css';

const Footer = ()=>{

    return(
        <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p>&copy; 2026 José Matías. Todos los derechos reservados.</p>
                <div class="footer-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#sobre-mi">Sobre Mí</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
