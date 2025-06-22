import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  ];
  

  const testimonials = [
  {
    name: "Anjali Verma, Homeowner",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    quote:
      "From planning to execution, the entire process was seamless. The attention to detail and craftsmanship were exceptional. Highly recommended for any construction project!",
    stars: 5,
  },
  {
    name: "Vikram Sharma, Real Estate Developer",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    quote:
      "A reliable and skilled team that turned our dream home into reality. Their commitment to quality and safety standards was impressive. We couldn’t be happier!",
    stars: 5,
    featured: true,
  },
  {
    name: "Rahul Mehta, CEO of Mehta",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    quote:
      "Incredible experience! The team was professional, timely, and delivered beyond our expectations. Our new office building is stunning, and the quality of work is top-notch!",
    stars: 5,
  },
];

  return (
    <div className="font-[Poppins] text-gray-900 w-full bg-[#103548]">
      
      {/* Top Contact Bar */}
      <div className="bg-[#103548] text-white text-sm sm:text-base flex justify-between items-center px-4 py-2">
        <div className="flex flex-wrap  sm:gap-12  items-center w-full justify-center sm:justify-start text-xs sm:text-sm">
          <div className="flex items-center gap-12">
            <i className="fas fa-envelope " />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-whatsapp" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-phone-alt" />
            <span>+91 98765 12345</span>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Slanted Right Section */}
      <div
        className="absolute top-0 right-0 z-50 flex gap-6 items-center px-4 py-2 pl-[400px] text-sm sm:text-xl"
        style={{
          backgroundColor: "white",
          clipPath: "polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%)"
        }}
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram hover:text-[#E1306C] transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook hover:text-[#1877F2] transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter hover:text-[#1DA1F2] transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin hover:text-[#0077B5] transition" />
        </a>
      </div>

      {/* Swiper Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] xl:h-[800px] mt-3">
        
        {/* Header Navigation */}
        <header className="absolute top-0 left-0 w-full z-50 px-4 py-3 flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="w-12 h-12 bg-gray-300 rounded-full shrink-0 mb-2 md:mb-0"></div>

          <div className="flex-1 flex justify-center">
            <nav className="bg-[#5c6f7d] rounded-full px-3 py-2 flex flex-wrap justify-center gap-2 md:gap-4 text-xs sm:text-sm">
              <a href="#" className="px-4 py-2 rounded-full font-medium bg-white text-gray-800">
                Home
              </a>
              <a href="#" className="px-4 py-2 rounded-full font-medium text-gray-800 hover:bg-white hover:text-black transition">
                About Us
              </a>
              <a href="#" className="px-4 py-2 rounded-full font-medium text-gray-800 hover:bg-white hover:text-black transition">
                Projects
              </a>
              <a href="#" className="px-4 py-2 rounded-full font-medium text-gray-800 hover:bg-white hover:text-black transition">
                Services
              </a>
              <a href="#" className="px-4 py-2 rounded-full font-medium text-gray-800 hover:bg-white hover:text-black transition">
                Contact Us
              </a>
            </nav>
          </div>
        </header>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3">
                  Building Spaces, Creating Dreams
                </h1>
                <p className="text-xs sm:text-sm md:text-lg mb-6">
                  Delivering quality construction with trust & excellence.
                </p>
                <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-[#D6A35C] to-[#E6C086] text-white font-semibold rounded shadow-md hover:scale-105 transition-transform">
                  Get a Quote
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 w-full flex justify-center z-50">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      <section className="w-full bg-white py-12 px-6 pt-18 md:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-semibold mb-36 text-gray-900">Our Story</h2>
          
          <div className="w-[600px] h-[2px] bg-gray-400 mx-auto lg:mx-0 mb-6"></div>

          <p className="text-gray-700 text-base leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

          <button className="bg-gradient-to-r from-[#D6A35C] to-[#E6C086] text-white font-medium px-6 py-2 rounded shadow-md hover:scale-105 transition-transform">
            Read More
          </button>
        </div>

        {/* Divider with Icon */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="h-[300px] w-[1px] bg-gray-400"></div>
          <div className="my-3 text-[#D6A35C] text-lg">&#10061;</div>
          <div className="h-[300px] w-[1px] bg-gray-400"></div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src=    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Our Story"
            className="w-[300px] sm:w-[400px] md:w-[460px] h-[400px] border-2 border-blue-500 shadow-md"
          />
        </div>
      </div>
    </section>

    


     <section className="w-full bg-white py-16 px-4 text-center  mb-6">
      <h2 className="text-3xl font-semibold mb-32">What our client says</h2>
      <div className="flex flex-col lg:flex-row gap-14 justify-center items-center">

        {testimonials.map((testimonial, index) => {
  const isMiddle = index === Math.floor(testimonials.length / 2);

  return (
    <div
      key={index}
      className={`relative bg-white px-6 pt-16 pb-8 w-full max-w-md rounded shadow-lg border transition-all duration-300 
        ${isMiddle ? " mb-40 scale-105 bg-white" : "border-transparent"}
      `}
    >
      {/* Avatar */}
      <div className={`absolute top-[-60px] left-1/2 transform -translate-x-1/2 
        ${isMiddle ? "w-32 h-32" : "w-28 h-28"}`}>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="object-cover rounded-full border-4 border-white shadow-md w-full h-full"
        />
      </div>

      {/* Stars */}
      <div className="flex justify-center mb-4 pt-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-800 font-medium mb-4 text-sm">
        "{testimonial.quote}"
      </p>

      {/* Name */}
      <p className="font-semibold text-black text-sm">— {testimonial.name}</p>
    </div>
  );
})}

      </div>
    </section>

    <footer style={{ backgroundColor: '#103548' }} className='w-screen h-80 mt-0  '>
               <div className="relative w-full flex items-end justify-center p-4">
    
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

    </div>
  );
};

export default HomePage;
