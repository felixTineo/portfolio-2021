import React, { useRef, useState } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'gatsby';
import './index.scss';

const Logo = () => (
  <Link to="/">
    <img
      src={logo}
      alt="website logo"
      className={`

      `}
    />
  </Link>
);

export default Logo;