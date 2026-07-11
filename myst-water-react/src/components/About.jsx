import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Medal } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stats = [
    { value: '99.9%', label: 'Purity Level' },
    { value: '50+', label: 'Partner Hotels' },
    { value: '1M+', label: 'Bottles Delivered' }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}
        >
          <div>
            <motion.h2 variants={itemVariants} style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
              The Essence of <br/><span className="text-gradient">Purity & Brand</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
              MYST Water is not just about hydration; it's about making a statement. 
              We partner with the finest establishments in Islamabad to provide water 
              that matches their standard of excellence, complete with premium custom branding.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '30px', marginTop: '40px' }}>
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#00e5ff' }}>{stat.value}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div style={{ position: 'relative', height: '500px' }}>
            <motion.div 
              variants={itemVariants}
              className="glass"
              style={{
                position: 'absolute',
                top: '5%',
                right: '5%',
                width: '80%',
                height: '90%',
                borderRadius: '20px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                zIndex: 2
              }}
            >
              {[
                { icon: <Droplets size={30} color="#00e5ff" />, title: 'Advanced Filtration', desc: 'Multi-stage RO purification process ensuring crystal clear, mineral-enriched water.' },
                { icon: <ShieldCheck size={30} color="#00e5ff" />, title: 'Quality Assured', desc: 'Strict adherence to health and safety standards for every single drop.' },
                { icon: <Medal size={30} color="#00e5ff" />, title: 'Premium Packaging', desc: 'High-grade, BPA-free 500ml bottles designed to feel premium in hand.' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '15px', borderRadius: '15px', height: 'fit-content' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Background decorative blob */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '40%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              opacity: 0.3,
              zIndex: 1
            }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
