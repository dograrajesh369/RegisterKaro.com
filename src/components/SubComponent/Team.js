import React from 'react';
import './Team.css';
import tea1 from '../../img/tea1.jpg';
import hack from '../../img/tea2.jpg';
import dev from '../../img/tea4.jpg';
import design from '../../img/tea5.jpeg';

const teamData = [
  { name: 'Sarina', role: 'Web Designer', img: tea1 },
  { name: 'Emma Watson', role: 'Hacker', img: hack },
  { name: 'Jone Sor', role: 'Developer', img: dev },
  { name: 'John Doe', role: 'Graphic Designer', img: design }
];

export default function Team() {
  return (
    <section id='tea' className='team-section'>
      {teamData.map((member, index) => (
        <div key={index} className='team-member'>
          <div className='team-member-content'>
            <div className='team-member-img'>
              <img src={member.img} alt={member.name} className='team-image' />
              <div className='social-icons'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-facebook-circle'></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-twitter'></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-linkedin'></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-instagram'></i>
                </a>
              </div>
            </div>
            <div className='team-info'>
              <h5 className='title-sm'>{member.name}</h5>
              <small>{member.role}</small>
              <p>
                Well-skilled Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Quidem saepe ratione mollitia culpa, vero placeat, recusandae blanditiis nulla.
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
