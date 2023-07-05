import logo1 from './image/logo1.png';
import logo2 from './image/logo2.png';
import logo3 from './image/logo3.png'
import logo4 from './image/logo4.png'
import logo5 from './image/logo5.png'
import logo6 from './image/logo6.png'
import './logo.css'
export default function Logo(){
    return(
        <div>
            <div className='container-fluid gray'>
  <br/><br/><br/>
  <div className='container align-middle'>
  <div className='row'>
    <div className='col-md-2'>
      <div className='card'>
      <img src={logo1} alt='#'/></div>
    </div>
    <div className='col-md-2'>
      <div className='card'>
      <img src={logo2} alt='#'/></div>
    </div>
    <div className='col-md-2'>
      <div className='card'>
      <img src={logo3} alt='#'/></div>
    </div>
    <div className='col-md-2'>
      <div className='card'>
      <img src={logo4} alt='#'/></div>
    </div>
    <div className='col-md-2'>
      <div className='card'>
      <img src={logo5} alt='#'/></div>
    </div>
    <div className='col-md-2'>
      <div className='card'>
      <img src={logo6} alt='#'/></div>
    </div>
    </div>
  </div>
<br/><br/><br/>
</div>
        </div>
    )
}