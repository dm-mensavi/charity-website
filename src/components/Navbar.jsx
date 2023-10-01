import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from 'react-icons/md';
import logo from '../public/logo.png';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="bg-white h-16 flex items-center justify-between p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10  px-8 sm:px-10 md:px-16 lg:px-32 xl:px-40">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-6 h-8 mr-2" />
        <p className="text-black font-semibold text-sm">Donaty</p>
      </div>
      <div className={`hidden sm:flex items-center ml-auto space-x-5 ${isCollapsed ? 'hidden' : 'flex'}`}>
        <ul className="flex items-center text-xs md:text-sm space-x-5">
          <li><a href="#" className="text-purple-500">Who we are
            <MdOutlineKeyboardArrowDown className='inline ml-1'/>
          </a></li>
          <li><a href="#" className="text-purple-500">Our Campaign</a></li>
          <li><a href="#" className="text-purple-500">News</a></li>
          <li><a href="#" className="text-purple-500">Contact Us</a></li>
          <li><button className="border border-purple-300 text-purple-500 text-xs font-bold py-2 px-3 md:py-3 md:px-4 lg:py-4 lg:px-5 rounded-md flex items-center">
            Donate Now
            <FaHeart size={16} className="ml-2" />
          </button></li>
        </ul>
      </div>
      <div className="sm:hidden flex items-center">
        <button className="text-2xl text-purple-500" onClick={toggleCollapse}>
          {isCollapsed ? <MdClose /> : <MdMenu />}
        </button>
      </div>
      {isCollapsed && (
        <div className="sm:hidden fixed inset-0 bg-white z-50 transition-opacity duration-300">
          <div className="flex justify-end p-4">
            <button className="text-2xl text-purple-500" onClick={toggleCollapse}>
              <MdClose />
            </button>
          </div>
          <ul className="flex flex-col items-center text-xl">
            <li><a href="#" className="text-purple-500 py-4">Who we are</a></li>
            <li><a href="#" className="text-purple-500 py-4">Our Campaign</a></li>
            <li><a href="#" className="text-purple-500 py-4">News</a></li>
            <li><a href="#" className="text-purple-500 py-4">Contact Us</a></li>
            <li><button className="border border-purple-300 text-purple-500 text-xs font-bold py-2 px-3 md:py-3 md:px-4 rounded-md flex items-center">
              Donate Now
              <FaHeart size={13} className="ml-2" />
            </button></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
