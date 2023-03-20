import React, { Component,useEffect} from 'react'
import './Main_Category.css'
import {Link} from 'react-router-dom';


function Main_Category(props){
  useEffect(()=>{
    props.onssubmit(false,false,false,true);
 })
   return(
    <div className='Category_main'>
         <div className="Category ">
          <div className="Category_up"> </div>
          <Link to='/categoryroller' className="Category_center">
             <div className="Category_image_cont">
                <div className="Category_image a"></div>
            </div>
            <div className="Category_type">Paint Rollers</div>
          </Link> 
          <div className="Category_down"></div>
        </div>

        <div className="Category ">
          <div className="Category_up"> </div>
          
          <Link to='/paintcategory' className="Category_center">
             <div className="Category_image_cont">
                <div className="Category_image b"></div>
            </div>
            <div className="Category_type">Paints</div>
          </Link>
          <div className="Category_down"></div>
        </div>   

        <div className="Category ">
          <div className="Category_up"> </div>
        
          <Link to='/categorypaintbrushes' className="Category_center">
             <div className="Category_image_cont">
                <div className="Category_image c"></div>
            </div>
            <div className="Category_type">Paint Brushes</div>
          </Link>
        
          <div className="Category_down"></div>
        </div>  

        <div className="Category ">
          <div className="Category_up"> </div>
      
          <Link to='/categoryother' className="Category_center">
             <div className="Category_image_cont">
                <div className="Category_image d"></div>
            </div>
            <div className="Category_type">Other Items</div>
          </Link>
         
          <div className="Category_down"></div>
        </div>      
     </div>
  );
}

export default Main_Category;