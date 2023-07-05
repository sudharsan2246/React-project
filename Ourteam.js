import './Ourteam.css';
import ourteam1 from './image/3card1.png'
import ourteam2 from './image/3card2.png'
import ourteam3 from './image/3card3.png'

export default function Ourteam(){
    return(
        <div className="ourteam container"  style={{paddingTop:"50px"}}>
            <br/>  <br/>  <br/>
            <h3>Creative Brains</h3>
            <h1>Our Team</h1>
            <br/>  <br/>
            <div className="row">
                <div className="col-md-4" >
                <div className="card" >
                    <img style={{height:"350px"}} src={ourteam1} alt="Card image cap"/>
                <div className="card-body">
                      <h5 className="card-text gray-bacrground">Mike Roberts</h5>
                         <p className="card-text">Vice President</p>
                     </div>
                 </div>
                </div>
                <div className="col-md-4">
                <div className="card" >
                    <img style={{height:"350px"}} src={ourteam2} alt="Card image cap"/>
                <div className="card-body gray-bacrground">
                      <h5 className="card-text">Jennie Perry</h5>
                         <p className="card-text">Managment</p>
                     </div>
                 </div>
                </div>
                <div className="col-md-4">
                <div className="card" >
                    <img style={{height:"350px"}} src={ourteam3} alt="Card image cap"/>
                <div className="card-body gray-bacrground">
                      <h5 className="card-text">Tom Hudson</h5>
                         <p className="card-text">Director</p>
                     </div>
                 </div>
                </div>
            </div>
            <br/>  <br/>
        </div>
    )
}