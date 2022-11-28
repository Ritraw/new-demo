import React from 'react';
import './Mid.css'
import light from '../Assests/svg/light.svg';
import figma from '../Assests/svg/figma.svg';
import guy from '../Assests/svg/guy.svg';
import free from '../Assests/svg/free.svg';

function Mid() {
  return (
    <div className='main-icon'>
      <div className='box'>
        <img src={light} />
        <br/>     
        <h4 className='light'>Light/Dark mode</h4>
      </div>
      
      <div className='box'>
        <img src={figma} />
        <br/>     
        <h4 className='figma'>Figma Files Included</h4>
      </div>
      
      <div className='box'>
        <img src={guy} />
        <br/>     
        <h4 className='guy'>100+ UI Flexible Section</h4>
      </div>
      
      <div className='box'>
        <img src={free} />
        <br/>     
        <h4 className='free'>Figma Files Included</h4>
      </div>
    </div>
  )
}

export default Mid