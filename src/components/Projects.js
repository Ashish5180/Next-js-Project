// components/ProjectsSection.js

import React from "react";

// Project details array
const projects = [
  {
    title: "AirCalling Landing Page Design",
    category: "Web Design",
    description: 'Lorem ipsum dolor sit amet consectetur. ',
    image: "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&ga=GA1.1.173478397.1707747696&semt=ais_hybrid",
  },
  {
    title: "Business Landing Page Design",
    category: "Web Design",
    description: 'Lorem ipsum dolor sit amet consectetur. ',
    image: "https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?size=626&ext=jpg&ga=GA1.1.173478397.1707747696&semt=ais_hybrid",
  },
  {
    title: "Ecom Web Page Design",
    category: "Web Design",
    description: 'Lorem ipsum dolor sit amet consectetur. ',
    image: "https://img.freepik.com/free-vector/content-management-system-concept-flat-design_23-2148818338.jpg?size=626&ext=jpg&ga=GA1.1.173478397.1707747696&semt=ais_hybrid",
  },
  
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black">My Projects</h2>
          <p className="mt-4 text-gray-600 text-xl max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
            mauris est risus lectus. Phasellus consequat urna tellus.
          </p>
        </div>

        <div className="flex justify-center mt-8 flex-wrap gap-4">
          <button className="px-4 py-2 bg-gray-200 text-black rounded">All</button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded">UI/UX</button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded">Web Design</button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded">App Design</button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded">Graphic Design</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-orange-500 mt-2">{project.category}</p>
                <p className="text-black mt-2 text-lg">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
