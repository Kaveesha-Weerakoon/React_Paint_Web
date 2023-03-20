import React, { Component,useState } from 'react'
import './Rollers_Category.css';

function Paints_Category(props){
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
            <PaintCat handleAddProduct={handleAddProduct} title="Large Roller" price="7800.00" url='./images/PaintRoll1.jpg'></PaintCat>
            <PaintCat handleAddProduct={handleAddProduct} title="Extended Roller" price="6240.00" url='./images/PaintRoll2.jpg'></PaintCat>
            <PaintCat handleAddProduct={handleAddProduct} title="Medium Roller" price="9200.00" url='./images/PaintRoll3.jpg'></PaintCat>
            <PaintCat handleAddProduct={handleAddProduct} title="Metal Stand" price="5680.00" url='/images/PaintRoll4.jpg' qty={1}></PaintCat>
         </div>
    </div>
    )
 }
 export default Paints_Category;

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
