import React from 'react';
import { AiFillHeart } from 'react-icons/ai'; // Import the heart icon

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '100%',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
};

const heartIconStyle = {
  color: '#e74c3c', // Red color for the heart icon, you can change this
  verticalAlign: 'middle',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        Made with <AiFillHeart style={heartIconStyle} /> by Team Zettabyte
      </div>
      <div>
        {/* <a style={linkStyle} href="https://policies.google.com/terms?hl=en-US">
          Privacy Policy
        </a> */}
        <a style={linkStyle} href="https://policies.google.com/privacy?hl=en-US">
          Terms of Service
        </a>
      </div>
      
    </footer>
  );
};

export default Footer;
