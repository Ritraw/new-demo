import React from 'react'
import './Mid2.css'
// import darkmode from '../Assests/svg/darkmode.svg'
import arrow from '../Assests/arrow.png';
import col1 from '../Assests/c1-1.png'
import c2 from '../Assests/c2.png'

function Mid2() {
  return (
    <div>
          <div className="multi-container " >
            <div className="col">
                <div className="col-head">
                    Silicon
                </div>
                <div className="col-subhead">
                    Multipurpose Business /<br />
                    Technology Template
                </div>
                <div className="dark-mode">
                    {/* <img src={darkmode}/> */}
                </div>
                <div className="view-landing">
                    <img src={arrow}/> View Landings
                </div>
            </div>
            <div className="col-1">


                <img src={col1}/>
            </div>

            <div className="col-2">
                <img src={c2}/>
            </div>
        </div >
    </div>
  )
}

export default Mid2