import React from 'react';
import './App.css';
import { Routes,Route} from "react-router-dom"
import Signup from "./Pages/Signup"
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App(){
  console.log("sinan")
  return(
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
  )
}

export default App;
