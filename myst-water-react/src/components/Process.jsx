import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'We discuss your brand requirements, volume needs, and design preferences.' },
    { num: '02', title: 'Design & Proofing', desc: 'Our team creates custom label designs featuring your logo for approval.' },
    { num: '03', title: 'Production', desc: 'Water is purified, bottled, and labeled with your custom branding.' },
    { num: '04', title: 'Delivery', desc: 'Scheduled, reliable delivery directly to your hotel or restaurant.' }
  ];

  return (
    <section id="process" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
            Our <span className="text-gradient">Process</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            A seamless journey from concept to delivery.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'rgba(0, 229, 255, 0.2)',
            zIndex: 0
          }} />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ display: 'flex', gap: '40px', marginBottom: '50px', position: 'relative', zIndex: 1 }}
            >
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'var(--bg-color)',
                border: '2px solid #00e5ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 800,
                color: '#00e5ff',
                flexShrink: 0,
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)'
              }}>
                {step.num}
              </div>
              
              <div className="glass" style={{ padding: '30px', borderRadius: '15px', width: '100%' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
