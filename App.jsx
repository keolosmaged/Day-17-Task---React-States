import React from 'react';
import ParentComponent from './ParentComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Parent-Child Communication</h1>
      <ParentComponent />
    </div>
  );
}

export default App;