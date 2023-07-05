import Carousel from 'react-bootstrap/Carousel';
import './Imageplugin.css'
import slide1 from './image/slide1-1.jpg'
import slide2 from './image/slide1-2.jpg'
import slide3 from './image/slide1-3.jpg'
import slide4 from './image/slide1-4.jpg'
import slide5 from './image/slide2-1.jpg'
import slide6 from './image/slide2-2.jpg'
import slide7 from './image/slide2-3.jpg'
import slide8 from './image/slide2-4.jpg'

import background from './image/plugin-back1.jpg'


export default function Imageplugin(){

    return(
      <div className='container-fluid-md'> 
      <Carousel className='height'>    
      <Carousel.Item >
      <div className='card'></div>
        <img 
          className='slide-background'
          src={background}
          alt="Second slide"
        />
        <Carousel.Caption className='slide-width mx-auto'>
           <div><h3>Great & Awesome Works</h3>
          <h1>Our Projects</h1>
         </div>
        
         <div className='container-md back text-center'>
         <div className="row mx-auto">
            <div className='col-md-3 slide2-width'>
            <div className='card'>
                <img src={slide1} alt='#'/></div>
            </div>
            <div className='col-md-3 slide2-width'>
            <div className='card'>
            <img src={slide2} alt='#'/></div>
            </div>
            <div className='col-md-3 slide2-width'>
            <div className='card'>
            <img src={slide3} alt='#'/></div>
            </div>
            <div className='col-md-3 slide2-width'>
            <div className='card'>
            <img src={slide4} alt='#'/></div>
            </div></div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <div className='card'></div>
        <img 
          className='slide-background'
          src={background}
          alt="Second slide"
        />
        <Carousel.Caption className='slide-width mx-auto'>
           {/* <div><h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </div> */}
         <div className='container-md back text-center'>
         <div className="row mx-auto">
            <div className='col-md-3 slide2-width'>
            <div className='card'>
                <img src={slide5} alt='#'/></div>
            </div>
            <div className='col-md-3 slide2-width'>
            <div className='card'>
            <img src={slide6} alt='#'/></div>
            </div>
            <div className='col-md-3 slide2-width'>
            <div className='card'>
            <img src={slide7} alt='#'/></div>
            </div>
            <div className='col-md-3 slide2-width'>
            <div className='card'>
            <img src={slide8} alt='#'/></div>
            </div></div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>



    )
}