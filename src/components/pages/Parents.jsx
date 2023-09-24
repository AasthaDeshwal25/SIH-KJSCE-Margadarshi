import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Function to load HTML content from a local file
    const loadHtmlContent = async () => {
      try {
        // Fetch HTML content from the local file using the 'file://' scheme
        const response = await fetch('file:///C:/Users/aasth/OneDrive/Desktop/Margadarshi_SIH/SIH-KJSCE-Margadarshi/margadarshi/src/Parent/index%20(2).html');

        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error(`Failed to load HTML: ${response.status} ${response.statusText}`);
        }

        // Get the HTML content as text
        const data = await response.text();

        // Set the HTML content in the component state
        setHtmlContent(data);
      } catch (error) {
        console.error('Error loading HTML:', error);
      }
    };

    // Call the loadHtmlContent function when the component mounts
    loadHtmlContent();
  }, []);

  return (
    <div>
      <h2>My React Component</h2>
      {/* Use dangerouslySetInnerHTML to render the HTML content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default MyComponent;
