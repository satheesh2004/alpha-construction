import React from 'react';

const Projectpage4 = () => {
  return (
    <>

     <header className="w-full bg-[#103548] px-4 py-3 flex items-end justify-between flex-wrap md:flex-nowrap">
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
     
    <div className="w-full px-4 sm:px-6 md:px-20 py-10 font-[Poppins] bg-white text-gray-800">
  {/* Title and Image Section */}
  <div className="flex flex-col md:flex-row items-center mt-10 justify-between gap-6 mb-32">
    {/* Text */}
    <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
      <h2 className="text-3xl md:text-3xl font-semibold mb-6">
        What we <span className="font-light">Offer</span>
      </h2>
      <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
    </div>

    {/* Image */}
    <div className="w-full md:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Offer"
        className="w-full max-w-full h-auto max-h-[450px] object-cover rounded"
      />
    </div>
  </div>
</div>


      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-18 p-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="bg-white rounded overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
            <img
             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Residential"
              className="w-full h-60 object-cover"
            />
            <div className="p-8">
              <h3 className="font-semibold text-lg mb-2">Residential Construction</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e
              </p>
            </div>
          </div>
        ))}
      </div>
    

    <footer style={{ backgroundColor: '#103548' }} className='w-screen h-80 mt-32  '>
               <div className="relative w-full  bg-[#0B2C3D] flex items-end justify-center p-4">
    
      <div className="absolute -top-20 w-[90%] max-w-[600px] bg-[#FAF7F2] border-2 rounded-lg shadow-xl p-6 text-center z-10">
        <p className="text-lg font-medium text-gray-800">
          Don’t wait for your dreams! <br />
          Make them with us now!
        </p>
        <button className="mt-4 px-5 py-2 bg-gradient-to-r from-[#D6A35C] to-[#E6C086] text-white font-semibold rounded-md shadow-md hover:scale-105 transition-transform">
          Contact Us
        </button>
      </div>
    </div>
    </footer>
    </>
  );
};

export default Projectpage4;
