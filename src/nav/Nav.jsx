import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/amazon_logo.png';
import searchIcon from '../assets/search_icon.png';
import cartIcon from '../assets/cart.webp';
import flag from '../assets/ind.png';
import dropdown from '../assets/dropdown_icon.png';
import profileIcon from '../assets/pro.png';

function Nav() {
  const nav=useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Primary nav items (for desktop secondary menu)
  const navItems = [
    'Mx Player',
    'Sell',
    'Today Deals',
    'Mobiles',
    'Best Seller',
    'New Release',
    'Fashion',
    'Computer',
    'Electronics',
    'Amazon Pay',
    'Customer',
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Top Bar */}

      <div className="max-w-900 flex items-center justify-between px-4 py-2">
        {/* Logo + Search */}
        <div className="flex items-centert flex-1 me-5 ">
          <Link to="/">
            <img src={logo} alt="Amazon Logo" className="h-8 md:h-10 me-5" />
          </Link>

          <div className="hidden lg:flex flex-1  ms-4 items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="flex-1 px-3 py-1 focus:outline-none text-gray-800"
            />
            <button className="px-3">
              <img src={searchIcon} alt="Search" className="h-9 w-9" />
            </button>
          </div>
        </div>

      
        <div className="hidden md:flex items-center space-x-4 ">
          {/* Language Selector */}
          <div
            className="relative cursor-pointer flex items-center space-x-1 "
            onClick={() => setLangOpen(!langOpen)}
          >
            <span className="text-sm">EN</span>
            <img src={flag} alt="Flag" className="h-8 w-10" />
            <img src={dropdown} alt="Dropdown" className="h-2 w-2" />
            {langOpen && (
              <div className="absolute top-6 left-0 bg-white text-gray-800 rounded-md shadow-md py-2 w-28">
                {['Tamil','Marathi','Urdu','Hindi'].map((v,i) => (
                  <p key={i} className="px-3 py-1 hover:bg-gray-200">{v}</p>
                ))}
              </div>
            )}
          </div>

          <Link to="/login" className="text-sm no-underline hover:text-yellow-400 transition ms-5">
            Hello, Sign In
          </Link>
          <Link to="/orders" className="text-sm hover:text-yellow-400  transition">
            Returns & Orders
          </Link>
          <Link to="/login">
            <img src={profileIcon} alt="Profile" className="h-8 rounded-full" />
          </Link>
          <Link to="/cart" className="relative">
            <img src={cartIcon} alt="Cart" className="h-8" />
            <span className="absolute -top-1 -right-2 bg-yellow-500 text-black text-xs px-1 rounded-full">0</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
       <button
          className="md:hidden ml-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      <nav className="hidden md:block bg-gray-800">
        <ul className="max-w-800 mx-auto flex space-x-4 px-4 py-2 text-sm">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-yellow-400 cursor-pointer ps-4 pe-3">
              {item}
            </li>
          ))}
        </ul>
      </nav>

     
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-sm">
         
          <div className="px-4 py-2">
            <div className="flex items-center bg-white rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="flex-1 px-3 py-1 text-gray-800 focus:outline-none"
              />
              <button className="px-3">
                <img src={searchIcon} alt="Search" className="h-5 w-5" />
              </button>
            </div>
          </div> 
          {/* Links */}

          <ul className="px-4 space-y-2 pb-4">
            <li onClick={()=>setLangOpen(!langOpen)} className="flex items-center space-x-1 cursor-pointer">
              <span>EN</span>
              <img src={flag} alt="Flag" className="h-4 w-4" />
              {langOpen && (
                <div className="absolute bg-white text-gray-800 rounded-md shadow-md py-2 w-28 mt-1">
                  {['Tamil','Marathi','Urdu','Hindi'].map((l,i) => (
                    <p key={i} className="px-3 py-1 hover:bg-gray-200">{l}</p>
                  ))}
                </div>
              )}
            </li>

            <li><Link to="/login" className='underline hover:decoration-pink-500 '>Hello, Sign In</Link></li>
            <li><Link to="/orders" className='no-underline text-red-500 hover:underline'>Returns & Orders</Link></li>
            <li><Link to="/profile">Your Profile</Link></li>

            <hr className="border-gray-700 my-2"/>

            {navItems.map((item, idx) => (
              <li key={idx} className="hover:text-yellow">{item}</li>
            ))} 
          </ul>
        </div>
      )} 
    </header>
  );
}

export default Nav;
