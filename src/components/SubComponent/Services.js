import React from 'react'
import './Services.css'

export default function Services() {
  return (
    <div className='services'>
      <div className='container'>
        <div className='col-12 section-intro'>
          <h1>Our Services</h1>
          <div className='hline'></div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-sm-6 p-4'>
          <div className='icon-box'>
            <i class='bx bx-headphone'></i>
          </div>
          <h4 className='title-sm mt-4'>Graphic Designing</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dicta pariatur nemo eligendi fugiat sunt quibusdam at libero asperiores facilis?</p>
        </div>
        <div className='col-lg-4 col-sm-6 p-4'>
          <div className='icon-box'>
            <i class='bx bxs-coffee' ></i>
          </div>
          <h4 className='title-sm mt-4'>Codding</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dicta pariatur nemo eligendi fugiat sunt quibusdam at libero asperiores facilis?</p>
        </div>
        <div className='col-lg-4 col-sm-6 p-4'>
          <div className='icon-box'>
            <i class='bx bxs-image'></i>
          </div>
          <h4 className='title-sm mt-4'>PhotoGraphy</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dicta pariatur nemo eligendi fugiat sunt quibusdam at libero asperiores facilis?</p>
        </div>
        <div className='col-lg-4 col-sm-6 p-4'>
          <div className='icon-box'>
            <i class='bx bxs-check-shield' ></i>
          </div>
          <h4 className='title-sm mt-4'>Hacking</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dicta pariatur nemo eligendi fugiat sunt quibusdam at libero asperiores facilis?</p>
        </div>
        <div className='col-lg-4 col-sm-6 p-4'>
          <div className='icon-box'>
            <i class='bx bx-laptop' ></i>
          </div>
          <h4 className='title-sm mt-4'>Web Designing</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dicta pariatur nemo eligendi fugiat sunt quibusdam at libero asperiores facilis?</p>
        </div>
        <div className='col-lg-4 col-sm-6 p-4'>
          <div className='icon-box'>
            <i class='bx bxs-happy-heart-eyes' ></i>
          </div>
          <h4 className='title-sm mt-4'>UI Design</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dicta pariatur nemo eligendi fugiat sunt quibusdam at libero asperiores facilis?</p>
        </div>
      </div>
    </div>
  )
}