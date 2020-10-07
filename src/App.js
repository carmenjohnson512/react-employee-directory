import React from 'react';
import './App.css';
import Directory from './Components/EmployeeDirectory.container'
import dataColumns from './Components/EmployeeDirectory.container'

function App() {
  return (
    <Directory key={{dataField:"username"}}/>
  );
}

export default App;
