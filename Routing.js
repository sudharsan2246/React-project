import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Component1 from "./Component1";
import Component2 from './Component2';
import Gallery from './Gallery';
import Ourstory from './Ourstory';
import Ourteam from './Ourteam'
import Testimonials from './Testimonials'
import Blogs from './Blogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ourproject from './Ourprojects';

function Routing() {
    return (
      <div>
        <BrowserRouter>
        <Component1 />
        <Routes>
            <Route path='/' element={<Component2 />}/>
            <Route  path='Home' element={ <Component2 />}/>
            <Route  path='gallery' element={<Gallery/>}/>
            <Route  path='ourstory' element={ <Ourstory/>}/>
            <Route  path='ourproject' element={ <Ourproject/>}/>
            <Route  path='ourteam' element={ <Ourteam/>}/>
            <Route  path='testimonials' element={ <Testimonials/>}/>
            <Route  path='blogsnews' element={ <Blogs/> }/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default Routing;
  