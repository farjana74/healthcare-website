import React from 'react';
import banner1 from '../../../images/b1.png';
import banner2 from '../../../images/b2.jpg';
import banner3 from '../../../images/b3.jpg'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner border">
          <div class="carousel-item active">
            <img  className="img-fluid" src={banner1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome to our hospital</h5>
              <p>Second life hospital thats means give you a new world for saving your life.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img className="img-fluid" src={banner2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h5>Welcome to our hospital</h5>
              <p>Second life hospital thats means give you a new world for saving your life.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img className="img-fluid" src={banner3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h5>Welcome to our hospital</h5>
              <p>Second life hospital thats means give you a new world for saving your life.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Banner;












