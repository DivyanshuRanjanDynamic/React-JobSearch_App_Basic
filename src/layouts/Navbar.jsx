import React from 'react'
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
 import { ToastContainer, toast } from 'react-toastify';


const Nav= () => {
  return (
    <>
    <Navbar/>
     <Outlet/>
     <ToastContainer position='top-center'/>
     </>
    
    
  );
};

export default Nav;
