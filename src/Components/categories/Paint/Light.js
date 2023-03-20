import React, { Component, useState,useEffect } from 'react'
import './Light.css' 
import {Link} from 'react-router-dom';

function Light(props){

   

    const g=(name,price,color)=>{
        props.onsubmitdata2(name,price,color);
    }



    return(
    <div className="dark_main">

        <Part1 onsubmits={g} title="CLOUDS" price={2300.00} color='#ecf0f1'></Part1>
        <Part1 onsubmits={g} title="ANTI FLASH WHITE" price={3560.00} color='#f1f2f6'></Part1>      
        <Part1 onsubmits={g}title="CITY LANE" price={4520.00} color='white'></Part1>     
        <Part1 onsubmits={g}title="COASTAL WAY" price={5780.00} color='#dff9fb'></Part1>      
        <Part1 onsubmits={g}title="WHITE PEPER" price={3210.00} color='#F8EFBA'></Part1>    
        <Part1 onsubmits={g}title="PICO VOID" price={5500.00} color='#f7f1e3'></Part1>
        <Part1 onsubmits={g}title="SWAN WHITE" price={2350.00} color='#FFECEC'></Part1>
        <Part1 onsubmits={g}title="LIGHT" price={6120.00} color='#C6FFEB'></Part1>
        <Part1 onsubmits={g}title="TURISH" price={4410.00} color='#FFDBFF'></Part1>
        <Part1 onsubmits={g}title="VOID WERA" price={4810.00} color='#FFABD8'></Part1>
    </div>
    )
}

const Part1= (props) =>{

 
    return(
        <div className="dark_main_com">
            <div className="dark_main_paint qqqq">
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

export default Light;

