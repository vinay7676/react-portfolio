import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa';
import './Work.css';

import shopImg from '../../assets/shop-v.jpg';
import weatherImg from '../../assets/weather.jpg';
import foodImg from '../../assets/food.jpg';
import ecommerceImg from '../../assets/ecommerce.jpg';

const projects = [
  {
    title: 'Shop V',
    image: shopImg,
    url: 'https://react-ecommerce-shop-v.netlify.app/',
  },
  {
    title: 'Weather Forecasting',
    image: weatherImg,
    url: 'https://the-weather-forecasting.netlify.app/',
  },
  {
    title: 'Food Ordering Website',
    image: foodImg,
    url: 'https://alsiam.github.io/web-projects/hamburger-food/',
  },
  {
    title: 'E-Commerce React App',
    image: ecommerceImg,
    url: 'https://reactjs-ecommerce-app.vercel.app/',
  },
];

const Work = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const iconControls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      iconControls.start({
        rotate: 360,
        transition: { duration: 1 },
      });
    } else {
      controls.start('hidden');
      iconControls.start({ rotate: 0 });
    }
  }, [isInView, controls, iconControls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`project-${index}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;
    card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  const resetTilt = (index) => {
    const card = document.getElementById(`project-${index}`);
    if (!card) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="projects" className="work-section" ref={ref}>
      <div className="work-container">
        <motion.div
          className="work-heading-row"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          custom={0}
        >
          <motion.div animate={iconControls}>
            <FaLaptopCode className="work-icon" />
          </motion.div>

          <motion.div className="animated-heading" style={{ display: 'flex', gap: '8px' }}>
            {['My', 'Projects'].map((word, index) => (
              <motion.span
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate={controls}
                custom={1 + index * 0.4}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="project-grid project-xl">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              id={`project-${index}`}
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              custom={0.2 + index * 0.2}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => resetTilt(index)}
            >
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <FaEye className="eye-icon small" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
