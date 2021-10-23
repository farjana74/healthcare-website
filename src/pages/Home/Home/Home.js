import React from 'react';


import Banner from '../Banner/Banner';
import Communicate from '../Communicate/Communicate';
import Services from '../Services/Services';
import About from '../About/About';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
         
             <Banner></Banner>
             <Communicate></Communicate>
             <br />
             <br />
             <br />
             <br />
            <About></About>
           <Services></Services>
           <br />
           <br />
           
           
        </div>
    );
};

export default Home;