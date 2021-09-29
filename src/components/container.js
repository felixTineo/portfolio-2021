import React from 'react';

const Container = ({ children }) => (
  <div className="container-xl mx-auto px-4 xl:px-16 relative">
    {children}
  </div>
);

export default Container;