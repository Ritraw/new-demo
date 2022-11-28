import React from 'react'
import './Subscribe.css';

import {FiMail} from "react-icons/fi"
import {BiHeart} from "react-icons/bi"


function Subscribe(){
  return(
  <>
  <div className="head">
  <h1 className="heading">Subscribe to Our Newsletter</h1>
  <form className="myform">
  <div class="content">
    <i class="icon"><FiMail/></i>
    <input class="input-field" type="text" placeholder="Username" name="usrnm"/>
  </div>

 
  <button type="submit" class="btn">Subscribe</button>
</form>
    </div>

    <div>
      <p className="comment">© All rights reserved. Made with  by <i className="icon"><BiHeart/></i>  MadrasThemes</p>
    </div>
  </>
  )
};



export default Subscribe