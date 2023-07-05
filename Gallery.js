import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import card1 from './image/card1.jpeg'
import card2 from './image/card2.jpeg'
import card3 from './image/card3.jpeg'
import card4 from './image/card4.jpeg'
import card5 from './image/card5.jpeg'
import card6 from './image/card6.jpeg'
import './Gallery.css'

export default function Gallery(){
    return(
        <div className='gallery'>
            <br></br><br></br><br></br><br></br>
            <div className='container width'>
                <div className='row '>
                    <div className='col-md-4'>
                    <div className='card'>
                            <img src={card1} alt='##' />
                    </div>
                    <div className='card-body'>
                        <h5>Automotive Parts & System</h5>
                        <p style={{color:"black", textAlign:"left"}}>Tiling is an effective way to add elegance & style to any bath 
                            or kitchen Yellow Hats Remodeling Team specializes in tile installation 
                            and works directly with each.</p>
                        <p style={{textAlign:"left"}}><a href='#' className='button5'><b>READMORE</b></a></p>
                    </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='card'>
                            <img src={card2} alt='##' />
                    </div>
                    <div className='card-body'>
                        <h5>Power & Energy</h5>
                        <p style={{color:"black", textAlign:"left"}}>Yellow Hats has full service 
                        renovation expertise, we are equipped with the right tools and people to 
                        handle projects of all sizes & provide high quality renovation.</p>
                        <p style={{textAlign:"left"}}><a href='#' className='button5'><b>READMORE</b></a></p>
                    </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='card'>
                            <img src={card3} alt='##' />
                    </div>
                    <div className='card-body'>
                        <h5>Construction & Engineering</h5>
                        <p style={{color:"black", textAlign:"left"}}>Tiling is an effective way to add elegance & 
                        style to any bath or kitchen Yellow Hats Remodeling Team specializes in 
                        tile installation and works directly with each.</p>
                        <p style={{textAlign:"left"}}><a href='#' className='button5'><b>READMORE</b></a></p>
                    </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='card'>
                            <img src={card4} alt='##' />
                    </div>
                    <div className='card-body'>
                        <h5>Material Engineering</h5>
                        <p style={{color:"black", textAlign:"left"}}>Tiling is an effective way to add elegance & 
                        style to any bath or kitchen Yellow Hats Remodeling Team specializes in tile 
                        installation and works directly with each.</p>
                        <p style={{textAlign:"left"}}><a href='#' className='button5'><b>READMORE</b></a></p>
                    </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='card'>
                            <img src={card5} alt='##' />
                    </div>
                    <div className='card-body'>
                        <h5>Agricultural Processing</h5>
                        <p style={{color:"black", textAlign:"left"}}>Yellow Hats has full service renovation expertise, 
                        we are equipped with the right tools and people to handle projects of all sizes & 
                        provide high quality renovation works.</p>
                        <p style={{textAlign:"left"}}><a href='#' className='button5'><b>READMORE</b></a></p>
                    </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='card'>
                            <img src={card6} alt='##' />
                    </div>
                    <div className='card-body'>
                        <h5>Petroleum & Gas</h5>
                        <p style={{color:"black", textAlign:"left"}}>Yellow Hats aim to eliminate the task of dividing 
                        your project between different architecture and construction company as we offers 
                        design and build services for you.</p>
                        <p style={{textAlign:"left"}}><a href='#' className='button5'><b>READMORE</b></a></p>
                    </div>
                    </div>
                    
                </div>
                <div>
                    <div>
                        
                    </div>
                <br/><br/><br/></div>
            </div>


        </div>
    )
}