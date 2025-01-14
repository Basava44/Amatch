import React, { useState, useEffect } from "react";
import ErrorScreen from "./pages/ErrorScreen.jsx";
import LandingPage from "./pages/Landing.jsx";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 435);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 435);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // return <div>{isSmallScreen ? <Text> "Welcome to AMATCH"</Text> : <ErrorScreen />}</div>;
  return <div>{isSmallScreen ? <LandingPage /> : <ErrorScreen />}</div>;
};

export default App;
