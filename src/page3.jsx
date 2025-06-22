import React from "react";

const ProjectPage5 = () => {
  return (
    <div className="font-[Poppins] w-full bg-white overflow-x-hidden">
      {/* Header */}
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

      {/* Hero Section */}
      <section className=" py-10 ">
        <h2 className="text-3xl font-semibold text-black leading-snug p-12">
          Explore Our Completed and <br /> Ongoing Works
        </h2>

        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Hero"
            className="w-full h-[500px] object-cover "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-16 mt-3">
          <p className="text-black-700 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex justify-center md:justify-end ">
            <div className="w-36  h-36 bg-[#FFEDC3]   rounded-full flex flex-col items-center justify-center border border-black shadow-2xs text-center">
              <span className="font-bold text-md text-black">See all</span>
              <span className="font-bold text-md text-black">About Us</span>
            </div>
          </div>
        </div>
      </section>


       <div className="w-full bg-white font-[Poppins] px-4 md:px-16 py-12">
      {/* Header */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <h3 className="text-center text-lg font-semibold border-b-2 border-yellow-600 pb-2">
          Completed Project
        </h3>
        <h3 className="text-center text-lg font-semibold border-b-2 border-gray-300 pb-2">
          Ongoing Project
        </h3>
      </div>

      {/* Project Rows */}
      <div className="space-y-10">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image left */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Project 1"
            className="w-full h-96 object-cover rounded"
          />
          {/* Text right */}
          <div className="text-gray-800 space-y-2">
            <h4 className="text-lg font-semibold">Lorem ipsum</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip e
            </p>
            <a href="#" className="text-yellow-600 font-medium text-sm underline">
              Read More
            </a>
          </div>
        </div>

        {/* Row 2 (Reversed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text left */}
          <div className="text-gray-800 space-y-2 order-2 md:order-1">
            <h4 className="text-lg font-semibold">Lorem ipsum</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip e
            </p>
            <a href="#" className="text-yellow-600 font-medium text-sm underline">
              Read More
            </a>
          </div>
          {/* Image right */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Project 2"
            className="w-full h-96 object-cover rounded order-1 md:order-2"
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image left */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Project 3"
            className="w-full h-96 object-cover rounded"
          />
          {/* Text right */}
          <div className="text-gray-800 space-y-2">
            <h4 className="text-lg font-semibold">Lorem ipsum</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip e
            </p>
            <a href="#" className="text-yellow-600 font-medium text-sm underline">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>

   <div className="bg-[#FAF7F0] w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-8 mt-20 shadow-lg rounded-md">
  {/* Text Content */}
  <div className="text-center md:text-left">
    <p className="text-xl text-gray-800 font-semibold mb-4">
      Let’s build your dream project together
    </p>
    <button className="mt-2 px-5 py-2 bg-gradient-to-r from-[#D6A35C] to-[#E6C086] text-white font-semibold rounded-md shadow-md hover:scale-105 transition-transform">
      Contact Us
    </button>
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      alt="Project"
      className="w-full h-64 object-cover rounded-md"
    />
  </div>
</div>


     <footer style={{ backgroundColor: '#103548' }} className='w-screen h-80 mt-24'>
          
    </footer>
    </div>
  );
};

export default ProjectPage5;
