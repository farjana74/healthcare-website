import React from 'react';
import './Communicate.css'
// import opration from '../../../images/operation.jpg'
const Communicate = () => {
    return (
        <div className="container  communicate">
            <div className="row pt-5 text-white">
<div className="col-md-3 d-flex mx-auto ">
    <div>
    <i class="fas fa-map-marker-alt"></i>
    </div>
    <div>
        <h2>Location</h2>
       <h5>2108-267 Road Quadra, Toronto, Canada Victiria Canada</h5>
    </div>
</div>
<div className="col-md-3 d-flex mx-auto ">
    <div>
    <i class="fas fa-ambulance"></i>
    </div>
    <div>
        <h2>Ambulance</h2>
        <h5>+07 5554 3332 322</h5>
        <h5>+08 6664 3332 322</h5>
    </div>
</div>
<div className="col-md-3 d-flex  mx-auto ">
    <div>
    <i class="fas fa-phone-volume"></i>
    </div>
    <div>
        <h2>Emergency Call</h2>
        <h5>+07 5554 3332 322</h5>
        <h5>+08 6664 3332 322</h5>
    </div>
</div>


            </div>

            
        </div>
    );
};

export default Communicate;