import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import Aboutme from './Aboutme';
import Hability from './Hability';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';



function App() {
    
   
return(
     <div className="App">
        <Navbar 
         titulo="Componente Importado" 
        contenido="Este componente viene de otro archivo" ></Navbar>
        <Hero titulo="Aqui el hero"></Hero>
        <Aboutme titulo="Aqui sobre mi"></Aboutme>
        <Hability></Hability>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
     </div>
);
}

export default App;
