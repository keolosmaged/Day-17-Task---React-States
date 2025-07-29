import React from 'react';

const ChildComponent = ({ message, onButtonClick }) => {
  return (
    <div style={{
      border: '2px solid #ccc',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h3>Child Component</h3>
      <p>Message from Parent: <strong>{message}</strong></p>
      <button 
        onClick={onButtonClick}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Send Data to Parent
      </button>
    </div>
  );
};

export default ChildComponent;