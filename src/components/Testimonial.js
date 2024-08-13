// components/TestimonialsSection.js

import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center">
        <h2 className="text-5xl sm:text-4xl font-bold text-black">Testimonials</h2>
        <p className="mt-4 text-gray-600 text-xl sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium.
        </p>
      </div>

      <div className="flex justify-center mt-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row  items-center space-y-6 sm:space-y-0 sm:space-x-4">
            <img
              src="https://img.freepik.com/free-photo/thoughtful-young-handsome-caucasian-man-wearing-glasses-standing-with-closed-posture-looking-side-biting-lip-isolated-crimson-background-with-copy-space_141793-77586.jpg?size=626&ext=jpg&ga=GA1.1.173478397.1707747696&semt=ais_hybrid"
              alt="Person"
              className="w-36 h-36 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <p className="text-gray-800 text-sm sm:text-base">
                <span className="text-orange-500 text-3xl sm:text-4xl leading-none">&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.
                Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                <span className="text-orange-500 text-3xl sm:text-4xl leading-none">&rdquo;</span>
              </p>
              <p className="text-lg font-semibold mt-4">Name</p>
              <p className="text-gray-500">CEO</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <span className="h-2 w-8 bg-orange-500 rounded-full"></span>
            <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
            <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
            <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
