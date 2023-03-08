import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FallingSnake from './components/FallingSnake';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes, Route } from "react-router-dom";
import Portfolio from './components/Project';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import CourenLigne from './components/CourenLigne';
import Damechinoise from './components/Damechinoise';
import Thanks from './components/Thanks';



function App() {
  return (
    <>
      <HashRouter  basename='/myPortfolio'>
        
        <Navbar />
        
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/fallingsnake" element={<FallingSnake />} />
        <Route path="/portfolio/coursenligne" element={<CourenLigne />} />
          <Route path="/portfolio/damechinoise" element={<Damechinoise />} />
          <Route path="/thankU" element={<Thanks />} />

          


      </Routes>
</HashRouter>
      </>
  );
}

export default App;
