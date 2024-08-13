import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 bottom-0 mb-0 ">
      <div className="container mx-auto text-center bottom-0 flex flex-col min-h-full">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
             
            <span className="font-bold text-xl text-gray-800">Mumair</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-gray-700">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">About Me</a></li>
            <li><a href="#" className="hover:text-black">Services</a></li>
            <li><a href="#" className="hover:text-black">Projects</a></li>
            <li><a href="#" className="hover:text-black">Testimonials</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-gray-700 mb-6">
          <a href="#" className="hover:text-black"><FaFacebookF /></a>
          <a href="#" className="hover:text-black"><FaTwitter /></a>
          <a href="#" className="hover:text-black"><FaInstagram /></a>
          <a href="#" className="hover:text-black"><FaLinkedinIn /></a>
        </div>

        {/* Copyright */}
        <div className="bg-gray-800 text-white p-6 mt-auto w-full">
          <p className="text-center">
            &copy; 2023 <span className="text-orange-500 font-semibold">Mumair</span>. All Rights Reserved, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
