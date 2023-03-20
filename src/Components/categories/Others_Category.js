import React, { Component,useState } from 'react'
import './Others_Category';

function Others_Category(props){
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
            <PaintCat handleAddProduct={handleAddProduct} title="Double Stand Ladder" price="12000.00" url='./images/oneway ladder.jpg'></PaintCat>
            <PaintCat handleAddProduct={handleAddProduct} title="Ladder" price="9720.00" url='./images/Ladder.jpg'></PaintCat>
            <PaintCat handleAddProduct={handleAddProduct} title="Floor Protecting CCovers" price="3450.00" url='./images/Floorprotectingcovers.jpg'></PaintCat>
            <PaintCat handleAddProduct={handleAddProduct} title="Empty Bucket" price="2470.00" url='/images/Emptybucket.jpg' qty={1}></PaintCat>
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
 export default Others_Category;