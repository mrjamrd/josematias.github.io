import React from 'react';
import './Project.css';

const Project = () => {
    return(
         <section id="proyectos" class="projects">
        <div class="container">
            <h2 class="section-title">Mis Proyectos</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop" alt="E-commerce Platform"/>
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>E-commerce Platform</h3>
                        <p>Plataforma de comercio electrónico completa con carrito de compras, 
                           pasarela de pago y panel administrativo.</p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" alt="Task Management App"/>
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Task Management App</h3>
                        <p>Aplicación web para gestión de tareas con drag & drop, 
                           notificaciones y trabajo en equipo.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Express</span>
                            <span class="tech-tag">PostgreSQL</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop" alt="Weather Dashboard"/>
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Weather Dashboard</h3>
                        <p>Dashboard meteorológico con pronósticos en tiempo real, 
                           mapas interactivos y alertas personalizadas.</p>
                        <div class="project-tech">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">API</span>
                            <span class="tech-tag">Chart.js</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=250&fit=crop" alt="Social Media App"/>
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Social Media App</h3>
                        <p>Red social moderna con funcionalidades de publicaciones, 
                           comentarios, likes y mensajería en tiempo real.</p>
                        <div class="project-tech">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">Redux</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};
export default Project;