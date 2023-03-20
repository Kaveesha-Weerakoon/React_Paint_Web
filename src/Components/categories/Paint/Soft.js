import React, { Component, useState,useEffect } from 'react'
import './Dark.css' 
import {Link} from 'react-router-dom';

function Soft(props){

   

    const g=(name,price,color)=>{
        props.onsubmitdata2(name,price,color);
    }



    return(
    <div className="dark_main">

        <Part onsubmits={g} title="SHADOWED LILAC" price={2350} color='#4b4b4b'></Part>
        <Part onsubmits={g} title="PRESTIGE" price={3200.00} color='#2f3542'></Part>      
        <Part onsubmits={g}title="BRIGHT GREEK" price={6700.00} color='#2f3542'></Part>     
        <Part onsubmits={g}title="DEEP COVER" price={3412.00} color='#130f40'></Part>      
        <Part onsubmits={g}title="BLACK PILLOCK" price={5120.00} color='#1e272e'></Part>    
        <Part onsubmits={g}title="PICO VOID" price={625.00} color='#40407a'></Part>
        <Part onsubmits={g}title="BALTION" price={2350.00} color='#2C3A47'></Part>
        <Part onsubmits={g}title="ENDING NAVY BLUE" price={6120.00} color='#182C61'></Part>
        <Part onsubmits={g}title="LUCKY POINT" price={5610.00} color='#2c2c54'></Part>
        <Part onsubmits={g}title="ELECTRO MAGNIC" price={4810.00} color='#2f3640'></Part>
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

export default Soft;

