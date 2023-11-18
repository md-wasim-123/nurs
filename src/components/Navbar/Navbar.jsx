import React, { useState } from 'react'
import logo from '../images/logo1.png'
import './Navbar.css';

import { Link } from "react-router-dom";
const Navbar = () => {
  const [Open, setOpen] = useState(false)
  const link = [
    { name: 'HOME', linkTo: "/" },
    { name: 'ABOUT US', linkTo: "/" },
    { name: 'CONSULTANTS', linkTo: "/" },
    { name: 'DEPARTMENTS', linkTo: "/" },
    { name: 'FACILITIES', linkTo: "/" },
    { name: 'CASHLESS INSURANCE', linkTo: "/" },
    { name: 'GALLERY', linkTo: "/" },
    { name: 'CONTACTS', linkTo: "/" },
  ]
  return (
    <nav className={` md:flex md:items-center md:justify-around ${Open ? "fixed z-10" :"md:static z-0"}  h-0 md:h-full md:flex-row md:px-4  md:p-2 bg-white  w-full `}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div onClick={() => setOpen(!Open)} className='md:hidden absolute right-3 top-5 text-3xl transition-all duration-200 ease-in-out'>
        <i className={`fa-solid ${Open ? "fa-xmark" : "fa-bars"}`}></i>
      </div>

      <ul className={`${Open ? "top-20 opacity-100 " : "top-[-300px] opacity-0 md:opacity-100 "} bg-white flex flex-col md:flex-row  z-30 transition-all duration-500 ease-in-out px-5 p-10 md:p-0 md:px-0`}>
        {
          link.map((item) => (
            <li className='p-2 md:p-0' key={item.name}>
              <Link className='fontpoppins  md:py-0  md:mx-2 text-[13px] font-[600] opacity-95' to={item.linkTo}>{item.name}</Link>
            </li>
          ))
        }

        <button className='bg-button md:w-[12vw]'>
          Download Brochure
        </button>
      </ul>

    </nav>
  )
}

export default Navbar
