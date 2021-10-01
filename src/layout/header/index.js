import React, { useState } from 'react';
import Container from '../../components/container';
import Logo from '../logo';
import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';
import './index.scss';

const Header = () => {
  const [menu, setMenu] = useState(false);
  return(
    <header className="py-2">
      <Container>
        <nav className="flex justify-between items-center">
          <Logo />
          <Burger
            className="md:hidden"
            direction="down"
            onClick={()=> setMenu(!menu)}
            isOpen={menu}
          />
          <ul className="hidden md:flex">
            <li className="uppercase header-nav-item">
              <a href="#" className="hover:text-primary transition-all">
                About
              </a>
              <div />
            </li>
            <li className="ml-6 uppercase header-nav-item">
              <a href="#" className="hover:text-primary transition-all">
                Work
              </a>
              <div />
            </li>
            <li className="ml-6 uppercase header-nav-item">
              <a href="#" className="hover:text-primary transition-all">
                Projects
              </a>
              <div />
            </li>
            <li className="ml-6 uppercase header-nav-item">
              <a href="#" className="hover:text-primary transition-all">
                Blog
              </a>
              <div />
            </li>                                    
            <li className="ml-6 uppercase header-nav-item">
              <a href="#" className="hover:text-primary transition-all">
                Contact
              </a>
              <div />
            </li>               
          </ul>
        </nav>
        <ul className="flex flex-col items-end md:hidden transition-all" style={{ height: menu ? 175 : 0, overflow: "hidden" }}>
          <li className="uppercase header-nav-item" onClick={()=> setTimeout(()=>setMenu(false), 250)}>
            <a href="#" className="text-primary transition-all">
              About
            </a>
            <div />
          </li>
          <li className="uppercase header-nav-item" onClick={()=> setTimeout(()=>setMenu(false), 250)}>
            <a href="#" className="text-primary transition-all">
              Work
            </a>
            <div />
          </li>
          <li className="uppercase header-nav-item" onClick={()=> setTimeout(()=>setMenu(false), 250)}>
            <a href="#" className="text-primary transition-all">
              Projects
            </a>
            <div />
          </li>
          <li className="uppercase header-nav-item" onClick={()=> setTimeout(()=>setMenu(false), 250)}>
            <a href="#" className="text-primary transition-all">
              Blog
            </a>
            <div />
          </li>                                    
          <li className="uppercase header-nav-item" onClick={()=> setTimeout(()=>setMenu(false), 250)}>
            <a href="#" className="text-primary transition-all">
              Contact
            </a>
            <div />
          </li>               
        </ul>
      </Container>  
    </header>
  )
}

export default Header;