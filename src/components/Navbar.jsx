import React from 'react'
import logo from '../assets/images/logo1.png';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

  const blackTouch=({isActive}) => isActive ?   "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  return (
    <>
    <nav className ="bg-indigo-700 border-b border-white-500">
      <div className ="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className ="flex h-20 items-center justify-between">
          <div
            className ="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* {<!-- Logo -->} */}
            <NavLink className ="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className ="h-10 w-auto"
                src={logo}
                alt="AlmaMatters"
              />
              <span className ="hidden md:block text-white text-2xl font-bold "
                > AlmaMatters</span
              >
            </NavLink>
            <div className ="md:ml-auto">
              <div className ="flex space-x-2">
                <NavLink
                  to="/"
                  className ={blackTouch}
                  >Home</NavLink >
                <NavLink
                  to="/jobs"
                  className ={blackTouch}
                  >Jobs</NavLink >
                <NavLink
                  to="/add-job"
                  className ={blackTouch}
                  >Add Job</NavLink >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
