// Import necessary modules from React library
import React, { useEffect } from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route} from "react-router-dom";
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar.js';
// Import Instant Consultation component
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js';
// Import Landing Page
import Landing_Page from './Components/Landing_Page/Landing_Page';
// Import SIgn UP page
import Sign_Up from './Components/Sign_Up/Sign_Up';
// Import Login page
import Login from './Components/Login/Login';
// Import Find Doctor page
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
// Import Find DoctorIC page
import FindDoctorSearchIC from './Components/InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC';
// Import Find DoctorCard page
import DoctorCardIC from './Components/InstantConsultationBooking/DoctorCardIC/DoctorCardIC';
// Import Appointment FormIC page
import AppointmentformIC from './Components/InstantConsultationBooking/AppointmentFormIC/AppointmentFormIC';
// Import Find DoctorCard page
import DoctorCard from './Components/DoctorCard/DoctorCard';
//Import Doctor List
import DoctorList from './Components/DoctorCard/DoctorsList';
// Import Appointment Form page
import Appointmentform from './Components/AppointmentForm/AppointmentForm.js';
// Import Reviews page
import ReviewForm from './Components/ReviewForm/ReviewForm.js';
// Import Feedback Form page
import FeedbackForm from './Components/ReviewForm/FeedbackForm.js';
// Import Profile Update page
import ProfileCard from './Components/ProfileCard/ProfileCard.js'





// Function component for the main App
function App() {
  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Sign_Up" element={<Sign_Up/>}/>
            <Route path="/InstantConsultation" element={<InstantConsultation/>}/>
            <Route path="/FindDoctorSearch" element={<FindDoctorSearch/>}/>
            <Route path="/FindDoctorSearchIC" element={<FindDoctorSearchIC/>}/>
            <Route path="/DoctorCardIC" element={<DoctorCardIC/>}/>
            <Route path="/AppointmentFormIC" element={<AppointmentformIC/>}/>
            <Route path="/DoctorCard" element={<DoctorCard/>}/>
            <Route path="/search/doctors" element={<Appointmentform/>}/>
            <Route path="/reviews" element={<ReviewForm/>}/>
            <Route path="/feedback-form" element={<FeedbackForm/>}/>
            <Route path="/profile-update" element={<ProfileCard/>}/>
            
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}
// Export the App component as the default export
export default App;