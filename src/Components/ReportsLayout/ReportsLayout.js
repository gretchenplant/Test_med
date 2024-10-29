import React, { useState } from 'react';
import './ReportsLayout.css';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  // Sample data for appointments
  const [appointments, setAppointments] = useState([
    { id: 1, doctorName: 'Dr. Smith', specialty: 'Cardiology' },
    { id: 2, doctorName: 'Dr. Jones', specialty: 'Dermatology' },
    { id: 3, doctorName: 'Dr. Lee', specialty: 'Pediatrics' },
  ]);

  // Function to handle feedback button click
  const navigate = useNavigate();

  const handleFeedbackClick = () => {

    navigate('/feedback-form'); // Navigate to FeedbackForm component
  };

  return (
    <div>
      <h1>Appointment Feedback</h1>
      <table>
        <thead>
          <tr>
            <th>Appt #</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.specialty}</td>
              <td>
                <button className='btnColor' onClick={handleFeedbackClick} >
                  View Report
                </button>
              </td>
              <td><button className='btnColor' onClick={handleFeedbackClick} >
                  Download Report
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;