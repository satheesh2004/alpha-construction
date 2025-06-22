import React from "react";

const ProjectPage6 = () => {
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



         <section className=" py-10 ">
        <h2 className="text-3xl font-semibold text-black leading-snug p-12">
          Explore Our Completed and <br /> Ongoing Works
        </h2>

        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Hero"
            className="w-full h-[550px] object-cover "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-16 mt-3">
          <p className="text-black-700 text-xl leading-relaxed">
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


      <div className="font-[Poppins] w-full bg-white text-gray-800 mb-11 px-4 md:px-20 py-10">
      {/* Section Tabs */}
         <div className="grid grid-cols-2 gap-4 mb-24">
        <h3 className="text-center text-lg font-semibold border-b-2 border-yellow-600 pb-2">
          Completed Project
        </h3>
        <h3 className="text-center text-lg font-semibold border-b-2 border-gray-300 pb-2">
          Ongoing Project
        </h3>
      </div>

      {/* Image + Description */}
      <div className="max-w-7xl mx-auto mb-16">
        <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
           alt="Project"
          className="w-full h-72 md:h-100 object-cover rounded mb-6"
        />

        <h4 className="text-xl font-bold mt-24 mb-12">Lorem ipsum</h4>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip e
        </p>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 mt-24 mb-16">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="text-xl">
                <p className="font-bold mb-5">Client</p>
                <p className="text-gray-600">Lorem ipsum</p>
              </div>
            ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full mt-24 bg-[#FAF7F0] rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-6 max-w-5xl mx-auto">
        <div className="text-center md:text-left flex-1">
          <p className="text-xl font-semibold mb-4">
            Let’s build your dream project together
          </p>
          <button className="px-5 py-2 bg-gradient-to-r from-[#D6A35C] to-[#E6C086] text-white font-semibold rounded shadow-md hover:scale-105 transition-transform">
            Contact Us
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <img
       src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
             alt="Building"
            className="w-full h-56 md:h-64 object-cover rounded"
          />
        </div>
      </div>
    </div>

     <footer style={{ backgroundColor: '#103548' }} className='w-screen h-80 mt-24'>

    </footer>

     </>   
  );
};

export default ProjectPage6;
