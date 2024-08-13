import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left mb-8 space-y-4 md:mb-0 p-20">
          <p className="text-2xl font-bold uppercase text-purple-600">Hi I am</p>
          <h1 className="md:text-3xl text-3xl  font-extrabold text-orange-500 mt-2">
            Muhammad Umair
          </h1>
          <h2 className="md:text-7xl text-4xl font-bold text-black mt-2">
            UI & UX 
          </h2>
          <h2 className="md:text-8xl text-5xl md:transform md:translate-x-28 font-bold text-black mt-2">
          Designer
          </h2>
          <p className="text-gray-600 text-2xl md:text-3xl mt-4">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          </p>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white font-semibold rounded shadow hover:bg-orange-600">
            Hire Me
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-8 md:mt-0 relative">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto relative overflow-hidden rounded-full">
            <Image
              src="https://img.freepik.com/free-photo/handsome-stylish-entrepreneur-pointing-laptop-display_176420-17906.jpg?size=626&ext=jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Profile Picture"
              className="transform scale-110 rounded-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-orange-500 opacity-20 rounded-full"></div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-8 space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-500 hover:text-black"><FaFacebookF size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-black"><FaLinkedinIn size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
