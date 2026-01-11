import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // direct import now

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials missing in .env');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'amanjha12082002@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      alert('✅ Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);

      // Fallback: mailto
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Hello Aman,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:amanjha12082002@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setTimeout(() => {
        alert('✅ Your email client should open. If not, email directly at amanjha12082002@gmail.com');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'amanjha12082002@gmail.com', href: 'mailto:amanjha12082002@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 9608517473', href: 'tel:+919608517473' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Pune, Maharashtra', href: '#' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/aman-kumar', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/amankumarcode', label: 'GitHub' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Get in Touch</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

            <div className="contact-details">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div>
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form className="contact-form" variants={itemVariants} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required />
            </div>
            <motion.button type="submit" className="btn btn-primary" disabled={isSubmitting} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
