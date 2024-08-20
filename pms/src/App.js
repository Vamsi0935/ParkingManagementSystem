import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParkingLotManager from "./Components/ParkingLotManager";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParkingLotManager />} />
      </Routes>
    </Router>
  );
};

export default App;
