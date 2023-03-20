import {BrowserRouter as Router,Route,Routes,Link, useActionData, UNSAFE_useScrollRestoration} from 'react-router-dom'
import Main_Category from './Components/categories/Main_Category';
import Header from './Components/header_component/Header';
import Aboutus from './Components/main/Aboutus';
import Contactus from './Components/main/Contactus';
import Main from './Components/main/Main';
import Paints_Category from './Components/categories/Paints_Category';
import Others_Category from './Components/categories/Others_Category';
import Painbrushes_Category from './Components/categories/Paintbrushes_Category';
import Rollers_Category from './Components/categories/Rollers_Category';
import Dark from './Components/categories/Paint/Dark';
import Light from './Components/categories/Paint/Light';
import Soft from './Components/categories/Paint/Soft';
import Random from './Components/categories/Paint/Random';
import Cart from './Components/main/Cart';

import { useState, useEffect } from 'react';
import PaintMain from './Components/categories/Paint/PaintMain/PaintMain';

function App() {

  const [a, setHome] = useState(false);
  const [b, setAbout] = useState(false);
  const [c, setContact] = useState(false);
  const [d, setProducts] = useState(false);
  const[count,setCount] =useState(0);
  const [cartItems,setcartitems]=useState([]);

  const headerItems=([false,false,false,false]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.00);
  const [color,setColor] = useState("");

  const handleDelete= (id) => {
    setcartitems(prevItems => {
      const newItems = [...prevItems];
      newItems.splice(id, 1);
      setCount(count-1);
      return newItems;
    });    
  };

  const getData= (data1,data2,data3,data4) =>{
    setHome(data1);
    setAbout(data2);
    setContact(data3);
    setProducts(data4);
  }

  const getData2 =(name1,price1,color1)=>{
       setTitle(name1);
       setColor(color1);
       setPrice(price1);
  }

  

  const handleAddProduct =(name,price,color,quantity,url)=>{
    setcartitems([...cartItems, {name:name ,price:price,quantity:quantity,color:color,url:url}]);
    setCount(count+1);
  }

  return (
    <div className="App" > 

      <Router>
        <Header count={count} headerItems={headerItems}   data1={a} data2 ={b} data3={c} data4={d}/>
        <Routes>
          <Route path='/' element={<Main   onssubmit={getData}/>}/>
          <Route path='/aboutus' element={<Aboutus onssubmit={getData}/>}/>
          <Route path='/contactus' element={<Contactus  onssubmit={getData}/>}/>
          <Route path='/category' element={<Main_Category  onssubmit={getData}/>}/>
          <Route path='/cart'  element={<Cart  handleDelete={handleDelete} onssubmit={getData} cartItems={cartItems} />}/>
          <Route path='/paintcategory' element={<Paints_Category/>}/>
          <Route path='/categoryroller' element={<Rollers_Category handleAddProduct={handleAddProduct} />}/>
          <Route path='/categorypaintbrushes' element={<Painbrushes_Category handleAddProduct={handleAddProduct}/>}/>
          <Route path='/categoryother' element={<Others_Category handleAddProduct={handleAddProduct}/>}/>
          <Route path='/dark'  element={<Dark onsubmitdata2={getData2}/>}/>
          <Route path='/soft' element={<Soft onsubmitdata2={getData2}/>}/>
          <Route path='/random' element={<Random onsubmitdata2={getData2}/>}/>
          <Route path='/light' element={<Light onsubmitdata2={getData2}/>}/>
          <Route path='/paintmain'  element={<PaintMain handleAddProduct={handleAddProduct} data2={color} data3={price} data1={title} />}/>
          </Routes>
          </Router>
    
    </div>
  );
}

export default App;
