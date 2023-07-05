import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signature.css';
import signature from './image/signature.png'


export default function Signature(){
    return(
        <div className='container-fluid signature'>
            <div className='container'>
                <h1>Quality Comes First</h1>
                <p>Cutting-edge construction quality management system LATISTA ensures high 
                    quality standards at all of the company’s sites. The control mechanism allows 
                    integrated monitoring of works at all stages of construction and includes over 
                    100 quality assessment benchmarks.</p>
                    <br/>
                    <img src={signature} alt='###' style={{height:"80px",width:"200px"}}/>
            </div>
<br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}