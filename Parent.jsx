import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [parentMessage, setParentMessage] = useState('Hello from Parent!');
  const [childMessage, setChildMessage] = useState('');

  const handleChildButtonClick = () => {
    setChildMessage('Data received from Child at: ' + new Date().toLocaleTimeString());
  };

  const updateParentMessage = () => {
    setParentMessage('New message from Parent at: ' + new Date().toLocaleTimeString());
  };

  return (
    <div style={{
      border: '2px solid #333',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>Parent Component</h2>
      <p>Message from Child: <strong>{childMessage}</strong></p>
      <button 
        onClick={updateParentMessage}
        style={{
          padding: '8px 16px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Update Message to Child
      </button>
      
      <ChildComponent 
        message={parentMessage} 
        onButtonClick={handleChildButtonClick} 
      />
    </div>
  );
};

export default ParentComponent;