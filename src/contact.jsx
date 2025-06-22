
import React, { useState } from "react";



const ContactHero = () => {


    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("sendmail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", location: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };
  return (
    <div className="font-[Poppins] w-full min-h-screen  text-black">
      {/* Navigation Bar */}
      <header className="w-full px-6 bg-[#103548]  py-4 flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

        {/* Navigation Links */}
        <nav className="bg-[#1F3A4A] rounded-full px-4 py-1 flex gap-4 md:gap-6 text-sm md:text-base">
          {["Home", "About Us", "Projects", "Services", "Contact Us"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className={`px-4 py-2 rounded-full ${
                  item === "Contact Us"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white hover:text-black transition"
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            “Get in Touch with us”
          </h1>
          <p className="text-sm md:text-lg">
            We’re here to answer your question or start your project
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-gray-500 md:flex-row max-w-5xl mx-auto my-10 shadow-lg">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-white p-6 space-y-4 min-w-[300px]"
      >
        {["name", "email", "phone", "location", "message"].map((field, idx) => (
          <input
            key={idx}
            type={field === "message" ? "textarea" : "text"}
            name={field}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="w-full p-3 rounded border border-gray-300"
            value={formData[field]}
            onChange={handleChange}
            required={field !== "location"}
          />
        ))}

        <button
          type="submit"
          className="bg-gradient-to-r from-[#D6A35C] to-[#E6C086] text-white items-center p-3 font-bold py-2 rounded hover:scale-105 transition"
        >
          Send
        </button>
      </form>

      {/* Contact Info */}
      <div className="flex-1 bg-[#103548] text-white p-6 rounded-tr-3xl rounded-br-3xl space-y-6">
        <div>
          <p className="font-bold mb-1">Email Us</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p className="font-semibold">your-email@gmail.com</p>
        </div>
        <div>
          <p className="font-bold mb-1">Call Us</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p className="font-semibold">1234567890</p>
        </div>
        <div>
          <p className="font-bold mb-1">Visit Us</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p className="font-semibold">1234 Street, City</p>
        </div>
        <div className="pt-4 border-t border-white/20">
          <p className="mb-2">Follow Us On</p>
          <div className="flex gap-4 text-xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-x-twitter"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactHero;
