import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  MdContacts,
  MdMessage
} from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneSquareAlt, FaLocationArrow } from 'react-icons/fa';
import './Contact.css';
import laptopImg from '../../assets/laptop2.jpg'; // ✅ Image on left

const Contact = () => {
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

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-heading-row"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          custom={0}
        >
          <motion.div animate={iconControls}>
            <MdContacts className="contact-icon" />
          </motion.div>

          <motion.div className="animated-heading" style={{ display: 'flex', gap: '8px' }}>
            {['Get', 'in', 'Touch'].map((word, index) => (
              <motion.span
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate={controls}
                custom={1 + index * 0.3}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="contact-box-wrapper">
          <div className="contact-box">
            <div className="contact-image">
              <img src={laptopImg} alt="Laptop Visual" />
            </div>

            <motion.form
              className="contact-form"
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              custom={1.8}
            >
              <div className="input-group">
                <RiContactsFill className="input-icon" />
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="input-group">
                <IoMdMail className="input-icon" />
                <input type="email" placeholder="Your Email" required />
              </div>

              <div className="input-group">
                <FaPhoneSquareAlt className="input-icon" />
                <input type="tel" placeholder="Your Phone" required />
              </div>

              <div className="input-group">
                <MdMessage className="input-icon" />
                <textarea placeholder="Your Message" required />
              </div>

              <button type="submit" className="submit-btn">
                Send <FaLocationArrow className="send-icon" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
