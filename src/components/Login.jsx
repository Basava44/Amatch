import React, { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const MobileLogin = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
    setIsValid(value.length === 10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("Submitting phone number:", phoneNumber);
      onSubmit(phoneNumber)
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5F0] relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#fb4033]/10 to-transparent" />

      {/* Main Content */}
      <div className="relative h-screen flex flex-col px-8 pt-[50%] max-w-md mx-auto">
        {/* Logo Circle */}
        <Link to="/">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="" />
          </div>
        </Link>

        {/* Login Container */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light text-gray-800">
              Meet Your Match
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Login with your phone number
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Phone Input */}
            <div
              className={`relative transition-all duration-300 ${
                isFocused ? "transform -translate-y-2" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Phone
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isFocused ? "text-[#fb4033]" : "text-gray-400"
                  }`}
                />
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter phone number"
                className="block w-full pl-12 pr-4 py-2 text-lg bg-white border-0 border-b-2 transition-all duration-300 rounded-lg"
                maxLength="10"
                pattern="[0-9]*"
                inputMode="numeric"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full group relative overflow-hidden py-2 px-4 rounded-lg text-white font-light text-sm transition-all duration-300 ${
                isValid
                  ? "bg-[#fb4033] hover:bg-[#fb4033]/90"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              <div className="relative z-10 flex items-center justify-center">
                <span>Continue</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </form>

          {/* Terms */}
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              By continuing, you agree to our Terms of Service
              <br />
              and acknowledge our Privacy Policy
            </p>
          </div>
        </div>

        {/* Bottom Design Element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fb4033]/5 to-transparent" />
      </div>
    </div>
  );
};

export default MobileLogin;
