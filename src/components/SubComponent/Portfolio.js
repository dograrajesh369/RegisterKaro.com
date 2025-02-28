import React from 'react';
import projectImage from '../../img/1.jpg';
import webImage from '../../img/Web-Designer-2.webp';
import codder from '../../img/programming-code-icon-3d-low-polygonal-abstract-programming-code-symbol-in-hand-coding-or-hacker-background-development-and-software-concept-illustration-vector.jpg';
import hacker from '../../img/UI-Designera_-Blog-Main.jpg';
import canstock from '../../img/canstockphoto26807912.jpg';
import garphicdis from '../../img/graphic-design-500x500.webp';

import './Portfolio.css'; 

export default function Portfolio() {
  return (
    <section id='portfolio' className='row g-0'>
      <div className='col-lg-4 col-sm-6'>
        <div className='portfolio-img'>
          <img src={projectImage} alt="Creative Project Design" className="project-image" />
          <div className="portfolio-overlay">
            <h3>Project Title</h3>
            <h2>Project Subtitle</h2>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='portfolio-img'>
          <img src={codder} alt="Creative Project Design" className="project-image" />
          <div className="portfolio-overlay">
            <h3>Project Title</h3>
            <h2>Project Subtitle</h2>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='portfolio-img'>
          <img src={webImage} alt="Creative Project Design" className="project-image" />
          <div className="portfolio-overlay">
            <h3>Project Title</h3>
            <h2>Project Subtitle</h2>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='portfolio-img'>
          <img src={hacker} alt="Creative Project Design" className="project-image" />
          <div className="portfolio-overlay">
            <h3>Project Title</h3>
            <h2>Project Subtitle</h2>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='portfolio-img'>
          <img src={canstock} alt="Creative Project Design" className="project-image" />
          <div className="portfolio-overlay">
            <h3>Project Title</h3>
            <h2>Project Subtitle</h2>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='portfolio-img'>
          <img src={garphicdis} alt="Creative Project Design" className="project-image" />
          <div className="portfolio-overlay">
            <h3>Project Title</h3>
            <h2>Project Subtitle</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
