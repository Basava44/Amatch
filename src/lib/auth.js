import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "./firebase";

export const setupRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        console.log("Recaptcha resolved");
        console.log(response);
      },
    },
    auth
  );
};

export const sendOTP = async (phoneNumber) => {
  setupRecaptcha();
  const appVerifier = window.recaptchaVerifier;

  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    window.confirmationResult = confirmationResult;
    console.log("OTP sent");
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};

export const verifyOTP = async (otp) => {
  try {
    const result = await window.confirmationResult.confirm(otp);
    console.log("User signed in successfully:", result.user);
  } catch (error) {
    console.error("Error verifying OTP:", error);
  }
};
