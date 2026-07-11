import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '15px 5%' : '30px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(3, 10, 22, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px' }}>
        MYST <span style={{ color: '#00e5ff' }}>WATER</span>
      </div>
      
      <ul style={{ 
        display: 'flex', 
        gap: '40px', 
        listStyle: 'none',
        fontSize: '0.9rem',
        fontWeight: 500,
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}>
        {['Home', 'About', 'Services', 'Process', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              style={{ 
                color: '#fff', 
                transition: 'color 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00e5ff'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'transparent',
          border: '1px solid #00e5ff',
          color: '#00e5ff',
          padding: '10px 24px',
          borderRadius: '30px',
          fontWeight: 600,
          cursor: 'pointer',
          letterSpacing: '1px',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 15px rgba(0, 229, 255, 0.1)',
          textDecoration: 'none',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#00e5ff';
          e.target.style.color = '#030a16';
          e.target.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#00e5ff';
          e.target.style.boxShadow = '0 0 15px rgba(0, 229, 255, 0.1)';
        }}
      >
        GET QUOTE
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
