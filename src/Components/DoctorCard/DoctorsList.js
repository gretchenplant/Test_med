import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard'; // Adjust the path as necessary

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://api.npoint.io/9a5543d36f1460da2f63');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="doctor-list-container">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.name} // Assuming name is unique; use an ID if available
          name={doctor.name}
          speciality={doctor.speciality}
          experience={doctor.experience}
          ratings={doctor.ratings}
          profilePic={doctor.profilePic} // Include profilePic if available
        />
      ))}
    </div>
  );
};

export default DoctorsList;