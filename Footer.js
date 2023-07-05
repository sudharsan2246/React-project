import React from "react";
import './Footer.css';
import { BsMap } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GiVibratingSmartphone } from 'react-icons/gi'

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="container">
                <br /><br />
                <div className="row" >
                    <div className="col-md-4">
                        <div className="row" style={{paddingTop:"35px"}}>
                            <div className="col-4"> <BsMap className="icon-style " /></div>
                            <div className="col-8">
                                <h4 className="">VisitUs</h4>
                                <p style={{ color: "white"}}>Tanta , AlGharbia, Egypt</p></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row" style={{paddingTop:"35px"}}>
                            <div className="col-4"><FiMail className="icon-style"/></div>
                            <div className="col-8">
                                <h4 className="">Email Us</h4>
                                <p style={{ color: "white" }} >7oroof@7oroof.com</p></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row" style={{paddingTop:"35px"}}>
                            <div className="col-4"> <GiVibratingSmartphone className="icon-style" /></div>
                            <div className="col-8">
                                <h4 className="">Call Us</h4>
                                <p style={{ color: "white" }}>+ 2 0106 5370701</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    )
}