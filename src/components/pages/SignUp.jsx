import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    const { email, phoneNumber, password, confirmPassword } = formData;

    if (!email || !phoneNumber || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      // Store user data in local storage (for a simplified example)
      localStorage.setItem('user', JSON.stringify(formData));
      setSuccessMessage('Signup successful!');

      // Clear form data
      setFormData({
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f7f7f7',
    marginTop: '20px',
  };

  const inputStyle = {
    width: '100%', 
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  };

  const errorMessageStyle = {
    color: 'red',
    margin: '10px 0',
  };

  const successMessageStyle = {
    color: 'green',
    margin: '10px 0',
  };

  return (
    <div style={containerStyle} className="signup-container">
      <h2>Sign Up</h2>
      <div style={inputStyle} className="input-container">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div style={inputStyle} className="input-container">
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div style={inputStyle} className="input-container">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div style={inputStyle} className="input-container">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSignup} style={buttonStyle}>
        Sign Up
      </button>
      <p style={errorMessageStyle} className="error-message">
        {errorMessage}
      </p>
      <p style={successMessageStyle} className="success-message">
        {successMessage}
      </p>
      {/* Use Link to navigate to the Login page */}
      <p style={{ fontSize: '14px' }}>
        Already signed up? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
