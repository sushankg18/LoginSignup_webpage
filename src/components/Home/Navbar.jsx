import React from 'react'
import logo from './Shopinger-logos-removebg-preview.png'
import "../Home/Navbar.css"
import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="logo">
        <Link to={'/home'}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className='search-bar'>
        <input type="text" placeholder='Search for items...' />
        <IoMdSearch className='icon' />
      </div>


      <div className='nav-right'>
        <div className='cart-div'>
          <p>Cart</p>
          <HiOutlineShoppingCart className='cart-icon' />
        </div>
        <button className='Logout-btn'>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
