import React, { Component,useEffect } from 'react'
import './main.css' 
import {Button,Table,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Main(props){

  useEffect(()=>{
    props.onssubmit(true,false,false,false);
 })

 /*<Link to='/category'><Button className="main-button">Shop Now</Button></Link>*/

   return(
    <div className="main-main" >
        <div className="main-main-left">
             <div className="main-main-left-top">
                     <div className="main-main-left-top-top"> COLOUR LAB </div>
                     <div className="main-main-left-top-down">world best paint accessories</div>

              </div>
             <div className="main-main-left-middle">
             <Link to='/category'>  <button className='main-button'>SHOP NOW</button></Link>
             </div>
             <div className="main-main-left-top"></div>
        </div>

    </div>
  );
}

export default Main;