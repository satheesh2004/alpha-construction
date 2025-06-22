import React from 'react';

const ProjectPage3 = () => {
  return (
    <div className="font-[Poppins] w-full min-h-screen bg-white text-gray-800">
      
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


      {/* Hero Image */}
      <div className="w-full h-[600px] md:h-[500px] ">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
          alt="Hero"
          className="w-full h-[620px] object-cover"
        />
      </div>

      {/* Project Details */}
      <section className="px-4 mt-48  md:px-20 y-10 ">
        <h2 className="text-3xl font-medium mb-6">Project Detail</h2>
        
        <div className="flex flex-col md:flex-row gap-24 mt-7 mb-6">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-2">Lorem ipsum</h3>
            <p className="mb-4 text-sm mt-12 pb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
          </div>
          <div className="md:w-1/2 mb-9">
            <img
              src="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1"
              alt="Building"
              className="w-full h-[400px] object-cover rounded"
            />
            <p className="text-sm mt-12">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>

        {/* Repeating Image Section */}
        {[1, 2,3].map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-24 mb-6">
            <div className="md:w-1/2 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-xl">Client</p>
                <p>Lorem ipsum</p>
              </div>
              <div>
                <p className="font-bold text-xl">Client</p>
                <p>Lorem ipsum</p>
              </div>
              <div>
                <p className="font-bold text-xl">Client</p>
                <p>Lorem ipsum</p>
              </div>
              <div>
                <p className="font-bold text-xl">Client</p>
                <p>Lorem ipsum</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156"
                alt={`Building ${index}`}
                className="w-full h-[400px] object-cover rounded"
              />
              <p className="text-sm mt-8">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        ))}
      </section>


       <footer style={{ backgroundColor: '#103548' }} className='w-screen h-80 mt-24'>

    </footer>
    </div>
  );
};

export default ProjectPage3;
