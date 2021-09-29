import React from 'react';
import Container from '../../../components/container';
import './index.scss';
import heroImg from '../../../images/hero.jpg';

const Hero = ()=> {

  return(
    <div
      role="hero section"
      className=""
    >
      <Container>
        <div className="md:grid md:grid-cols-12 main-cont">
          <div
            className="col-span-6 flex items-center"
          >
            <h1>Website under construction 🚧</h1>
          </div>
          <div
            className="col-span-6 flex items-end justify-end"
          >
            <img src={heroImg} style={{ width: "80%" }} />
          </div>          
        </div>
      </Container>
    </div>
  );
}

export default Hero;