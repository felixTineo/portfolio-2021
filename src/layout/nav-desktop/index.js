import React from 'react';
import Container from '../../components/container';
import Logo from '../logo';

const Nav = () => (
  <Container>
    <nav className="flex justify-between items-center">
      <Logo />
      <ul className="flex">
        <li className="uppercase">
          <a href="#" className="hover:text-primary transition-all">
            About
          </a>
        </li>
        <li className="ml-4 uppercase">
          <a href="#" className="hover:text-primary transition-all">
            Work
          </a>
        </li>
        <li className="ml-4 uppercase">
          <a href="#" className="hover:text-primary transition-all">
            Projects
          </a>
        </li>
        <li className="ml-4 uppercase">
          <a href="#" className="hover:text-primary transition-all">
            Blog
          </a>
        </li>                                    
        <li className="ml-4 uppercase">
          <a href="#" className="hover:text-primary transition-all">
            Contact
          </a>
        </li>               
      </ul>
    </nav>
  </Container>  
)

export default Nav;