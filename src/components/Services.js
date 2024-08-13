import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaPencilRuler } from 'react-icons/fa';


// Services Details Array
const services = [
  {
    title: 'UI/UX',
    category: "Web Design",
    description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
    icon: <FaLaptopCode size={50} className="text-orange-500" />,
  },
  {
    title: 'Web Design',
    category: "Web Design",
    description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
    icon: <FaPencilRuler size={50} className="text-orange-500" />,
  },
  {
    title: 'App Design',
    category: "Web Design",
    description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
    icon: <FaMobileAlt size={50} className="text-orange-500" />,
  },
  {
    title: 'Graphic Design',
    category: "Web Design",
    description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
    icon: <FaPaintBrush size={50} className="text-orange-500" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 text-black">Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
