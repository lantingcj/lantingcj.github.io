import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="px-4 py-5 shadow-xl border-b flex sticky top-0">
      <div className=" flex item-center justify-between container">
        <p className="solid">Logo</p>
      </div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};

export default Navigation;
