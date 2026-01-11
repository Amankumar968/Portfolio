import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code that stands the test of time.',
    },
    {
      icon: FaRocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency to deliver the best experience.',
    },
    {
      icon: FaHeart,
      title: 'User Focused',
      description: 'Designing with users in mind, creating intuitive and delightful experiences.',
    },
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
    hidden: { opacity: 0, y: 50 },
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
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Crafting Digital Experiences</h2>
          <p className="section-description">
            A passionate Full Stack Developer dedicated to building innovative web solutions 
            that make a real impact.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Hello! I'm Aman Kumar</h3>
            <p>
              Aspiring Full Stack Developer with practical experience in designing and developing 
              responsive web applications using modern technologies including React.js, Next.js, 
              Node.js, and MongoDB. Adept at building scalable solutions, implementing RESTful APIs, 
              and creating intuitive user interfaces with focus on performance and user experience.
            </p>
            <p>
              Strong problem-solving abilities with solid understanding of data structures and algorithms. 
              Passionate about learning new technologies and contributing to innovative software 
              development projects. Currently pursuing MCA at Dr. D.Y. Patil School of Science and Technology, Pune.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Internships</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
