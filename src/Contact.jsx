// Versión mejorada con manejo de formulario
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí iría la lógica para enviar el formulario
    };

    return (
        <section id="contacto" className="contact">
            <div className="container">
                <h2 className="section-title">Contacto</h2>
            
            <div class="contact-content">
                <div class="contact-info">
                    <h3>¡Hablemos!</h3>
                    <p>
                        ¿Tienes un proyecto en mente? Me encantaría escucharte. 
                        Estoy disponible para trabajar en proyectos freelance y oportunidades a tiempo completo.
                    </p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <strong>Email</strong>
                                <span>jose@ejemplo.com</span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <div>
                                <strong>Teléfono</strong>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <strong>Ubicación</strong>
                                <span>Ciudad, País</span>
                            </div>
                        </div>
                    </div>
                    <div class="contact-social">
                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>


                <div className="contact-content">
                    <div className="contact-info">
                        {/* ... mismo contenido de información ... */}
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Nombre" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject"
                                placeholder="Asunto" 
                                value={formData.subject}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message"
                                placeholder="Mensaje" 
                                rows="5" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-paper-plane"></i>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Contact;