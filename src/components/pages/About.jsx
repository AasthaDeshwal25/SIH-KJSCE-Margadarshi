import React from "react";

const AboutPage = () => {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const contentStyle = {
    backgroundColor:
      "rgba(202, 202, 243, 0.8), rgba(162, 173, 217, 0.8), rgba(123, 146, 191, 0.8), rgba(82, 119, 166, 0.8), rgba(31, 93, 141, 0.8)",
    padding: "20px",
    borderRadius: "50px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: "#fff",
    maxWidth: "800px",
    width: "100%",
    height: "500px",
    marginTop: "50px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    textDecoration: "underline",
    textAlign: "center",
    marginBottom: "2rem", // Add 2-line distance
    color: "#000", // Change text color to black
  };

  const textStyle = {
    fontSize: "1.6rem",
    color: "#000",
    fontcolor: 'blue',
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={textStyle}>
        This initiative strives to democratize career counseling for secondary-level students by providing AI-driven counseling sessions, psychometric assessments, and holistic career guidance. By leveraging technology, it aims to streamline the career selection process, equipping students with the knowledge and insights needed to confidently navigate their educational and professional journeys. Ultimately, it seeks to bridge information gaps and empower students to make informed and fulfilling career choices.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
