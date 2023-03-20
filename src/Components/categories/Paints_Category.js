import React, { Component,useState } from 'react'
import './Paints_Category.css';
import {Link} from 'react-router-dom';

function Paints_Category(){
    return(
     <div className='paints_category_main'>
          <div className="paints_category_main_left">
        
            <Part link='/dark' name='Dark' hovcolor='#2c3e50' color='#182C61'></Part>
            <Part link='/light' name='Light' color='#f7f1e3' hovcolor='#f1f2f6'></Part>
            <Part link='/soft' name='Soft' color='#ffda79'  hovcolor='#f9ca24'></Part>
            <Part link='/random' name='Random' color='#D980FA'   hovcolor='#ff6348'></Part>
          </div>
          <div className="paints_category_main_right">
               <div className="paints_category_main_up">Pick Your Choice</div>
               <div className="paints_category_main_down"></div>
          </div>
     </div>
    );
 }

 const Part= (props) =>{
        const [hover, setHover] =useState(false);
        return(
                <Link to={props.link} className="paints_category_main_left_comp">
                <div className="paints_category_main_left_comp_up dd" 
                 onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
                 style={{ backgroundColor:props.color, backgroundColor: hover ? props.hovcolor: props.color }}>
                   
                </div>
                <div className="paints_category_main_left_comp_down">{props.name}</div>
        </Link>   
        );

 }
 export default Paints_Category;