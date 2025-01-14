import React, { useState } from "react";
import MobileLogin from "../components/Login";
import OTPVerification from "../components/OTP";

const Login = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return !showOTP ? (
    <MobileLogin
      onSubmit={(phone) => {
        setPhoneNumber(phone);
        setShowOTP(true);
      }}
    />
  ) : (
    <OTPVerification
      phoneNumber={phoneNumber}
      onBack={() => setShowOTP(false)}
      onVerify={(otp) => {
        // Handle OTP verification
        console.log("Verifying OTP:", otp);
      }}
    />
  );
};

export default Login;
