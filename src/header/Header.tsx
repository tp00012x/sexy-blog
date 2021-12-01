import React from 'react';
import { Link } from 'react-router-dom';
import moon from '../assets/moon.svg';
import hamburger from '../assets/img.png';

const Header = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 pt-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 justify-start md:space-x-10">
          <div className="justify-start">
            <h1 className="text-2xl lg:text-3xl text-white">Anthony Torres</h1>
          </div>
          <div className="justify-end md:hidden">
            <div className="md:block flex justify-end lg:flex space-x-10">
              <button className="border-white hover:border-green inline-flex items-center">
                <div className="relative w-8 h-8">
                  <img src={hamburger} alt="hamburger" />
                </div>
              </button>
            </div>
          </div>
          <div className="justify-center hidden md:block z-1">
            <nav className="flex justify-start hidden md:flex space-x-10 text-lg text-grey">
              <Link className="p-4 hover:text-green" to="/">
                Blog
              </Link>
              <Link className="p-4 hover:text-green" to="/">
                Courses
              </Link>
              <Link className="p-4 hover:text-green" to="/">
                Podcasts
              </Link>
              <Link className="p-4 hover:text-green" to="/">
                About
              </Link>
            </nav>
          </div>
          <div className="hidden md:block flex justify-end lg:flex space-x-10">
            <button className="border-white hover:border-green inline-flex items-center justify-center p-1 h-14 border-2 rounded-full transition w-14">
              <div className="relative w-8 h-8">
                <img src={moon} alt="nightMode" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
