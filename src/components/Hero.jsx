import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/amankumarcode', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/aman-kumar', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/amankumarcode/', label: 'LeetCode' },
    { icon: FaEnvelope, href: 'mailto:amanjha12082002@gmail.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.span
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.span>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            <span className="gradient-text">Aman Kumar</span>
          </motion.h1>
          <motion.h2
            className="hero-title"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            Aspiring Full Stack Developer with practical experience in designing and developing 
            responsive web applications using modern technologies including React.js, Next.js, 
            Node.js, and MongoDB. Passionate about building scalable solutions and creating 
            intuitive user interfaces.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

             {/* Resume Button */}
  <motion.a
    href="https://drive.google.com/file/d/1tE6TWaimKuZ-uJjurHYkE3nNXyJXhnXG/view?usp=drive_link"
    target="_blank"   // open in new tab
    rel="noopener noreferrer"
    className="btn btn-secondary"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    View Resume
  </motion.a>


          </motion.div>

          <motion.div
            className="hero-social"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
        >
          <div className="hero-image-wrapper">
            <motion.div
              className="profile-image-container"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img 
                src="/profile.jpg" 
                alt="Aman Kumar" 
                className="profile-image"
                onError={(e) => {
                  // Try alternative formats
                  const img = e.target;
                  if (img.src.includes('profile.jpg')) {
                    img.src = '/profile.jpeg';
                  } else if (img.src.includes('profile.jpg')) {
                    img.src = '/profile.png';
                  } else {
                    // Show placeholder if all formats fail
                    img.style.display = 'none';
                    const placeholder = img.nextElementSibling;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }
                }}
              />
              <div className="profile-placeholder" style={{ display: 'none' }}>
                <span>AK</span>
              </div>
            </motion.div>
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <HiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
