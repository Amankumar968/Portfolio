import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      company: 'Nobrokerage.com, Pune',
      period: 'July 2025 - Oct 2025',
      description: [
        'Developed responsive UI components using React.js, Next.js, and Tailwind CSS for brokerage-free real estate platform',
        'Built RESTful APIs with Node.js and Express.js, implementing authentication, property listings, and search functionality',
        'Enhanced website performance and user experience through bug fixes and feature implementations',
      ],
    },
    {
      type: 'work',
      title: 'Web Development & Designing Intern',
      company: 'AICTE OIB-SIP',
      period: 'Dec 2023 - Jan 2024',
      description: [
        'Collaborated with teams to build responsive user interfaces and contributed to frontend development tasks',
        'Assisted in UI/UX design implementation using HTML5, CSS3, and JavaScript',
      ],
    },
    {
      type: 'education',
      title: 'Master of Computer Applications (MCA)',
      company: 'Dr. D.Y. Patil School of Science and Technology, Pune',
      period: 'Aug 2024 - Present',
      description: [
        'Currently in Sem III',
        'CGPA: 8.88',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'Lalit Narayan Mithila University, Darbhanga',
      period: 'Dec 2020 - Dec 2023',
      description: [
        'CGPA: 8.00',
      ],
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Experience</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-description">
            A timeline of my professional experience and education.
          </p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.type}-${index}`}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
