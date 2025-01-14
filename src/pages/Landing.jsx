import React from "react";
import { motion } from "framer-motion";
import landingImage from "../assets/images/landingpageImage.jpg";

const LandingPage = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${landingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="flex flex-col justify-between min-h-screen">
        <nav className="relative z-10 flex justify-between  px-6 py-8 ">
          <a href="#" className="text-2xl font-bold text-[#fb4033]">
            AMATCH
          </a>
          <a
            href="#"
            className="text-xl font-medium transition-colors hover:opacity-90 text-[#fb4033]"
          >
            Login
          </a>
        </nav>

        <main className="relative z-10 text-left px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
          >
            <h1 className="text-4xl md:text-6xl font-bold max-w-3xl text-[#FFF5F0]">
              Real Connections Start Here
            </h1>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
