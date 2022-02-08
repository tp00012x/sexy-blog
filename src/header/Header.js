import React from 'react';
import { Link } from 'react-router-dom';
import moon from '../assets/icons8-moon-64.png';
import hamburger from '../assets/hamburger.png';

const Header = ({ handleClick }) => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 pt-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 justify-start md:space-x-10">
          <div className="justify-start">
            <h1 className="text-2xl lg:text-3xl text-white">Anthony Torres</h1>
          </div>
          <div className="justify-end md:hidden">
            <div className="md:block flex justify-end lg:flex space-x-10">
              <button
                onClick={handleClick}
                className="border-white hover:border-green inline-flex items-center"
              >
                <div className="relative w-8 h-8">
                  <img src={hamburger} alt="hamburger" />
                </div>
              </button>
            </div>
          </div>
          <div className="justify-center hidden md:block z-1">
            <nav className="flex justify-start hidden md:flex space-x-10 text-lg text-gray">
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

    // <div className="grid gird-cols-2 gap-4">
    //   <div>
    //     <form action="">
    //       <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
    //         <div className="md:ml-auto md:mb-6">
    //           <p className="">
    //             <strong>Sign up for our newsletter</strong>
    //           </p>
    //         </div>
    //
    //         <div className="md:mb-6">
    //           <input
    //             type="text"
    //             className="
    //               form-control
    //               block
    //               w-full
    //               px-3
    //               py-1.5
    //               text-base
    //               bg-white
    //               transition
    //               ease-in-out
    //               m-0
    //               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    //             "
    //             id="exampleFormControlInput1"
    //             placeholder="Email address"
    //           />
    //         </div>
    //
    //         <div className="md:mr-auto mb-6">
    //           <button
    //             type="submit"
    //             className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    //           >
    //             Subscribe
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //
    //   <div>
    //     <div className="mb-6">
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
    //         distinctio earum repellat quaerat voluptatibus placeat nam, commodi
    //         optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi
    //         voluptate quas.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="grid lg:grid-cols-2 md:grid-cols-2">
    //     <div className="mb-6">
    //       <h5 className="uppercase font-bold mb-2.5">Links</h5>
    //       <ul className="list-none mb-0">
    //         <li>
    //           <a href="#!" className="text-white hover:text-green">
    //             Link 1
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#!" className="text-white hover:text-green">
    //             Link 2
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#!" className="text-white hover:text-green">
    //             Link 3
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#!" className="text-white hover:text-green">
    //             Link 4
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="mb-6">
    //       <h5 className="uppercase font-bold mb-2.5">Links</h5>
    //       <ul className="list-none mb-0">
    //         <li>
    //           <a href="#!" className="text-white hover:text-green">
    //             Link 1
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#!" className="text-white hover:text-green">
    //             Link 2
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#!" className="text-white hover:text-green">
    //             Link 3
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#!" className="text-white hover:text-green">
    //             Link 4
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
