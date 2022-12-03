import React from 'react'
import './Header.css';
import logo from '../Assests/svg/logo.svg'
import { BiCart } from "react-icons/bi"
import side from '../Assests/side.jpeg';
import arrow from '../Assests/arrow.png'

function Header() {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={logo} />
            <a>Silicon</a>
          </div>
          <div className="nav-drop">
            <div className="dropdown">
              <div className="dropbtn" style={{ color: '#4d5171' }}>
                Landings <img src={arrow}/>
                < div className="dropdown-content">
                  <ul>
                    <img src={side} />
                  </ul>
                  <ul>
                    <li>Template Intro Pages</li>
                    <li>Mobile App Showcase</li>
                    <li>Mobile App ShowCase;v.2</li>
                    <li>Startup <button style={{
                      backgroundColor: 'rgb(110, 196, 110)', color: '#ffffff'
                      , border: 'none', borderRadius: '5px'
                    }}>New</button></li>
                    <li>SaaSv.1</li>
                    <li>SaaSv.2</li>
                    <li>SaaSv.3</li>
                    <li>Financial Consulting</li>
                    <li>Medical</li>

                  </ul>
                  <ul>
                    <li>IT(Software);Company</li>
                    <li>Conference</li>
                    <li>Digital Agency</li>
                    <li>Blog Homepage</li>

                  </ul>
                </div>

              </div>

            </div>


            <div className="dropdown">
              <div className="dropbtn">
                Pages <img src={arrow} className='d-img' />
                <div className="dropdown-content">
                  <ul>
                    <li>About</li>
                    <li>About v.1</li>
                    <li>About v.2</li>
                    <li>Services</li>
                    <li>Services v.1</li>
                    <li>Services v.2</li>
                    <li>ServiceDetails;v.1</li>
                    <li>ServiceDetails v.2</li>


                  </ul>
                  <ul>
                    <li>Blog</li>
                    <li>List;View;with;Sidebar</li>
                    <li>Grid View with Sidebar</li>
                    <li>List View no Sidebar</li>
                    <li>Grid View no Sidebar</li>
                    <li>Simple Feed</li>
                    <li>Single Post</li>
                    <li>Podcast</li>

                  </ul>
                  <ul>
                    <li>Pricing</li>
                    <li>Pricing;Pages</li>
                    <li>Contacts</li>
                    <li>Contacts v.1</li>
                    <li>Contacts v.2</li>
                    <li>Contacts v.3</li>
                    <li>Speciality</li>
                    <li>404 Error v.1</li>
                    <li>404 Error v.2</li>
                  </ul>
                </div>

              </div>

            </div>


            <div className="dropdown">
              <div className="dropbtn">
                Portfolio <img src={arrow}/>
                <div className="dropdown-content">
                  <ul>
                    <li>Grid View</li>
                    <li>List View</li>

                    <li>Slider View</li>
                    <li>Single;Project</li>
                  </ul>

                </div>

              </div>


            </div>
            <div className="dropdown">
              <div className="dropbtn">
                Support
              </div>
            </div>
            <div className="dropdown">
              <div className="dropbtn">
                Docs
              </div>
            </div>

          </div>
          <div className="nav-light-dark">
            
          </div>
          <button className="cart-btn"><i className="cart-logo"><BiCart /></i>Buy now</button>

        </div>



      </div>
    </div >
  )
}

export default Header