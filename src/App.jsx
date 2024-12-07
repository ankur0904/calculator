import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./component/Calculator";
import Homepage from "./component/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for Percentage Calculator */}
        <Route
          path="/percentage-calculator"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <Calculator />
            </div>
          }
        />
        <Route
          path="/"
          element={<div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Homepage />
          </div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
