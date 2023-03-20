import React, { Component, useEffect } from 'react'
import './aboutus.css' 
import Header from '../header_component/Header';

function Aboutus(props){

   useEffect(()=>{
      props.onssubmit(false,true,false,false);
   })
   

   return(
   <div className="aboutus_main">
       <div className="aboutus-components"></div>
       <div className="aboutus-components">
          <div className="aboutus-components-up">ABOUT US</div>
          <div className="aboutus-components-down">
          <p>
           <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Colour crew is the world best paint accessories supplier <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all over the world since 1995.We provide high quality <br/> 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;durable products to our customers. <br/> <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Colour crew is the world best paint accessories supplier <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all over the world since 1995.We provide high quality <br/> 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;durable products to our customers.  <br/>  
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Colour crew is the world best paint accessories supplier <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all over the world since 1995.We provide high quality <br/> 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;durable products to our customers.  <br/>  <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Colour crew is the world best paint accessories supplier <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all over the world since 1995.We provide high quality <br/> 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;durable products to our customers.  <br/>  
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Colour crew is the world best paint accessories supplier <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all over the world since 1995.We provide high quality <br/> 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;durable products to our customers.  <br/>  
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Colour crew is the world best paint accessories supplier <br />   
          </p>
          </div>

       </div>
       <div className="aboutus-components">
        
       </div>

   </div>
   );
}

export default Aboutus;