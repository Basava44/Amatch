import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorScreen from "./pages/ErrorScreen.jsx";
import LandingPage from "./pages/Landing.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/404.jsx";
import Messages from "./pages/Messages.jsx";

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

  // return <div>{isSmallScreen ? <LandingPage /> : <ErrorScreen />}</div>;

  return isSmallScreen ? (
    <Router basename="/Amatch">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  ) : (
    <ErrorScreen />
  );
};

export default App;
