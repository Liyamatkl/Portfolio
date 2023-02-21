import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FallingSnake from './components/FallingSnake';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Portfolio from './components/Project';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourenLigne from './components/CourenLigne';
import Damechinoise from './components/Damechinoise';



function App() {
  return (
    <>
      <BrowserRouter>
        
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fallingsnake" element={<FallingSnake />} />
        <Route path="/coursenligne" element={<CourenLigne />} />
        <Route path="/damechinoise" element={<Damechinoise />} />


      </Routes>
</BrowserRouter>
      </>
  );
}

export default App;
