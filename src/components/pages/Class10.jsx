import React from 'react';
import { Link } from 'react-router-dom';

const Class10 = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const introTextStyle = {
    textAlign: 'center',
    marginBottom: '60px',
    marginTop: '30px',
    fontSize: '50px', // Increased font size
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: 'transparent',
  };

  const rectDivStyle = {
    width: '400px',
    height: '200px',
    color: '#000',
    textAlign: 'center',
    lineHeight: '40px',
    margin: '10px',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '30px', // Increased font size
  };

  const sectionColors = {
    backgroundTest: '#f9e79f',
    aptitudeTest: '#a9dfbf',
    personalityTest: '#f5b041',
    interestTest: '#aed6f1',
  };

  return (
    <div style={containerStyle} className="class10-container">
      <div style={introTextStyle} className="intro-text">
        <p>
          Are you a class 10th student and confused about your career? You've found the perfect place to discover that!
        </p>
      </div>

      <div style={sectionStyle}>
        <Link to="http://127.0.0.1:8025/">
          <div
            style={{
              ...rectDivStyle,
              backgroundColor: sectionColors.backgroundTest,
            }}
            className="rect-div right"
          >
            Background Test
          </div>
        </Link>
        <div style={{ ...rectDivStyle }} className="rect-div left">
          Get your background checked
        </div>
      </div>

      <div style={sectionStyle}>
        <Link to="http://127.0.0.1:8022/">
          <div
            style={{
              ...rectDivStyle,
              backgroundColor: sectionColors.aptitudeTest,
            }}
            className="rect-div left"
          >
            Aptitude Test
          </div>
        </Link>
        <div style={{ ...rectDivStyle }} className="rect-div right">
          Aptitude Test: Test your aptitude
        </div>
      </div>

      <div style={sectionStyle}>
        <Link to="/personality-test">
          <div
            style={{
              ...rectDivStyle,
              backgroundColor: sectionColors.personalityTest,
            }}
            className="rect-div right"
          >
            Personality Test
          </div>
        </Link>
        <div style={{ ...rectDivStyle }} className="rect-div left">
          Personality Test: Discover your personality
        </div>
      </div>

      <div style={sectionStyle}>
        <Link to="/http://127.0.0.1:8021/">
          <div
            style={{
              ...rectDivStyle,
              backgroundColor: sectionColors.interestTest,
            }}
            className="rect-div left"
          >
            Interest Test
          </div>
        </Link>
        <div style={{ ...rectDivStyle }} className="rect-div right">
          Interest Test: Explore your interests
        </div>
      </div>
    </div>
  );
};

export default Class10;
