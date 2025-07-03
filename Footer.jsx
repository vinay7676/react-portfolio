import React, { useRef, useEffect } from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
} from 'react-icons/fa';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';

const Footer = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (isInView) controls.start('visible');
    else controls.start('hidden');
  }, [isInView, controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const links = ['Home', 'About', 'Skills', 'Education', 'Work', 'Experience'];
  const socials = [
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaFacebookF />, name: 'Facebook' },
    { icon: <FaLinkedinIn />, name: 'LinkedIn' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <FaTelegramPlane />, name: 'Telegram' },
  ];

  return (
    <footer className="footer-section" ref={ref}>
      <motion.div
        className="footer-container"
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        custom={0.2}
      >
        <motion.div
          className="footer-about"
          variants={fadeIn}
          custom={0.3}
        >
          <h2>Vinay's Portfolio</h2>
          <p>
            I'm Vinay Singh Dadwal, a passionate Full Stack Developer with expertise in modern frontend and scalable backend.
          </p>
          <p>
            I love building web applications that solve real-world problems and bring ideas to life.
          </p>
          </motion.div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {links.map((link, index) => (
              <motion.li
                key={link}
                variants={fadeIn}
                initial="hidden"
                animate={controls}
                custom={0.5 + index * 0.2}
              >
                <IoMdArrowDroprightCircle className="link-icon" />
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div className="footer-contact" variants={fadeIn} custom={1.4}>
          <h3>Contact Info</h3>
          <p>📞 +91 9501077161</p>
          <p>📧 vinaydadwal980@gmail.com</p>
          <p>📍 Ludhiana, India - 141003</p>
         
          <div className="footer-socials">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href="#"
                title={s.name}
                variants={fadeIn}
                initial="hidden"
                animate={controls}
                custom={1.6 + i * 0.2}
              >
                <span className="footer-icon">{s.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vinay Singh Dadwal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
