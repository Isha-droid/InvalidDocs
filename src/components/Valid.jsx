import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Valid.css'; // Import the CSS file

const Valid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="valid-container">
      {isLoading ? (
        <div className="loader"></div> // Add a loader
      ) : (
        <div>
          <div className="icon-animation">
            <FaCheckCircle className="valid-icon" />
          </div>
          <h2 className="valid-text">Document Verified</h2>
        </div>
      )}
    </div>
  );
};

export default Valid;
