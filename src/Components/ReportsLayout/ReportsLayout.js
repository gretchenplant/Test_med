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
  const DownloadPDF = () => {
    
      const link = document.createElement('a');
      link.href = './patient_report.pdf'; // Adjust the path to your PDF file
      link.setAttribute('download', 'patient_report.pdf'); // The name the file will have when downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
};

  return (
    <div>
      <h1>Patient Reports</h1>
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
                <button className='btnColor' onClick={DownloadPDF} >
                  View Report
                </button>
              </td>
              <td><div>
      
      <button className='btnColor' onClick={DownloadPDF}>Download PDF</button>
    </div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
