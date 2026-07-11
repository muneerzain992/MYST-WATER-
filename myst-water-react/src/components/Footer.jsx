import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#020610',
      padding: '50px 5%',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      marginTop: '50px'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '10px' }}>
            MYST <span style={{ color: '#00e5ff' }}>WATER</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Premium Branded Water Supply in Islamabad.</p>
        </div>
        
        <ul style={{ 
          display: 'flex', 
          gap: '30px', 
          listStyle: 'none',
          color: '#94a3b8',
          fontSize: '0.9rem'
        }}>
          <li><a href="#home" style={{ transition: 'color 0.3s' }}>Home</a></li>
          <li><a href="#about" style={{ transition: 'color 0.3s' }}>About</a></li>
          <li><a href="#services" style={{ transition: 'color 0.3s' }}>Services</a></li>
          <li><a href="#contact" style={{ transition: 'color 0.3s' }}>Contact</a></li>
        </ul>
      </div>
      
      <div className="container" style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        marginTop: '30px',
        paddingTop: '30px',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '0.85rem'
      }}>
        &copy; {new Date().getFullYear()} MYST Water. All rights reserved. Designed for excellence.
      </div>
    </footer>
  );
};

export default Footer;
