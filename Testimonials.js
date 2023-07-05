import './Testimonials.css';
import test1 from './image/test1.png'
import test2 from './image/test2.jpeg'
import test3 from './image/test3.jpeg'
import { FaQuoteLeft } from 'react-icons/fa'
import Signature from './Signature';

export default function Testimonials() {
    return (
        <div className='container-fluid testimonial'  style={{paddingTop:"50px"}}>
            <br />  <br />  <br />
            <h3>What People Say !</h3>
            <h1>Testimonials</h1>
            <br />  <br />
            <div className='container-md'>
                <div className='row '>
                    <div className='col-md-4 body-style '>
                        <div className='icon relative'><FaQuoteLeft /><img src={test1} alt='#' style={{ height: "80px", width: "110px" }} className="absolute1" /></div>
                            <div> </div>
                       
                        <div><p>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris
                            in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis
                            eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p></div>
                            <div>
                                <h5>Bertie Norton</h5>
                                <p>Secretary</p>
                            </div>
                    </div>
                    <div className='col-md-4 body-style '>
                        <div className='icon relative'><FaQuoteLeft /><img src={test2}  alt='#' style={{ height: "80px", width: "110px"}} className='absolute1' /></div>
                        <div className="position2" ></div>
                        <div><p>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris
                            in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis
                            eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p></div>
                            <div>
                                <h5>Mark Johnson</h5>
                                <p>Engineer</p>
                            </div>
                    </div>
                    <div className='col-md-4 body-style '>
                        <div className='icon relative'><FaQuoteLeft /><img src={test3}  alt='#' style={{ height: "80px", width: "110px" }} className="absolute1" /></div>
                        <div><p>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris
                            in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis
                            eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p></div>
                            <div>
                                <h5>Nike Scavo</h5>
                                <p>Investor</p>
                            </div>
                    </div>
                </div>
            </div>
            <br/> <br/> <br/> <br/>
            <Signature/>
            <br></br><br></br>
        </div>
    )
}