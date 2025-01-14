import React from "react";
import errorImage from "../assets/images/embarrassed.png";

const ErrorScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FFF5F0] text-[#fb4033]">
      <img
        src={errorImage}
        alt="Oops!"
        className="max-w-xs max-h-32 object-contain -ml-8 mb-2"
      />
      <p className="text-xl text-center mb-6">
        Oops! Please open in a smaller devices.
      </p>
    </div>
  );
};

export default ErrorScreen;
