import React from 'react';
import './Contact.css';
import contactImage from '../../img/tea5.jpeg';

const Contact = () => {
  return (
    <section className='contact-section'>
      <div className='container'>
        <h2 className='section-title'>Contact Us</h2>
        <p className='section-subtitle'>We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
        <div className='contact-content'>
          <div className='contact-card'>
            <form className='contact-form'>
              <div className='input-group'>
                <input type='text' placeholder='Name' required />
                <input type='email' placeholder='Email ID' required />
              </div>
              <input type='tel' placeholder='Contact Number' required />
              <textarea placeholder='Your Message' required></textarea>
              <button type='submit' className='submit-btn'>Submit</button>
            </form>
          </div>
          <div className='contact-card contact-image'>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
