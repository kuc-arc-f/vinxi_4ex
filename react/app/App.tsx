

import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './client/home';
import About from './client/about';

export default function App(){
  return(
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}
