import React, { useState } from 'react';

const ReviewForm = () => {
  // Sample data for appointments
  const [appointments, setAppointments] = useState([
    { id: 1, doctorName: 'Dr. Smith', specialty: 'Cardiology' },
    { id: 2, doctorName: 'Dr. Jones', specialty: 'Dermatology' },
    { id: 3, doctorName: 'Dr. Lee', specialty: 'Pediatrics' },
  ]);

  // Function to handle feedback button click
  const handleFeedbackClick = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, reviewGiven: 'Feedback Submitted' }
          : appointment
      )
    );
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
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.specialty}</td>
              <td>
                <button onClick={() => handleFeedbackClick(appointment.id)}>
                  Click Here
                </button>
              </td>
              <td>{appointment.reviewGiven || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;