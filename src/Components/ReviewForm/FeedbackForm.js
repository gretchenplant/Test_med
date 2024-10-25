import React, { useState } from 'react';
import "./FeedbackForm.css";
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';


// Function component for giving reviews
function GiveReviews() {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate('/reviews'); // Navigate to FeedbackForm component
  };

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };
  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData({
      name: '',
      review: '',
      rating: 0
    });
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };
  return (
    <div className='formbox'>
      
      {!showForm ? (
        // Display button to open the form
        <button className='btnColor' onClick={handleButtonClick}>Open Form</button>
      ) : (
        // Display form for giving feedback
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" placeholder="Enter your feedback here" value={formData.review} onChange={handleChange} />
          </div>
          <div>
      <h2>Rate Your Experience</h2>
      <StarRating />
    </div>
          <button onClick={handleSubmitClick} className='btnColor' type="submit">Submit</button>
        </form>
      )}
      
      
      
    </div>
  );
}
export default GiveReviews;