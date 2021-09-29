import React from 'react';
import Container from '../../components/container';

const Footer = ()=> {

  return(
    <footer>
      <div className="bg-primary text-black">
        <Container>
          <div className="flex items-center justify-between text-sm">
            <span>
              &copy;
              All rights reserved {new Date(Date.now()).getFullYear()}
            </span>
            <span>
              Designed and developed by: <a className="font-bold text-black" href="mailto:felixtineo05@gmail.com">Felix tineo</a>
            </span>            
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer;