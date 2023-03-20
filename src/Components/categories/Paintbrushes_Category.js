import React, { Component,useState } from 'react'
import './Paintsbrushes.css';

function Painbrushes_Category(props){
    const [unit,setunit]=useState(2);
    const g=(name,price,color)=>{
        props.onsubmitdata2(name,price,color);
    }

    const handleAddProduct =(name,price,color,url)=>{
          props.handleAddProduct(name,price,color,unit,url);
      }
    
    return(
     <div className='PaintRollersMain'>
         <div className="PaintRollersMainLeft"></div>
         <div className="PaintRollersMainRigth">
            <PaintCat handleAddProduct={handleAddProduct} title="Thin Brush" price="4230.00" url='./images/Paintbrush1.jpg'></PaintCat>
            <PaintCat handleAddProduct={handleAddProduct} title="Medium Brush" price="5670.00" url='./images/Paintbrush2.jpg'></PaintCat>
            <PaintCat handleAddProduct={handleAddProduct} title="Large Brush" price="3450.00" url='./images/Paintbrush3.jpg'></PaintCat>
            <PaintCat handleAddProduct={handleAddProduct} title="Small Brush" price="6230.00" url='/images/Paintbrush4.jpg' qty={1}></PaintCat>
         </div>
    </div>
    )
 }


 const PaintCat= (props) =>{

    const styles = {
        backgroundImage: `url(${props.url})`,
       
      };
    return(
        <div className="PaintRollers_com">
            <div className="PaintRollers_comtop">{props.title}</div>
            <div className="PaintRollers_commiddle">
                <img width="250x" height="250x" src={`${props.url}`} alt="asasa" />
            </div>
            <div className="PaintRollers_comdown">{props.price} LKR </div>
            <div className="PaintRollers_comdowndown"><button onClick={()=>props.handleAddProduct(props.title,props.price,'#dfe6e9',props.url)}className='addtocartrollers'>ADD TO CART</button></div>
        </div>
    );

}
export default Painbrushes_Category;