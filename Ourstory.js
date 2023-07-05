import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ourstory.css'
import factory from './image/factory.jpg'
import Counter from './Counter'

export default function Ourstory(){
    return(
        <div className='ourstory container-fluid-md' style={{paddingTop:"50px"}}>
            <div className='container mx-auto bbg' >
                <h4>All About Yellow Hats</h4>
                <h2 style={{fontSize:"45px"}}>Our Story</h2><br/>
                <p >Yellow Hats is a leading developer of A-grade commercial, industrial 
                    and residential projects in USA. Since its foundation the company has 
                    doubled its turnover year on year, with its staff numbers swelling accordingly.</p>
            </div>
            <div className='container-fluid-md'>
                <div className='container-md hello' >
                <div className='row margin'>
                  
                    <div className='col-md-4 col-center'>
                        <div>
                            <h4>About</h4>
                            <p>We do only what we are great on. If we tackle a project you 
                                can be 100% sure that it will be delivered right on time, 
                                within the set budget limits and at the top level. We get 
                                all our liabilities insured, including third-party liabilities, 
                                thus indemnifying our clients against all risks.</p>
                        </div>
                        <div>
                            <h4>Our Mission</h4>
                            <p>We do only what we are great on. If we tackle a project you can be 
                                100% sure that it will be delivered right on time, within the set 
                                budget limits and at the top level. We get all our liabilities insured, 
                                including third-party liabilities, thus indemnifying our clients against
                                 all risks.</p>
                        </div>
                        <div>
                            <h4>Our Goals</h4>
                            <p>We do only what we are great on. If we tackle a project you 
                                can be 100% sure that it will be delivered right on time, 
                                within the set budget limits and at the top level. We get 
                                all our liabilities insured, including third-party liabilities, 
                                thus indemnifying our clients against all risks.</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-center1'>
                        <div><img src={factory} style={{width:"300px", height:"450px"}} alt='##'/></div>
                    </div>
                    <div className='col-md-4 col-center2'>
                        <div>
                    <h4>Reliability</h4>
                    <p> Yellow Hats has a cutting edge quality management 
                        system which ensures high quality standards at all sites.</p>
                        </div>
                        <div>
                    <h4>Expertise</h4>
                    <p>We have a team of specialists capable of maximizing the result 
                     and delivering the projects of any complexity and scope.</p>
                        </div>
                        <div>
                    <h4>Quality</h4>
                    <p>The control mechanism allows secure & integrated 
                    monitoring of all stages of the works.</p>
                    </div>
                    </div></div>
                </div></div>
                <br></br>
                <br/><br/>
                <Counter/>
            </div>
        
    )
}