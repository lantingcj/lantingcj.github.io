import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className=" py-5 shadow-xl border-b flex sticky top-0 bg-white -mx-4 sm:mx-0 px-4 sm;px-0">
      <div className=" flex item-center justify-between container bg-white">
        <p className="font-bold">Shoppee</p>
      </div>
      <div>
        <head>
          <title> Shoppee </title>
        </head>
      </div>
      <NavLink className="font-bold" to="/">
        Home
      </NavLink>
      <NavLink className="font-bold pl-3" to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default Navigation;
