import React from 'react';
import banner1 from '../../../images/hospitals.jpg';
import banner3 from '../../../images/doctor-eleks-header-image.jpg';
import banner2 from '../../../images/Doctor with Scope.jpg';
import "./Banner.css";

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
          <img className="img-fluid banner-height d-block" src={banner2} alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Welcome to our hospital</h5>
            <p>Second life hospital thats means give you a new world for saving your life.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img className="img-fluid banner-height  d-block" src={banner2} alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Welcome to our hospital</h5>
            <p>Second life hospital thats means give you a new world for saving your life.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img className="img-fluid banner-height  d-block " src={banner3} alt="..." />
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












