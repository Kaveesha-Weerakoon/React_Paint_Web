import React, { Component,useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import './PaintMain.css'


function PaintMain(props){
    
    const [count,setcount]=useState(2);
    const [unit,setunit]=useState(1);
    
    const [color1,setColor]=useState();
    const [title1,setTile]=useState();
    const [price1,setPrice]=useState(props.data3);
    const [price2,setPrice2]=useState(props.data3);
    const [selectedValue, setSelectedValue] = useState("option2");

   

    const set=(a,b)=>{
        setColor(b);
        setTile(a);
    
    }
   
    const setunitt=()=>{
          
         
            setcount(count+1);
            setunit(unit+1);
            setPrice2(count*price1);
        
         
    }

    const setunitt2=()=>{
        
        if(unit!=1){
            setcount(count-1);
            setunit(unit-1);
            setPrice2(price2-price1);

        }
             
  }


    useEffect(()=>{
       set(props.data1,props.data2);
    
    })

   

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

  };



    return(
    <div className='PaintMainMain'>
            
          <div className='PaintMainMainLeft'></div>
          <div className='PaintMainMainRight'>
              <div className="PaintMainMainLeftTop">{title1}</div>
              <div className="PaintMainMainLeftMiddle">
                  <div className="PaintMainMainLeftMiddlecolor">
                      <div className="PaintMainMainLeftMiddlecolorpart"></div>
                      <div className="PaintMainMainLeftMiddlecolorpart" style={{ backgroundColor:color1}}></div>
                      <div className="PaintMainMainLeftMiddlecolorpart "></div>
                  </div>
                  <div className="PaintMainMainLeftMiddleprice">Rs {price2}</div>
              </div>
              <div className="PaintMainMainLeftDown">
                <div  className="PaintMainMainLeftDownTop"> 
                    <div className="PaintMainMainLeftDownTopleft">
                         <div className="PaintMainMainLeftDownTopleftQuantity"> Quantity </div>
                         <div className="PaintMainMainLeftDownTopleftIncrease"><button onClick={setunitt2} className='increase'>-</button></div>
                         <div className="PaintMainMainLeftDownTopleftNo">{unit}</div>
                         <div className="PaintMainMainLeftDownTopleftDecrease"><button onClick={setunitt} className='increase'>+</button></div>
                    </div>
                    <div className="PaintMainMainLeftDownToplright">
                           <div className="PaintMainMainLeftDownToplrighttopic">Liters</div>

                           <div className="PaintMainMainLeftDownToplrightcontent">
                               <div className="PaintMainMainLeftDownToplrightcontents">5l</div>
                               <div className="PaintMainMainLeftDownToplrightcontents">
                               <input
                                    type="radio"
                                    id="option2"
                                    name="radio-group"
                                    value="option2"
                                    checked={selectedValue ==="option2"}
                                    onChange={handleChange}
                                />
                               </div>

                           </div>
                           <div className="PaintMainMainLeftDownToplrightcontent">
                           <div className="PaintMainMainLeftDownToplrightcontents">10l</div>
                               <div className="PaintMainMainLeftDownToplrightcontents">
                               <input
                                    type="radio"
                                    id="option2"
                                    name="radio-group"
                                    value="option3"
                                    checked={selectedValue ==="option3"}
                                    onChange={handleChange}
                                />
                               </div>
                           </div>
                           <div className="PaintMainMainLeftDownToplrightcontent">
                           <div className="PaintMainMainLeftDownToplrightcontents">25l</div>
                               <div className="PaintMainMainLeftDownToplrightcontents">
                               <input
                                    type="radio"
                                    id="option2"
                                    name="radio-group"
                                    value="option1"
                                    checked={selectedValue === "option1"}
                                    onChange={handleChange}
                                />
                               </div>
                           </div>

                    </div>
                </div>
                <div  className="PaintMainMainLeftDownDown">
                    <button className='AddtoCart' onClick={()=>props.handleAddProduct(props.data1,price2,props.data2,count,"/images/Paints.jpg")}>ADD TO CART</button>
                </div>
              </div>
          </div>
    </div>
    )
}



export default PaintMain;
