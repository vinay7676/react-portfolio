import React, { useEffect, useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from 'react-icons/fa';
import homeImage from '../../assets/about3.jpg';
import './Home.css';

const Home = () => {
  const phrases = [
    'into web development',
    'into frontend',
    'into backend',
    'into MERN stack',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <motion.section
      id="home"
      className="home-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeVariants}
    >
      <div className="home-content">
        <div className="text-content">
          <motion.h1
            className="greeting"
            custom={0.1}
            variants={fadeVariants}
          >
            Hi there,
          </motion.h1>

          <motion.h2 className="name" custom={0.3} variants={fadeVariants}>
            I'm Vinay Singh Dadwal
          </motion.h2>

          <motion.h3
            className="changing-text"
            custom={0.5}
            variants={fadeVariants}
          >
            I'm <span className="dynamic">{phrases[index]}</span>
          </motion.h3>

          <motion.div
            className="button-container"
            custom={0.7}
            variants={fadeVariants}
          >
            <a href="#about" className="about-button">
              About Me 
            </a>
          </motion.div>

          {/* Social Icons: now animated one-by-one */}
          <div className="social-icons">
            <motion.a
              href="https://www.linkedin.com/in/vinay-singh-dadwal-098843231/"
              target="_blank"
              rel="noreferrer"
              className="fade-in-icon"
              custom={0.9}
              variants={fadeVariants}
            >
              <FaLinkedin className="icon" />
            </motion.a>
            <motion.a
              href="https://github.com/vinay7676"
              target="_blank"
              rel="noreferrer"
              className="fade-in-icon"
              custom={1.2}
              variants={fadeVariants}
            >
              <FaGithub className="icon" />
            </motion.a>
            <motion.a
              href="https://telegram.org/"
              target="_blank"
              rel="noreferrer"
              className="fade-in-icon"
              custom={1.5}
              variants={fadeVariants}
            >
              <FaTelegram className="icon" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="fade-in-icon"
              custom={1.8}
              variants={fadeVariants}
            >
              <FaInstagram className="icon" />
            </motion.a>
            <motion.a
              href="https://x.com/i/flow/login?redirect_after_login=%2Fexplore"
              target="_blank"
              rel="noreferrer"
              className="fade-in-icon"
              custom={2.1}
              variants={fadeVariants}
            >
              <FaTwitter className="icon" />
            </motion.a>
          </div>
        </div>

        <motion.div
          className="image-container"
          custom={1.5}
          variants={fadeVariants}
        >
          <img
            src={homeImage}
            alt="Vinay Singh Dadwal"
            className="profile-image"
          />
          <div className="image-border"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
