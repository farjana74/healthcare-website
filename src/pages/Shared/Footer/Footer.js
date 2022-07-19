import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bor container-fluid pt-5">
            <div className='container'>
                <div className="row ">
                    <div className="  col-md-4   text-white">
                        <h2 className="pb-5 fs-4">Contact us</h2>
                        <div className="d-flex   py-3 ">
                            <div>
                                <i class=" pe-3 fas fa-envelope"></i>
                            </div>
                            <div>
                                <h5>csefaraja74@gmail.com</h5>
                                <h5>popy5898@gmail.com</h5>


                            </div>
                        </div>
                        <div className="d-flex   py-3">
                            <div>
                                <i class="pe-3 fas fa-mobile-alt"></i>
                            </div>
                            <div>
                                <h5>01757788888</h5>
                                <h5>01858346843</h5>
                            </div>
                        </div>
                        <div className="d-flex  py-3">
                            <div>
                                <i class="pe-3  fas fa-location-arrow  "></i>
                            </div>
                            <div>
                                <h5>207,88th home,
                                    Mirpur dhaka,
                                    Albali gate r oposite
                                </h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-2 ">
                        <h2 className=" text-white pb-5 fs-4 ">Quick links</h2>
                        <h5 className='fs-5 text-white '>Home</h5>
                        <h5 className='fs-5 text-white py-2'>Dentai Care</h5>
                        <h5 className='fs-5 text-white '>Contact</h5>
                        <h5 className='fs-5 text-white py-2'>Doctor</h5>
                        <h5 className='fs-5 text-white '>Services</h5>





                    </div>
                    <div className=" col-md-3  ">
                        <h2 className=" text-white pb-5 fs-4">Our Services</h2>
                        <h5 className=" fs-5 text-white ">Dental care</h5>
                        <h5 className=" fs-5 text-white py-2">Cardiology</h5>
                        <h5 className=" fs-5 text-white ">Hijama Therapy</h5>
                        <h5 className=" fs-5 text-white py-2">Massage Therapy</h5>
                        <h5 className=" fs-5 text-white ">Ambulance Service</h5>

                    </div>
                    <div className=" col-md-3  ">
                        <h2 className=" text-white pb-5 fs-4">Feedback</h2>

                        <form className=" ">
                            <input type="text" name="" id="" placeholder="your name" required />
                            <br />
                            <br />
                            <input type="text" name="" id="" placeholder="your email" required />

                            <br />
                            <br />
                            <button className=" text-white ps-3 pe-3 pt-2 pb-2 button rounded-pill">submit</button>
                        </form>
                    </div>

                </div>
            </div>
            <hr />

            <div className="last-footer shadow-lg">
                <p>© 2021 Qode Interactive, All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;