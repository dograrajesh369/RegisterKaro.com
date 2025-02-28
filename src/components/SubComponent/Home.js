import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className='home-section'>
            <div className='content'>
                <h1>WE ARE CREATIVE AGENCY, CREATIVE PEOPLE</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem ipsum 
                    dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#contact" className="contact-button">Contact Us</a>
            </div>
        </div>
    );
}
