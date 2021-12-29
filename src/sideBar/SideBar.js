import React from 'react';
import cross from '../assets/cross.png';
import moon from '../assets/moon.svg';

const SideBar = ({ handleClick }) => {
  return (
    <div className="flex justify-end h-screen">
      <div className="w-full bg-darkgray justify-between">
        <div className="px-6">
          <div className="flex justify-end pt-3">
            <div className="h-28 w-full flex items-center">
              <h1 className="text-2xl text-white">Anthony Torres</h1>
            </div>
            <button
              onClick={handleClick}
              className="border-white hover:border-green inline-flex items-center"
            >
              <div className="relative w-8 h-8">
                <img src={cross} alt="cross" />
              </div>
            </button>
          </div>
          <ul className="mt-5">
            <hr className="border-gray-200 dark:border-gray-600 mb-5 lg:mt-2"></hr>
            <li className="flex w-full justify-between text-white hover:text-green cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="text-sm ml-2">Blog</span>
              </div>
            </li>
            <hr className="border-gray-200 dark:border-gray-600 mb-5 lg:mt-2"></hr>
            <li className="flex w-full justify-between text-white hover:text-green cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="text-sm ml-2">Courses</span>
              </div>
            </li>
            <hr className="border-gray-200 dark:border-gray-600 mb-5 lg:mt-2"></hr>
            <li className="flex w-full justify-between text-white hover:text-green cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="text-sm ml-2">Podcasts</span>
              </div>
            </li>
            <hr className="border-gray-200 dark:border-gray-600 mb-5 lg:mt-2"></hr>
            <li className="flex w-full justify-between text-w>hite hover:text-green cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="text-sm ml-2">About</span>
              </div>
            </li>
            <hr className="border-gray-200 dark:border-gray-600 mb-5 lg:mt-2 mb-48"></hr>
          </ul>
          <div className="flex justify-center mb-14">
            <button className="inline-flex items-center justify-center px-6 py-2 border-2 border-white hover:border-green text-white hover:text-green rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              <div className="inline-flex justify-between w-8 mr-2">
                <img src={moon} alt="moon" className="flex-1" />
              </div>
              Switch to light mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
