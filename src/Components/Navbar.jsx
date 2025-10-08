import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.png';
import { FaGithub } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm  md:px-10 '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <NavLink to='/'  
              className={({ isActive }) =>
                isActive
                  ? "text-[#632EE3] font-semibold underline underline-offset-4"
                  : "hover:text-[#632EE3]"
              }>Home</NavLink>
            </li>
            <li>
              <NavLink to='/apps'  
              className={({ isActive }) =>
                isActive
                  ? "text-[#632EE3] font-semibold underline underline-offset-4"
                  : "hover:text-[#632EE3]"
              }>Apps</NavLink>
            </li>
            <li>
              <NavLink to='/installation'
               className={({ isActive }) =>
                isActive
                  ? "text-[#632EE3] font-semibold underline underline-offset-4"
                  : "hover:text-[#632EE3]"
              }>Installation</NavLink>
            </li>
          </ul>
        </div>
         <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" /> <h1 className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>HERO.IO</h1>
        </Link>
      </div>
      
      <div className='navbar-center '>
        <ul className='menu menu-horizontal px-1 hidden lg:flex'>
          <li>
            <NavLink to='/' 
            className={({ isActive }) =>
                isActive
                  ? "text-[#632EE3] font-semibold underline underline-offset-4"
                  : "hover:text-[#632EE3]"
              }>Home</NavLink>       
          </li>
          <li>
            <NavLink to='/apps' 
            className={({ isActive }) =>
                isActive
                  ? "text-[#632EE3] font-semibold underline underline-offset-4"
                  : "hover:text-[#632EE3]"
              }>Apps</NavLink>

          </li>
          <li>
            <NavLink to='/installation' 
            className={({ isActive }) =>
                isActive
                  ? "text-[#632EE3] font-semibold underline underline-offset-4"
                  : "hover:text-[#632EE3]"
              }>Installation</NavLink>
          </li>
        </ul>



      </div>
      <div className='navbar-end'>
       <a
  href="https://github.com/Mst-Sumi-Akter"
  target="_blank"
  rel="noopener noreferrer"
  className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90 transition-transform hover:scale-105 flex items-center gap-2"
>
  <FaGithub className="text-xl" />
  Contribute
</a>

      </div>
    </div>
  )
}

export default Navbar
