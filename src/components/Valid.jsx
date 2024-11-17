import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Valid.css'; // Import the CSS file

const Valid = () => {
  return (
    <div className="valid-container">
      <div className="icon-animation">
        <FaCheckCircle className="valid-icon" />
      </div>
      <h2 className="valid-text">Document Verified</h2>
    </div>
  );
};

export default Valid;
