import React from 'react';
import activity from '../public/activitiesIcon.png'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

function Hero() {
  return (
    <div className="hero-bg flex bg-cover h-100  py-7 px-16">
      <div className="flex-1 flex flex-col justify-left text-left">
        <p className="text-xs text-purple-500 mb-2 pt-7">TRUSTED CHARITY COMPANY</p>
        <h1 className="font-bold text-2xl leading-smug mb-2">
          <span className="text-black">Let's Help And Make</span><br />
          <span className="text-black">People Smile By <span className='text-purple-500'>Giving</span></span><br />
          <span className="text-black">Of Yours</span>
        </h1>
        <p className="text-gray-400 leading-4 text-xs tracking-tight mb-4">
          No matter how small the donation you give, It will mean a lot to them,
          let's donate now to help fellow humans in need
        </p>
        <div className='flex flex-row space-x-14'>
          <button className="bg-[#1ad0d1] rounded-md py-3 mt-2 inline w-28 text-white text-xs mb-2">
            Get Started
          </button>
          <a href="#" className="inline w-14">
            <img src={ activity } width={100} alt="Link" />
          </a>

        </div>
      </div>
      <div className="flex-1 bg-transparen ml-5 w-1/2">
        <div className="flex herocol-bg bg-contain bg-no-repeat flex-grow flex-col ">
          <div className=' px-10 mr-6 pt-7 justify-start text-left'>
            <button className="bg-[#1ad0d1] rounded-md py-2 mt-1 inline w-20 text-white text-xs mb-2">
              Education
            </button>
            <h2 className=" text-md text-left leading-5 font-medium mb-2 mt-1">
              Help Children Get out of Poverty & have a Future
            </h2>
            <p className="text-gray-400 leading-4 font-light text-xs tracking-tight mb-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </p>
            <div className='bg-gray-100 rounded-sm h-14 w-full mb-4 px-3'>
              <div className="relative bg-grey-300 mb-1 pt-5">
                <div className="text-[#1ad0d1] text-xs font-light absolute bottom-1 left-16">
                  29%
                </div>
                <div className="absolute bg-white h-1 rounded-lg w-full mt-0"></div>
                <div className=" relative bg-[#1ad0d1] h-1 rounded-lg w-20 mt-0"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mb-2 ">
                <div>$5,480 <span className='text-gray-300'>Raised</span></div>
                <div>$20,000 <span className='text-gray-300'>Goal</span></div>
              </div>
            </div>
            <div className="flex space-x-4 justify-between mb-14 px-2 w-full">
              <button className="border border-gray-400 rounded-md py-1 px-9 text-sm font-medium flex items-center">
              <FaApple fill='black' size={10} className='mr-2'/>
                Pay 
              </button>
              <button className="border border-gray-400 rounded-md py-1 px-9 text-sm font-medium flex items-center">
              <FcGoogle size={10} className='mr-2'/>
                Pay 
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
