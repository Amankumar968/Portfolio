import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiExpress,
  SiSpring,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: SiReact, level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, level: 85 },
        { name: 'JavaScript', icon: SiJavascript, level: 92 },
        { name: 'HTML5', icon: SiHtml5, level: 95 },
        { name: 'CSS3', icon: SiCss3, level: 90 },
        { name: 'Bootstrap', icon: SiBootstrap, level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88 },
      ],
    },
    {
      title: 'Backend & Frameworks',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 88 },
        { name: 'Express.js', icon: SiExpress, level: 85 },
        { name: 'Spring Boot', icon: SiSpring, level: 80 },
        { name: 'PHP', icon: SiPhp, level: 75 },
        { name: 'Java', icon: FaJava, level: 82 },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 85 },
        { name: 'MySQL', icon: SiMysql, level: 82 },
        { name: 'Git', icon: SiGit, level: 90 },
        { name: 'Firebase', icon: SiFirebase, level: 80 },
        { name: 'Vercel', icon: SiVercel, level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-description">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">
                        <skill.icon />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${skill.level}%` }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
