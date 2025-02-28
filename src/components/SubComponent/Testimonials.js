import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './Testimonials.css';
import tea1 from '../../img/tea1.jpg';
import hack from '../../img/tea2.jpg';
import dev from '../../img/tea4.jpg';
// import design from '../../img/tea5.jpeg';

// Testimonial data array
const testimonialsData = [
  {
    name: 'John Doe',
    role: 'Web Developer',
    img: tea1,
    review: 'John is a fantastic developer with a keen eye for detail. He always delivers on time and exceeds expectations.',
    rating: 4,
  },
  {
    name: 'Emma Watson',
    role: 'UI/UX Designer',
    img: hack,
    review: 'Emma has a creative mind and her designs are always intuitive and user-friendly.',
    rating: 5,
  },
  {
    name: 'Jone Sor',
    role: 'Hacker',
    img: dev,
    review: 'Jone is an ethical hacker who ensures all systems are secure and protected from threats.',
    rating: 4,
  },
];

function Testimonials() {
  // State to track the selected testimonial
  const [activeIndex, setActiveIndex] = useState(0);

  // Destructure the selected testimonial data
  const { name, role,review, rating } = testimonialsData[activeIndex];

  return (
    <section id='testimonials' className='text-center'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Nav variant="pills" className="justify-content-center mb-3">
              {testimonialsData.map((testimonial, index) => (
                <Nav.Item key={index}>
                  <Nav.Link
                    active={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      className='testimonial-img' 
                    />
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </div>

        <div className='review'>
          <div className='stars'>
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`bx ${i < rating ? 'bxs-star' : 'bx-star'}`}
              ></i>
            ))}
          </div>
          <p className='lead'>{review}</p>
          <h5 className='title-sm mb-0'>{name}</h5>
          <small>{role}</small>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
