import React from "react";
import './Blogs.css'
import blog1 from './image/slide2-2.jpg'
import blog2 from './image/slide1-3.jpg'
import blog3 from './image/blog3.jpeg'


export default function Blogs() {
    return (
        <div className="container blogs"  style={{paddingTop:"30px"}}>
            <h3>Some Tips For You !</h3>
            <h2>Blog & News</h2>
            <br />
            <div className="row">
                <div className="col-md-4">

                    <div className="card blog-relative">
                        <img src={blog1} alt="###" style={{ height: "280px" }} />
                        <div className="blog-absolute">
                            <h5><b>Jan 24</b></h5>
                        </div>
                    </div>
                    <br /><br></br>
                    <div className="card-body">
                        <h4>Framing & Insulating Walls in Warehouse</h4>
                        <p>Ranch-styled homes have simple floor plans with a wider outward
                            appearance – without the depth that most present homes possess.</p>
                        <button className="button5"><b>READ MORE</b></button><br />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card blog-relative">
                        <img src={blog2} alt="###" style={{ height: "280px" }} />
                        <div className="blog-absolute">
                            <h5><b>Jan 25</b></h5>
                        </div>
                    </div>
                    <br /><br></br>
                    <div className="card-body">
                        <h4>Before Making Your Dream Living Room Don't Forget to Make 3D</h4>
                        <p>Ranch-styled homes have simple floor plans with a wider outward
                            appearance – without the depth that most present homes possess.</p>
                        <button className="button5"><b>READ MORE</b></button><br />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card blog-relative">
                        <img src={blog3} alt="###" style={{ height: "280px" }} />
                        <div className="blog-absolute">
                            <h5><b>Jan 26</b></h5>
                        </div>
                    </div>
                    <br /><br></br>
                    <div className="card-body">
                        <h4>Springtime Renovation: Get Your Windows Winter</h4>
                        <p>Ranch-styled homes have simple floor plans with a wider outward
                            appearance – without the depth that most present homes possess.</p>
                        <button className="button5"><b>READ MORE</b></button><br />
                    </div>
                </div>

            </div><br/><br/><br/>
           
        </div>
    )
}