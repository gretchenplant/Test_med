// Import necessary modules from React library
import React, { useEffect } from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar.js';
// Import Landing Page
import Landing_page from './Components/Landing_Page/Landing_Page';
// Import SIgn UP page
import Sign_Up from './Components/Sign_Up/Sign_Up';
// Import Login page
import Login from './Components/Login/Login';
// Function component for the main App
function App() {
  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          <Landing_page/>
          <Sign_Up/>
          <Login/>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}
// Export the App component as the default export
export default App;