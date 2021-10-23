import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({services}) => {
    console.log(services)
    const{id,name,img,describe}=services;
    return (




        <div class="col cards">
    <div class="card w-100 shadow-lg carder">
      <img className="w-50 text-center" src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class=" text-muted card-text">{describe}</p>
       <Link to={`/detail/${id}`}><button type="button" class="btn button text-white btn-lg">Details {name}</button></Link>
        
      </div>
    </div>
  </div>
        // <div>
            
        //     <div>
        //         <img className="w-25" src={img} alt="" />
        //         <h3>{name}</h3>
        //         <h5>{describe}</h5>
        //     </div>

        // </div>
    );
};

export default Service;