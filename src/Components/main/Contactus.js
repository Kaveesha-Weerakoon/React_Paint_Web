import React, { Component,useEffect } from 'react'
import './contactus.css' 

function Contactus(props){
    useEffect(()=>{
        props.onssubmit(false,false,true,false);
     })
   return(
    <div className='contactus-main'>
        
        <div className="contactright-right"></div>
        <div className="contactus-left">
        <div className="contactus-left-components">
            <div className="contactus-left-components-img">
                <img src="./images/home.png" width='170px' height='180px' alt="" />
            </div>
            <div className="contactus-left-components-details">
            Visit Us : 98,High Road,Galle,Srilanka
            </div>

        </div>
        <div className="contactus-left-components">
            <div className="contactus-left-components-img">
                <img src="./images/fax.png" width='170px' height='180px' alt="" />
            </div>
            <div className="contactus-left-components-details">
            Fax Us : +9481126148

            </div>

        </div>
        <div className="contactus-left-components">
            <div className="contactus-left-components-img">
                <img src="./images/phone.png" width='170px' height='180px' alt="" />
            </div>
            <div className="contactus-left-components-details">
               Call Us : +94775902645
            </div>

        </div>
        <div className="contactus-left-components">
            <div className="contactus-left-components-img">
                <img src="./images/mail.png" width='170px' height='180px' alt="" />
            </div>
            <div className="contactus-left-components-details">
            Mail Us : ColorCrew@gmail.com
            </div>

        </div>

       
       
        </div>
        <div className="contactright-right"></div>

    
    </div>
   );
}

export default Contactus;