import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Homepage/Contact';
import Details from './Components/Homepage/Details';
import Home from './Components/Homepage/Home';
import Products from './Components/Homepage/Products';
import Users from './Components/Homepage/Users';
import Loginform from './Components/Login/Loginform';

function App() {
  const [detail, setdetail] = useState({})

  function detailingHandler(e){
    setdetail(e)
    console.log(detail);
  }
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Loginform/>} />
          <Route path="/Home" element={<Home />} />
          <Route path='/products' element={<Products detailingHandler={detailingHandler}/>}/>
          <Route path="/users" element={<Users />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path='/Details' element={<Details detail={detail}/>}/>
        </Routes>
    </div>
  );
}

export default App;

