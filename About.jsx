import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  FaUser,
  FaFileDownload,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';
import aboutImage from '../../assets/home.jpg';
import './About.css';

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 }); // animation triggers every scroll into view

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // optional: reset when out of view
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="about-content"
        >
          <motion.div
            className="about-image"
            variants={imageVariants}
          >
            <div className="image-wrapper">
              <img src={aboutImage} alt="Vinay Singh Dadwal" />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <div className="about-text">
            <motion.div variants={itemVariants} className="section-heading">
              <FaUser className="icon" />
              <h1>About Me</h1>
            </motion.div>

            <motion.p variants={itemVariants} className="summary">
              <span className="highlight">Vinay Singh Dadwal</span> - Web Developer
            </motion.p>

            <motion.p variants={itemVariants}>
             I am a web developer and CSE undergraduate from CU with a deep passion for building modern web applications using the MERN stack. I'm a quick learner and always eager to explore new technologies.

I thrive in self-driven environments and constantly challenge myself to push boundaries and improve my craft.          </motion.p>

            <motion.div variants={itemVariants} className="contact-info">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <span>vinaydadwal980@gmail.com</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Ludhiana, India - 141003</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="https://drive.google.com/file/d/1QGtPX4GBU3WSptrYnaaTWKqftWh6NqQs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                Resume <FaFileDownload className="button-icon" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
