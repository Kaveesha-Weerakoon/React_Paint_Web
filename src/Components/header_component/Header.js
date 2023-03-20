import React, {useState, useEffect } from 'react'
import './header.css' 
import {BrowserRouter as Router,Route,Routes,Link, useActionData} from 'react-router-dom'

function Header(props){
  
   const [a, setHome] = useState(false);
   const [b, setAbout] = useState(false);
   const [c, setContact] = useState(false);
   const [d, setProducts] = useState(false);

   

    useEffect(()=>{
    setHome(props.data1);
    setAbout(props.data2);
    setContact(props.data3);
    setProducts(props.data4);

 })
 

   return(
    <div className="main" >
       
          <div className="main-top"> </div>
          <div className="main-top j"> 
             <Link class="Link" to='/'><div            style={{color: a ? '#f9ca24':'white'}} className="main-topic">HOME</div> </Link>
             <Link class="Link" to='/aboutus'><div      style={{color: b ? '#f9ca24':'white'}} className="main-topic">ABOUT US</div> </Link>
             <Link class="Link" to='contactus'><div  style={{color: c ? '#f9ca24':'white'}} className="main-topic">CONTACT US</div> </Link>
             <Link class="Link" to='/category'><div  style={{color: d ? '#f9ca24':'white'}} className="main-topic">PRODUCTS</div> </Link>

          </div>
          <div className="main-top-left">
                <div className="main_top_left_left"></div>
                <div className="main_top_left_right">
                    <div className="main_top_left_right_no">  </div>
                     
                    <Link to='/cart' className="main_top_left_right_image">
                    
                            <div className="imagecart">
                                <div className='rounded'>
                               {props.count}
                                </div>
                            </div>
                     </Link>
                     

                </div>
            </div>     
    </div>
  );
}

export default Header;