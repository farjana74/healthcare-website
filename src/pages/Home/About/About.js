import React from 'react';
import about from '../../../images/about1.jpg'
import './About.css';
const About = () => {
    return (
        <div id ="about"className="about  ">
            <div className="row justify-content-evenly">
               
                <div className="col-md-6 shadow border abouts">
               <br/>
               <br/>

<img  className="w-100" src={about} alt="" />
                </div>
                <div className="col-md-4 border ">
                    <h2 className="text-primary">Welcome to Disin Hospital We have...</h2>
                    <br />
                    <br />
                    <div className="d-flex my-4 align-center my-3 ">
                        <div>
                        <i class="fas fa-user-nurse rounded-circle"></i>
                        </div>
                        <div className="mt-3">
<h4 className="fs-2 fw-bolder">Certified Doctors</h4>
<p className="fs-5 fst-italic">We provide our certified doctors and responsibilities
<br />
 who be carefull
and patient to her responsible duty </p>
                        </div>
                    </div>
                    
                    

                    <div className="d-flex my-4  my-3 ">
                        <div>
                        <i class="fas fa-hospital-symbol rounded-circle"></i>
                        </div>
                        <div className="mt-3 ">
                        <h4 className="fs-2 fw-bolder">Proper Care</h4>
<p className="fs-5 fst-italic ">We provide our certified proper care and responsibilities
<br />
 who be carefull
and patient to her responsible duty </p>
                        </div>
                    </div>
                    
                    <div className="d-flex my-4  ">
                        <div>
                        <i class="fas fa-diagnoses rounded-circle"></i>
                        </div>
                        <div className="mt-3">
                        <h4 className="fs-2 fw-bolder">Certified nurses</h4>
                        <p className="fs-5 fst-italic">We provide our certified nurses and responsibilities

 who be carefull
and patient to her responsible duty </p>
                        </div>
                    </div>
                   
                </div>
            </div>
            
        </div>
    );
};

export default About;
