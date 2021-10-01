import React from 'react';
import Container from '../../../components/container';
import './index.scss';
import heroImg from '../../../images/hero.jpg';
import Button from '../../../components/button';
import { AiFillTwitterSquare, AiFillGithub, AiFillMediumSquare, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Hero = ()=> {

  return(
    <div
      role="hero section"
      className="relative"
    >
      <ul className="absolute bottom-20 md:top-1/3 right-6 text-3xl text-primary z-10">
        <li className="mb-4 hover:text-primary-light transition-all">
          <a href="https://www.linkedin.com/in/felix4dev" rel="noreferrer" target="_blank">
            <AiFillLinkedin />
          </a>
        </li>        
        <li className="mb-4 hover:text-primary-light transition-all">
          <a href="https://github.com/felixTineo" rel="noreferrer" target="_blank">
            <AiFillGithub />
          </a>
        </li>                        
        <li className="mb-4 hover:text-primary-light transition-all">
          <a href="https://twitter.com/Felix4dev" rel="noreferrer" target="_blank">
            <AiFillTwitterSquare />
          </a>
        </li>        
        <li className="mb-4 hover:text-primary-light transition-all">
          <a href="https://www.instagram.com/felixrtineo/" rel="noreferrer" target="_blank">
            <AiFillInstagram />
          </a>
        </li>                        
        <li className="mb-4 hover:text-primary-light transition-all">
          <a href="https://felixtineo05.medium.com/" rel="noreferrer" target="_blank">
            <AiFillMediumSquare />
          </a>
        </li>        
      </ul>
      <Container>
        <div className="flex flex-col md:grid md:grid-cols-12 main-cont">
          <div
            className="col-span-6 flex flex-col justify-center items-start"
          >
            <h1 className="text-primary">Hey, There!</h1>
            <p className="mb-4 md:w-4/5">
              I’m Felix Tineo, web developer and software engineer. I help companies to develop web apps, as well as people who want an SEO friendly website, accessible and responsive with the latest technologies.
            </p>
            <Button.Link href="#work">
              My work
            </Button.Link>
          </div>
          <div
            className="col-span-6 flex items-end justify-center flex-1"
          >
            <img src={heroImg} className="w-3/4" />
          </div>          
        </div>
      </Container>
      {/* <div className="">
        <div className="shapedividers_com-6380" />
      </div> */}
    </div>
  );
}

export default Hero;