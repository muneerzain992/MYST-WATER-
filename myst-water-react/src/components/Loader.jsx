import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#030a16',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 800, 
          letterSpacing: '4px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          MYST <span style={{ color: '#00e5ff' }}>WATER</span>
        </h1>
      </motion.div>
      
      <motion.div 
        style={{
          width: '200px',
          height: '2px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          marginTop: '30px',
          overflow: 'hidden',
          borderRadius: '2px'
        }}
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#00e5ff',
            boxShadow: '0 0 10px #00e5ff'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
