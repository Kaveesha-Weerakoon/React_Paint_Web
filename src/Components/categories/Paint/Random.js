import React, { Component, useState,useEffect } from 'react'
import './Dark.css' 
import {Link} from 'react-router-dom';

function Random(props){

   

    const g=(name,price,color)=>{
        props.onsubmitdata2(name,price,color);
    }



    return(
    <div className="dark_main">

        <Part onsubmits={g} title="SHADOWED LILAC" price={2350} color='#fd79a8'></Part>
        <Part onsubmits={g} title="PRESTIGE" price={3200.00} color='#d63031'></Part>      
        <Part onsubmits={g}title="BRIGHT GREEK" price={6700.00} color='#0984e3'></Part>     
        <Part onsubmits={g}title="DEEP COVER" price={3412.00} color='#f9ca24'></Part>      
        <Part onsubmits={g}title="BLACK PILLOCK" price={5120.00} color='#574b90'></Part>    
        <Part onsubmits={g}title="PICO VOID" price={625.00} color='#2ed573'></Part>
        <Part onsubmits={g}title="BALTION" price={2350.00} color='#ff9f43'></Part>
        <Part onsubmits={g}title="ENDING NAVY BLUE" price={6120.00} color='#A3CB38'></Part>
        <Part onsubmits={g}title="LUCKY POINT" price={5610.00} color='#50002B'></Part>
        <Part onsubmits={g}title="ELECTRO MAGNIC" price={4810.00} color='#FFE704'></Part>
    </div>
    )
}

const Part= (props) =>{

 
    return(
        <div className="dark_main_com">
            <div className="dark_main_paint">
               <div className="dark_main_paint_topic">{props.title}</div>
               <div className="dark_main_paint_content" >
                     <div className="dark_main_paint_content_left"></div>
                     <div className="dark_main_paint_content_middle" style={{ backgroundColor:props.color}}></div>
                     <div className="dark_main_paint_content_left"></div>
               </div>
               <div className="dark_main_paint_price">{props.price.toFixed(2)} LKR</div>
               <div className="dark_main_paint_view" to='/paintmain'><Link class='Links'to='/paintmain' onClick={()=>props.onsubmits(props.title,props.price,props.color)}><button className='View'>VIEW</button></Link></div>
            </div>
            </div>
    );

}

export default Random;

