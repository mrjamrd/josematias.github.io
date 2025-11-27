import React from "react";  
import './Hability.css';


const Hability = () => {
    return (
    <section id="habilidades" class="skills">
        <div class="container">
            <h2 class="section-title">Mis Habilidades</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Frontend</h3>
                    <div class="skill-list">
                        <div class="skill-item">
                            <span class="skill-name">HTML/CSS</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="95"></div>
                            </div>
                            <span class="skill-percent">95%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">JavaScript</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="90"></div>
                            </div>
                            <span class="skill-percent">90%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">React</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="85"></div>
                            </div>
                            <span class="skill-percent">85%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">Vue.js</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="80"></div>
                            </div>
                            <span class="skill-percent">80%</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Backend</h3>
                    <div class="skill-list">
                        <div class="skill-item">
                            <span class="skill-name">Node.js</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="88"></div>
                            </div>
                            <span class="skill-percent">88%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">Python</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="85"></div>
                            </div>
                            <span class="skill-percent">85%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">PHP</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="82"></div>
                            </div>
                            <span class="skill-percent">82%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">MySQL</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="90"></div>
                            </div>
                            <span class="skill-percent">90%</span>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>Herramientas</h3>
                    <div class="skill-list">
                        <div class="skill-item">
                            <span class="skill-name">Git</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="92"></div>
                            </div>
                            <span class="skill-percent">92%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">Docker</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="78"></div>
                            </div>
                            <span class="skill-percent">78%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">Figma</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="85"></div>
                            </div>
                            <span class="skill-percent">85%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">AWS</span>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="75"></div>
                            </div>
                            <span class="skill-percent">75%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hability;