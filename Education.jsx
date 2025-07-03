import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';
import './Education.css';
import collegeImg from '../../assets/cu2.jpg';
import schoolImg from '../../assets/spring.jpg';
import { IoSchoolSharp } from 'react-icons/io5';

const Education = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    }),
  };

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="container">
        <motion.div
          className="education-heading"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          custom={0}
        >
          <IoSchoolSharp className="icon" />
          <h1>My Education</h1>
        </motion.div>

        <motion.div
          className="education-card"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          custom={0.2}
        >
          <div className="education-image">
            <img src={collegeImg} alt="Chandigarh University" />
          </div>
          <div className="education-details">
            <h3>Bachelor of Engineering in Computer Science</h3>
            <p className="highlight">Chandigarh University, Gharuan, Mohali, Punjab</p>
            <p className="completed">2021–2025 | <span>Completed</span></p>
          </div>
        </motion.div>

        <motion.div
          className="education-card"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          custom={0.4}
        >
          <div className="education-image">
            <img src={schoolImg} alt="Spring Dale Public School" />
          </div>
          <div className="education-details">
            <h3>Schooling</h3>
            <p className="highlight">Spring Dale Public School | Ludhiana | CBSE</p>
            <p className="completed">2021 | <span>Completed</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
