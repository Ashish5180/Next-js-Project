"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-evenly items-center p-3">
        <Link href="/" className="text-orange-500 text-2xl font-bold">
          Mumair
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-700">
            About Me
          </Link>
          <Link href="/" className="text-gray-700">
            Services
          </Link>
          <Link href="/" className="text-gray-700">
            Projects
          </Link>
          <Link href="/" className="text-gray-700">
            Testimonials
          </Link>
          <Link href="/" className="text-gray-700">
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/" className="bg-orange-500 text-white px-4 py-2 rounded">
            Download CV
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-500 focus:outline-none"
          >
            {/* Icon for the mobile menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <Link href="/about" className="text-gray-700">
              About Me
            </Link>
            <Link href="/services" className="text-gray-700">
              Services
            </Link>
            <Link href="/projects" className="text-gray-700">
              Projects
            </Link>
            <Link href="/testimonials" className="text-gray-700">
              Testimonials
            </Link>
            <Link href="/contact" className="text-gray-700">
              Contact
            </Link>
            <Link href="/" className="bg-orange-500 text-white px-4 py-2 rounded">
              Download CV
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
