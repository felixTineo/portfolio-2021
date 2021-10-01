import React from 'react';

const Link = (props) => (
  <a
    {...props}
    className="
      bg-secondary
      px-12
      py-2
      font-heading
      text-xl
      transition-all
      hover:bg-secondary-light
      active:bg-secondary    
    "
  >

  </a>
)

const Button = (props) => (
  <button
    {...props}
    className="
      bg-secondary
      px-12
      py-2
      font-heading
      text-xl
      transition-all
      hover:bg-secondary-light
      active:bg-secondary
    "
  >

  </button>
);

Button.Link = Link;

export default Button;