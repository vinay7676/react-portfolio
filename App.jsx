import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import  Scroll from './components/Scroll/Scroll';




function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills/>
      <Education />
      <Work/>
      <Contact/>
      <Footer/>
      <Scroll/>
    </>
  );
}

export default App;
