import React from 'react'
import './contact.css'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Contact = () => {
    return (
        <>
            <div className=" contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-xl-5 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img
                                        src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                                        alt="ocontact"
                                        className="image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="row">
                                        <h3>
                                            Contact Me
                                        </h3>
                                        <div className='okaynow'>
                                            <a href='https://www.linkedin.com/in/harshith-kumar-307a96252'><BsLinkedin size={50} className="ms-2" /></a>
                                            <a href='https://github.com/Harshithb2r'> <BsGithub color="black" size={50} className="ms-2" /></a>
                                        </div>
                                    </div>

                                    <div className="row px-3 mb-4">
                                        <div className="line" />
                                        <small className="or text-center">OR</small>
                                        <div className="line" />
                                    </div>
                                    <div className="row px-3">
                                        <div className='dont'>
                                            <h4>Phone :</h4>
                                            <h5>9908895770</h5>
                                        </div>
                                    </div>
                                    <div className="row px-3">
                                        <div className='dont'>
                                            <h4>Email :</h4>
                                            <h5>harshith.gannavarapu23@gmail.com</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
