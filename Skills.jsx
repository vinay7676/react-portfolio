import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';
import './Skills.css';
import { FaLaptopCode } from "react-icons/fa";
import reactjs from '../../assets/react2.png';
import expressjs from '../../assets/express2.jpg';
import nodejs from '../../assets/nodejs.png';
import redux from '../../assets/redux.jpg';
import tailwindcss from '../../assets/tailwind2.png';
import html5 from '../../assets/html5.png';
import css3 from '../../assets/css3.jpg';
import javascript from '../../assets/javascript.jpg';
import cpp from '../../assets/c++.png';
import mongodb from '../../assets/mongodb.png';
import netlify from '../../assets/netlify.png';
import github from '../../assets/github.png';
import python from '../../assets/python.jpg';

const skills = [
  { name: 'ReactJS', image: reactjs },
  { name: 'ExpressJS', image: expressjs },
  { name: 'NodeJS', image: nodejs },
  { name: 'Redux', image: redux },
  { name: 'TailwindCSS', image: tailwindcss },
  { name: 'HTML5', image: html5 },
  { name: 'CSS3', image: css3 },
  { name: 'JavaScript', image: javascript },
  { name: 'C++', image: cpp },
  { name: 'MongoDB', image: mongodb },
  { name: 'Netlify', image: netlify },
  { name: 'GitHub', image: github },
  { name: 'Python', image: python }
];

const Skills = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="section-heading skills-heading"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="skills-icon"
            variants={{
              hidden: { rotate: 0, opacity: 0 },
              visible: {
                rotate: 360,
                opacity: 1,
                transition: { duration: 1, delay: 1.2 }
              }
            }}
            initial="hidden"
            animate={controls}
          >
            <FaLaptopCode />
          </motion.div>

          <motion.div className="animated-heading">
            {['My', 'Skills'].map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.2 + index * 1.2, duration: 0.5 }
                  }
                }}
                initial="hidden"
                animate={controls}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="skill-image">
                <img src={skill.image} alt={skill.name} />
              </div>
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
