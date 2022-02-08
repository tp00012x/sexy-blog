import React from 'react';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/facebook.svg';
import google from '../assets/google.svg';
import twitter from '../assets/twitter.svg';
import gif from '../assets/Sexy blog.gif';

const Footer = () => {
  return (
    <>
      <hr className="border-gray-200 dark:border-gray-600 mb-5 lg:mt-2"></hr>
      <footer className="text-center">
        <div className="flex items-center justify-center py-10">
          <button href="#!" className="w-9 h-9 m-3">
            <img src={instagram} alt="moon" className="flex-1" />
          </button>
          <button href="#!" className="w-9 h-9 m-3">
            <img src={facebook} alt="moon" className="flex-1" />
          </button>
          <button href="#!" className="w-9 h-9 m-3">
            <img src={linkedin} alt="moon" className="flex-1" />
          </button>
          <button href="#!" className="w-9 h-9 m-3">
            <img src={github} alt="moon" className="flex-1" />
          </button>
          <button href="#!" className="w-9 h-9 m-3">
            <img src={google} alt="moon" className="flex-1" />
          </button>
          <button href="#!" className="w-9 h-9 m-3">
            <img src={twitter} alt="moon" className="flex-1" />
          </button>
        </div>

        <div className="grid grid-rows-3 grid-flow-col gap-4 mt-20">
          <div className="row-span-3">
            <div className="flex justify-around text-left">
              <div className="w-96 bg-darkgray rounded-lg p-10">
                <form>
                  <h1 className="text-center font-bold text-gray text-3xl">
                    Have Questions?
                  </h1>
                  <p className="mx-auto font-normal text-sm text-white my-6 max-w-lg">
                    Enter your select domain name and choose any extension name in the
                    next step (choose between .com, .online, .tech, .site, .net, and more)
                  </p>
                  <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                    <input
                      className="text-base text-gray-400 flex-grow outline-none px-2 "
                      type="text"
                      placeholder="Email"
                    />
                    <div className="ms:flex items-center px-2 rounded-lg">
                      <button className="bg-gray text-white text-base rounded-lg px-4 py-2 font-thin">
                        Ask!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex justify-around text-left">
              <div className="mb-6">
                <h5 className="uppercase text-white font-bold mb-2.5">Sitemap</h5>
                <ul className="list-none mb-0">
                  <li>
                    <a href="#!" className="text-gray hover:text-green">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray hover:text-green">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray hover:text-green">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h5 className="uppercase text-white font-bold mb-2.5">General</h5>
                <ul className="list-none mb-0">
                  <li>
                    <a href="#!" className="text-gray hover:text-green">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray hover:text-green">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray hover:text-green">
                      Terms of use
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row-span-2 col-span-2 justify-self-center">
            <div className="w-56">
              <img src={gif} alt="moon" />
            </div>
          </div>
        </div>
        <div className="text-gray">Anthony P Torres and Daria Usatyuk.</div>
      </footer>
    </>
  );
};

export default Footer;
