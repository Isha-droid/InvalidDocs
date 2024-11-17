import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import './Invalid.css'; // Import the CSS file

const Invalid = () => {
  return (
    <div className="invalid-container">
      <div className="icon-animation">
        <FaTimesCircle className="invalid-icon" />
      </div>
      <h2 className="invalid-text">Document Breached</h2>
    </div>
  );
};

export default Invalid;
