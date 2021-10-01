import React from 'react';
import Header from './header';
import Footer from './footer';
import { IoLogoWhatsapp } from 'react-icons/io5';

const Layout = ({ children }) => {

  return(
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <a
        rel="noreferrer"
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=+584120598647&text=Hello,%20Felix%20i%20am%20on%20your%20web%20and%20i%20would%20like%20to%20contact%20you!`}
        className="bottom-2 right-2 md:bottom-6"
        style={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          position: "fixed",
          //bottom: "100px",
          //right: "10px",
          //left: 11,
          //background: "#000",
          //boxShadow: "0 3px 8px 0 rgb(0 0 0 / 32%)",
          borderRadius: '50%',
          background: '#1c1c1c',
          boxShadow:  `-35px 35px 70px #131313,
                       35px -35px 70px #252525;`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          color: "#25D366",
          zIndex: 100
        }}
      >
        <IoLogoWhatsapp />
      </a>      
    </div>
  )
}

export default Layout;