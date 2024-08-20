import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParkingLotManager from "./Components/Parking/ParkingLotManager";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Navbar/Navbar";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parking-slots" element={<ParkingLotManager />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
