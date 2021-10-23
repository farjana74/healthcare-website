import React, { useEffect,useState } from 'react';
import  "./Detail.css";

import { useParams } from 'react-router-dom';

const Detail = () => {
    const{detailId}=useParams();
    console.log(detailId)
    // const[detail,setDetail]=useState([])
    // const[single,setSingle]=useState
    // ({})

    const [details, setDetails]=useState({})
    useEffect(() => {
    fetch('/health.json')
    .then(res=>res.json())
    .then(data=>{
    
      const p=data.find(p=>p.id==detailId)
    console.log('this is details',p)
    console.log(data)
    setDetails(p)
    })
    
    },[detailId])








    return (
        <div className=" container  show">
            <br />
            <br />

        <div className=" row  d-flex my-auto" >
        <div className=" mx-auto col-md-6">
        <img src={details?.img} className="card-img-top w-100 border shadow-lg" alt="..."/>
        <div className="card-body">
          {/* <p className=" fs-4 card-text text-primary ">{details.name}</p> */}
        </div>
        </div>
       <div>
       <h3 className="text-center text-primary fs-2 ">Details about {details?.name}</h3>
       <div className="">
            
            <h5 className="">{details?.name} Checking out these top dental blogs is the perfect way to kick back, sharpen your expertise, and stay motivated throughout the year. 

After a little time away, getting back into the swing of things at the office is always a bit difficult.

Those to-do’s you jotted down for the first week back seem foggy, you can’t keep straight all the office resolutions you set to meet this year’s goals, and the surge of marketing strategies and recall campaign ideas from a couple of weeks ago seemingly disappeared.

One easy fix is to catch up on all the dental blogs you may not have time to read.

Like a runner who recovers by jogging a few miles here and there, setting aside some time to read the top dental blogs gives you some much-deserved downtime while keeping you “in shape” for the office. Because you know that when you walk through your office’s front doors that first day back, you’ll need to hit the ground
            
            </h5> <br />
            <br />
            <br />
            
        </div>
       </div>
      </div>

        </div>
        
    );
};

export default Detail;