import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Droplet } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      id="home" 
      style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      {/* Background Video/Image Placeholder */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(3,10,22,0.4) 0%, rgba(3,10,22,1) 100%), url("https://images.unsplash.com/photo-1548839140-29a749e1abc5?q=80&w=2000&auto=format&fit=crop") center/cover',
        zIndex: -1,
        opacity: 0.6
      }} />

      <motion.div 
        style={{ y: y1, opacity, textAlign: 'center', zIndex: 10, maxWidth: '1000px', padding: '0 20px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px',
            background: 'rgba(0, 229, 255, 0.1)',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            padding: '8px 20px',
            borderRadius: '30px',
            color: '#00e5ff',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '1px'
          }}>
            <Droplet size={16} /> PREMIUM HYDRATION
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            fontSize: 'clamp(3rem, 6vw, 5.5rem)', 
            fontWeight: 800, 
            lineHeight: 1.1,
            marginBottom: '30px',
            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          ELEVATE YOUR <br />
          <span className="text-gradient">BRAND EXPERIENCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
            color: '#94a3b8', 
            maxWidth: '700px', 
            margin: '0 auto 50px',
            lineHeight: 1.6
          }}
        >
          Exclusive custom-branded 500ml water bottles for premium hotels and restaurants in Islamabad. Pure water, perfect presentation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
        >
          <a href="#services" style={{
            background: 'linear-gradient(135deg, #00e5ff 0%, #00b4d8 100%)',
            color: '#030a16',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0, 229, 255, 0.3)',
            transition: 'transform 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Explore Services
          </a>
          
          <a href="#contact" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '16px 40px',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Elements / Particles can be added here */}
      <motion.div 
        className="floating"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '15%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}
      />
      
      <motion.div 
        className="floating"
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animationDelay: '-3s'
        }}
      />
    </section>
  );
};

export default Hero;
