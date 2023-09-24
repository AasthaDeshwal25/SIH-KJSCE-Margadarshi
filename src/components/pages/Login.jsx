import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { email, password } = formData;

    // Replace this with your actual login logic
    // For simplicity, we'll simulate a successful login
    if (email === 'user@example.com' && password === 'password') {
      // Clear previous error messages
      setErrorMessage('');

      // Redirect to a dashboard page on successful login
      navigate('/dashboard'); // Replace '/dashboard' with your desired route
    } else {
      // Display an error message for demonstration
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div
      style={{
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
      }}
    >
      <h2 style={{ color: '#3498db', marginBottom: '20px' }}>Login</h2>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '20px',
        }}
      >
        Login
      </button>
      <p style={{ color: 'red', margin: '10px 0' }}>{errorMessage}</p>
      <p style={{ fontSize: '14px' }}>
        Doesn't have an account? <Link to="/signup" style={{ color: '#3498db' }}>SignUp</Link>
      </p>
    </div>
  );
};

export default Login;
