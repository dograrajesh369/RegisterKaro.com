import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-about'>
            <h3>About Us</h3>
            <p>We are dedicated to connecting employers with workers efficiently and professionally. Your trusted partner for job solutions.</p>
          </div>
          <div className='footer-links'>
            <h3>Quick Links</h3>
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#services'>Services</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
          <div className='footer-contact'>
            <h3>Contact Info</h3>
            <p>Email: info@instantworker.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Address: New Delhi, Delhi, 110077</p>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; 2025 Instant Worker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;