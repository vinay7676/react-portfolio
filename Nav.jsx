import React, { useEffect, useState } from 'react';
import './Nav.css';
import { FaUserTag } from 'react-icons/fa';
import { PiStudentFill } from "react-icons/pi";
function Nav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // section should be at least 50% visible
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          <FaUserTag className="icon" /> 
        </a>
      </div>
      <ul className="nav-container">
        <li style={{ animationDelay: '0.2s' }}>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        </li>
        <li style={{ animationDelay: '0.4s' }}>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        </li>
        <li style={{ animationDelay: '0.6s' }}>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        </li>
        <li style={{ animationDelay: '0.8s' }}>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
        </li>
        <li style={{ animationDelay: '1s' }}>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        </li>
        <li style={{ animationDelay: '1.2s' }}>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
