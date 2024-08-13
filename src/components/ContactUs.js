import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Lets Design Together
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
          netus in. Aliquet donec morbi convallis pretium.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="px-4 py-3 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        />
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Contact;
