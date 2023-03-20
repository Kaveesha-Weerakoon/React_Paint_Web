import React,{useState, useEffect }  from 'react'
import './Cart.css'
import {Link} from 'react-router-dom';

function Cart (props) {

  useEffect(()=>{
    props.onssubmit(false,false,false,false);
 })

       
      
  return (
    <div>

        {props.cartItems.length==0 && 
          <div className='EmptyMain'>
               <div className='EmptyMainTop'>  Your Cart is Empty </div>
               <div className='EmptyMainDown'>  <Link to='/category'><button className="main-button f">Shop Now</button></Link> </div>
           </div>
           }

          {props.cartItems.length!=0 &&
          <div>
           <div className='NoteEmpty'>
                <div className='NoteEmptyContent'> No </div>
                <div className='NoteEmptyContent'> Item Name </div>
                <div className='NoteEmptyContent'> Colour </div>
                <div className='NoteEmptyContent'> Item Picture </div>
                <div className='NoteEmptyContent'> Quantity </div>
                <div className='NoteEmptyContent'> Price </div>
                <div className='NoteEmptyContent'> Remove </div>

           </div>

     <div>
       {props.cartItems.map((item,index) =>(
           <div >
            <div className='NoteEmpty aaaa'>
                <div className='NoteEmptyContent'> {index+1} </div>
                <div className='NoteEmptyContent'> {item.name}  </div>
                <div className='NoteEmptyContent'> <div className="div" style={{ backgroundColor:item.color}}></div> </div>
                <div className='NoteEmptyContent'>                 <img width="175x" height="175" src={`${item.url}`} alt="asasa" /></div>
                <div className='NoteEmptyContent'> {item.quantity-1} </div>
                <div className='NoteEmptyContent'>LKR {item.price} </div>
                <div className='NoteEmptyContent'><button onClick={()=>props.handleDelete(index)} className='cartbutton'>Delete</button> </div>
           </div>
           </div>
        ))}
      </div>
         <div className="bottom">
                  <button class="checkoutbutton">CHECK OUT</button>
         </div>

    </div>} 
    </div> 
  )
}

export default Cart
