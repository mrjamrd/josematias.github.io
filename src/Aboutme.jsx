import React from 'react';
import './Aboutme.css';

const Aboutme =() => {
    return(
       
    <section id="sobre-mi" class="about">
        <div class="container">
            <h2 class="section-title">Sobre Mí</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>
                        Soy un desarrollador full stack apasionado por crear soluciones 
                        digitales innovadoras. Con más de 3 años de experiencia en el 
                        desarrollo web, me especializo en crear aplicaciones modernas, 
                        responsive y de alto rendimiento.
                    </p>
                    <p>
                        Mi enfoque combina la creatividad del diseño con la precisión 
                        del código, siempre buscando las mejores prácticas y tecnologías 
                        más recientes para entregar productos de calidad.
                    </p>
                    <div class="about-info">
                        <div class="info-item">
                            <strong>Nombre:</strong>
                            <span>José Matías</span>
                        </div>
                        <div class="info-item">
                            <strong>Email:</strong>
                            <span>jose@ejemplo.com</span>
                        </div>
                        <div class="info-item">
                            <strong>Ubicación:</strong>
                            <span>Mao, Rep. Dom.</span>
                        </div>
                        <div class="info-item">
                            <strong>Disponibilidad:</strong>
                            <span>Disponible para proyectos</span>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary">
                        <i class="fas fa-download"></i>
                        Descargar CV
                    </a>
                </div>
                <div class="about-stats">
                    <div class="stat-card">
                        <div class="stat-number">50+</div>
                        <div class="stat-text">Proyectos Completados</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">3+</div>
                        <div class="stat-text">Años de Experiencia</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">30+</div>
                        <div class="stat-text">Clientes Satisfechos</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">15+</div>
                        <div class="stat-text">Tecnologías Dominadas</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Aboutme;