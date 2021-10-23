import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const[service,setService]=useState([])
    useEffect(()=>{
        fetch('health.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div id="services" className="container  ">
           <h3 className="text-primary text-center my-5">Our hospital services</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {
                service.map(services=><Service
                services={services}
            
                
                
                ></Service>)
            }
          </div>
        </div>
    );
};

export default Services;