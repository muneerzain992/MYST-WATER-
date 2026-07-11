import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      setError('Name must contain only letters and spaces.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address containing @.');
      return;
    }
    setError('');
    
    // Construct the WhatsApp message
    const whatsappText = `Hello MYST Water!\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:*\n${message}`;
    const encodedText = encodeURIComponent(whatsappText);
    
    // Direct link to WhatsApp API
    window.open(`https://wa.me/966549178948?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Ready to elevate your brand's hydration experience? Reach out to us today.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass"
            style={{ padding: '50px', borderRadius: '20px' }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '30px' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '15px', borderRadius: '50%', color: '#00e5ff' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Location</h4>
                  <p style={{ color: '#94a3b8' }}>Islamabad, Pakistan</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '15px', borderRadius: '50%', color: '#00e5ff' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Phone / WhatsApp</h4>
                  <p style={{ color: '#94a3b8' }}>+966 54 917 8948</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '15px', borderRadius: '50%', color: '#00e5ff' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Email</h4>
                  <a href="mailto:muneerzain992@gmail.com" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#00e5ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>muneerzain992@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass"
            style={{ padding: '50px', borderRadius: '20px' }}
          >
            <form onSubmit={handleWhatsAppSend} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {error && (
                <div style={{ color: '#ff4d4d', background: 'rgba(255, 77, 77, 0.1)', padding: '10px', borderRadius: '5px', fontSize: '0.9rem' }}>
                  {error}
                </div>
              )}
              <div>
                <label style={{ display: 'block', marginBottom: '10px', color: '#94a3b8' }}>Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '10px', color: '#94a3b8' }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '10px', color: '#94a3b8' }}>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your requirements..."
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'linear-gradient(135deg, #00e5ff 0%, #00b4d8 100%)',
                  color: '#030a16',
                  border: 'none',
                  padding: '16px',
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginTop: '10px',
                  boxShadow: '0 10px 20px rgba(0, 229, 255, 0.2)'
                }}
              >
                Send to WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
