import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component2.css'
import Component3 from './Component3'
import Gallery from './Gallery';
import Ourstory from './Ourstory';
import Ourproject from './Ourprojects';
import Ourteam from './Ourteam';
import Testimonials from './Testimonials';
import Blogs from './Blogs';


export default function Component2() {
    return (
        <div style={{paddingTop:"50px"}}>
        <div className="backgroundimage container-fluid-lg">
            <br></br><br></br><br></br>
            <h4 className='white'>We Are Yellow Hats</h4>
            <h1>Big Factory</h1>
            <p style={{color:"white"}}>Yellow Hats is a leading developer of A-grade commercial, industrial and residential</p>
            <p style={{color:"white"}}>projects in USA. Since  its foundation the company has doubled its turnover year on year,</p>
            <p style={{color:"white"}}>with its staff numbers swelling accordingly.</p>
            <br></br>

            <div className='container col-height5'><button className='button-style' style={{ backgroundColor: "#ffce3e" }}>Read More</button></div>
            <div className='container col-height6'><button className='button-style1' style={{ backgroundColor: "#ffffff"}}><b>GET STARTED</b></button></div>



        </div>
        <Component3 />
        <Gallery/>
        <Ourstory/>
        <Ourproject/>
        <Ourteam/>
        <Testimonials/>
        <Blogs/>
        </div>
    )
}