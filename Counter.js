import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './counter.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

export default function Counter() {
    const [counterOn, setCounterOn]=useState(false)
    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <div className='container-fluid counter'>
            <div className='container'>
                <div className='row lineheight'>
                    <div className='col-sm-12 col-md-6 col-lg-3'>
                        <h1>{counterOn && <CountUp start={0} end={5000} duration={2} delay={0}/>}</h1>
                        <p style={{color:"black"}}>Project Completed</p>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-3'>
                    <h1>{counterOn && <CountUp start={0} end={1325} duration={2} delay={0}/>}</h1>
                        <p style={{color:"black"}}>Worked Employes</p>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-3'>
                    <h1>{counterOn && <CountUp start={0} end={321} duration={2} delay={0}/>}</h1>
                        <p style={{color:"black"}}>Award Won</p>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-3'>
                    <h1>{counterOn && <CountUp start={0} end={2314} duration={2} delay={0}/>}</h1>
                        <p style={{color:"black"}}>Happy Cutomers</p>
                    </div>

                </div>

            </div>

        </div></ScrollTrigger>
    )
}