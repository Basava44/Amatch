import React from "react";
import { Home, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F0] relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#fb4033]/10 to-transparent" />

      {/* Main Content */}
      <div className="relative h-screen flex flex-col px-8 pt-[50%] max-w-md mx-auto">
        {/* Logo Circle */}
        <Link to="/">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        {/* 404 Content */}
        <div data-aos="fade-up" data-aos-duration="1000" className="text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle className="w-16 h-16 text-[#fb4033]/80" />
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light text-gray-800 mb-4">
              Page Not Found
            </h1>
            <p className="text-gray-500 text-sm">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>

          {/* Home Button */}
          <Link to="/">
            <button className="w-full group relative overflow-hidden py-2 px-4 rounded-lg text-white font-light text-sm transition-all duration-300 bg-[#fb4033] hover:bg-[#fb4033]/90">
              <div className="relative z-10 flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                <span>Return Home</span>
              </div>
            </button>
          </Link>
        </div>

        {/* Bottom Design Element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fb4033]/5 to-transparent" />
      </div>
    </div>
  );
};

export default PageNotFound;