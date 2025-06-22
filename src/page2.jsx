import React from 'react';
import './index.css';
import { Check, Shield, Clock, ThumbsUp } from "lucide-react"; // icons from lucide-react

const features = [
  { icon: <Check size={28} />, label: "Quality Materials" },
  { icon: <Shield size={28} />, label: "Quality Materials" },
  { icon: <Clock size={28} />, label: "Quality Materials" },
  { icon: <ThumbsUp size={28} />, label: "Quality Materials" },
];

const App = () => {
  return (
    <>

   <header className="w-full bg-[#103548] px-4 py-3 flex items-center justify-between flex-wrap md:flex-nowrap">
  {/* Logo on the left */}
  <div className="w-12 h-12 bg-gray-300 rounded-full shrink-0 mb-2 md:mb-0"></div>

  {/* Centered Navigation Menu */}
  <div className="flex-1 flex justify-center">
    <nav className="bg-[#5c6f7d] rounded-full px-3 py-2 flex flex-wrap justify-center gap-2 md:gap-4">
      <a
        href="#"
        className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-white hover:text-black transition duration-200"
      >
        Home
      </a>
      <a
        href="#"
        className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-white hover:text-black transition duration-200"
      >
        About Us
      </a>
      <a
        href="#"
        className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-800 transition duration-200"
      >
        Projects
      </a>
      <a
        href="#"
        className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-white hover:text-black transition duration-200"
      >
        Services
      </a>
      <a
        href="#"
        className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-white hover:text-black transition duration-200"
      >
        Contact Us
      </a>
    </nav>
  </div>
</header>


    <div className="min-h-screen font-Poppins pb-12 flex items-center justify-center bg-white px-4">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-3xl">
    <div style={{ backgroundColor: '#FFEDC3' }} className="w-full h-auto p-6 rounded-2xl overflow-hidden">
      <h2 className="text-3xl font-semibold pt-8 mb-4 text-black">Our Story</h2>
      <p className="text-gray-700 pt-8 font-medium text-sm leading-relaxed break-words text-wrap sm:pb-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <div className="flex flex-col items-center w-full">
      <img
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80"
        alt="Building"
        className="rounded-xl w-full h-auto max-h-96 object-cover mb-4"
      />
      <div style={{ backgroundColor: '#F1C986' }} className="text-center w-full p-4 rounded-xl">
        <h3 className="text-3xl font-bold text-gray-900">25+</h3>
        <p className="text-sm text-gray-800">Years of Experience</p>
      </div>
    </div>
  </div>
</div>

     <div className="flex flex-col md:flex-row justify-center items-center pb-4  md:gap-24 gap-6 p-6 ">
  <div style={{ backgroundColor: '#D6D9DD' }} className="rounded-lg shadow-md p-6 w-full md:w-1/2  max-w-md">
    <div className="bg-white ml-11 text-center font-semibold text-gray-800 py-2 px-4 rounded-md w-fit mx-auto mb-4">
      Our Mission
    </div>
    <p className="text-sm text-gray-700 font-medium text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>

  <div style={{ backgroundColor: '#D6D9DD' }} className="rounded-lg shadow-md p-6 w-full md:w-1/2  max-w-md">
    <div className="bg-white ml-10 text-center font-semibold text-gray-800 py-2 px-4 rounded-md w-fit mx-auto mb-4">
      Our Mission
    </div>
    <p className="text-sm text-gray-700 font-medium text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>

</div>

    <section className="py-12 px-4 mt-14 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="flex flex-wrap justify-center pt-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="bg-[#D6A853] text-white rounded-full w-20 h-20 flex items-center justify-center shadow-md">
              {feature.icon}
            </div>
            <p className="text-center font-semibold text-black">
              {feature.label}
            </p>
          </div>
        ))}
      </div>
    </section> 

    <footer style={{ backgroundColor: '#103548' }} className='w-screen h-80 mt-24'>

    </footer>
  </>
  );
};

export default App
