import React from 'react';
import { FaPhoneAlt, FaHeart } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import logo from '../public/logo.png';

function Navbar() {
  return (
    <div className="bg-white h-10 flex items-center justify-between p-1 py-7 px-16">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-6 h-8 mr-2" />
        <p className="text-black font-semibold text-sm">Donaty</p>
      </div>
      <div className="flex items-center ml-auto">
        <ul className="flex items-center text-xs space-x-5">
          <li><a href="#" className="text-purple-500">Who we are
          <MdOutlineKeyboardArrowDown className='inline ml-1'/>
          </a></li>
          <li><a href="#" className="text-purple-500">Our Campaign</a></li>
          <li><a href="#" className="text-purple-500">News</a></li>
          <li><a href="#" className="text-purple-500">Contact Us</a></li>
        </ul>
        <button className="border border-purple-300 text-purple-500 text-xs font-bold py-2 px-3 ml-7 rounded-md flex items-center">
          Donate Now
          <FaHeart size={10} className="ml-2" />
        </button>

      </div>
    </div>
  );
}

export default Navbar;
