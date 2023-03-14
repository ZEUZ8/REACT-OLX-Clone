import React from 'react';
import './App.css';
import { Routes,Route} from "react-router-dom"
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App(){
  console.log("sinan")
  return(
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
  )
}

export default App;
