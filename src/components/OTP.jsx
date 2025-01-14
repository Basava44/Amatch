import React, { useState, useRef, useEffect } from "react";
import { Timer, ArrowRight, ArrowLeft } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const OTPVerification = ({ phoneNumber = "9876543210", onBack, onVerify }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  useEffect(() => {
    const countdown =
      timer > 0 &&
      setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) setCanResend(true);
          return prev - 1;
        });
      }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleChange = (value, index) => {
    const newValue = value.replace(/\D/g, "");
    if (newValue.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = newValue;
      setOtp(newOtp);

      // Move to next input if value entered
      if (newValue.length === 1 && index < 5) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleResend = () => {
    if (canResend) {
      setOtp(["", "", "", ""]);
      setTimer(30);
      setCanResend(false);
      // Add resend OTP logic here
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen bg-[#FFF5F0] relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#fb4033]/10 to-transparent" />

      {/* Main Content */}
      <div className="relative h-screen flex flex-col justify-center px-8 max-w-md mx-auto">
        {/* Logo Circle */}
        <Link to="/">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="" />
          </div>
        </Link>

        {/* OTP Container */}
        <div data-aos="fade-up" data-aos-duration="1000">
          {/* Back Button */}
          {/* <button
            onClick={onBack}
            className="flex items-center text-gray-500 mb-8 hover:text-[#fb4033] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span className="text-sm">Back</span>
          </button> */}

          <div className="text-center mb-12">
            <h1 className="text-3xl font-light text-gray-800">
              Verify Your Number
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Enter the code sent to +91 {phoneNumber}
            </p>
          </div>

          {/* OTP Input */}
          <div className="mb-8">
            <div className="flex justify-center space-x-1">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="number"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-14 h-14 text-center text-2xl border-0 border-b-2 border-gray-200 focus:border-[#fb4033] focus:ring-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Timer and Resend */}
          {/* <div className="text-center mb-8">
            {timer > 0 ? (
              <div className="flex items-center justify-center text-gray-500">
                <Timer className="w-4 h-4 mr-2" />
                <span>Resend code in {timer}s</span>
              </div>
            ) : (
              <button
                onClick={handleResend}
                className="text-[#fb4033] hover:underline transition-all"
              >
                Resend Code
              </button>
            )}
          </div> */}

          {/* Verify Button */}
          <button
            onClick={() => isComplete && onVerify(otp.join(""))}
            disabled={!isComplete}
            className={`w-full group relative overflow-hidden py-2 px-4 rounded-lg text-white font-light text-sm transition-all duration-300 ${
              isComplete
                ? "bg-[#fb4033] hover:bg-[#fb4033]/90"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <div className="relative z-10 flex items-center justify-center">
              <span>Verify</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>
        </div>

        {/* Bottom Design Element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fb4033]/5 to-transparent" />
      </div>
    </div>
  );
};

export default OTPVerification;
