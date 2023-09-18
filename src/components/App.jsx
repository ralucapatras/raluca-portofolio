//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from "./Home";
import Hr from './Hr';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import {Routes, Route} from 'react-router-dom';
import Footer from './Footer';
import Contact from "./Contact";

function App() {
  return ( 
  <div id="home">
    <Header />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
    </div>

  );
}

export default App;
