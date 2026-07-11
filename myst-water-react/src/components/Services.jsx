import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Custom Branding',
      desc: 'Your logo, colors, and brand identity professionally printed on our premium labels. We make sure the water served at your tables reflects your brand\'s prestige.',
      image: `${import.meta.env.BASE_URL}images/custom_branding.jpg`
    },
    {
      title: 'Reliable Supply Chain',
      desc: 'Never run out of stock. We provide automated delivery schedules tailored to your consumption rate, ensuring uninterrupted supply even during peak seasons.',
      image: `${import.meta.env.BASE_URL}images/reliable_supply.jpg`
    },
    {
      title: 'Premium Quality',
      desc: 'Hygienic, safe, and mineral-balanced drinking water. Our state-of-the-art facility guarantees that every bottle meets strict international quality standards.',
      image: `${import.meta.env.BASE_URL}images/premium_quality.jpg`
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
            Our <span className="text-gradient">Services</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive water solutions designed exclusively for the hospitality industry.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                position: 'relative'
              }}
            >
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
