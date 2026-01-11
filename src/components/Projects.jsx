import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'IGI Aero Services',
      description:
        'Developed aviation career services platform connecting candidates with airport jobs across 17+ Indian airports. Implemented responsive UI for candidate registration, job notifications, and training programs using Next.js and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      github: 'https://github.com/amankumarcode',
      demo: 'https://igiaeroservices.com',
      featured: true,
    },
    {
      title: 'NoBrokerage Real Estate Platform',
      description:
        'Contributed to India\'s smart real estate portal offering 0% brokerage with property search and listing features. Integrated backend APIs for property management, user authentication, and real-time data synchronization.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/amankumarcode',
      demo: 'https://nobrokerage.com',
      featured: true,
    },
    {
      title: 'Filmyverse',
      description:
        'Built responsive movie management app with OTP-based authentication and Firebase integration. Enabled users to add, rate, and edit movies dynamically, enhancing user engagement.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/amankumarcode',
      demo: '#',
      featured: false,
    },
    {
      title: 'Tomato Food Ordering App',
      description:
        'Designed food ordering app with user authentication and fully responsive design using React. Implemented React state management for efficient data handling across devices.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
      tags: ['React', 'CSS'],
      github: 'https://github.com/amankumarcode',
      demo: '#',
      featured: false,
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
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-description">
            A selection of projects I've worked on, showcasing my skills and experience.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
