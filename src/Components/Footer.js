import React from 'react'
import './Footer.css';
import one from '../Assests/one.jpg';
import two from '../Assests/two.jpg';
import three from '../Assests/three.jpg';
import four from '../Assests/four.jpg';
import five from '../Assests/five.jpg';
import six from '../Assests/six.jpg';
import seven from '../Assests/seven.jpg';
import eight from '../Assests/eight.jpg';
import nine from '../Assests/nine.jpg';

function Footer() {
  return (

    <div className='main'>
      
      <div className='title'>
        <h1>Landing Pages</h1>
        <p>Choose from pre-built layouts of our unique landing pages</p>
      </div>
      
      
      <div className='image'>
        <div  className='one'>
          <img src={one}/>
          <h2>Mobile App Showcase</h2>
        </div>
        
        <div  className='two'>
          <img src={two}/>
          <h2>Saas v.1</h2>
        </div>
        
        <div  className='three'>
          <img src={three}/>
          <h2>Saas v.2</h2>
        </div>
        
        <div  className='four'>
          <img src={four}/>
          <h2>Financial Consulting</h2>
        </div>
        
        <div  className='five'>
          <img src={five}/>
          <h2>Medical</h2>
        </div>
        
        <div  className='six'>
          <img src={six}/>
          <h2>Digital Agency</h2>
        </div>
        
        <div  className='seven'>
          <img src={seven}/>
          <h2>Conference</h2>
        </div>
        
        <div  className='eight'>
          <img src={eight}/>
          <h2>IT (Software) company</h2>
        </div>
        <div  className='nine'>
          <img src={nine}/>
          <h2>Blog Homepage</h2>
        </div>
      </div>
    
    </div>
  )
}

export default Footer