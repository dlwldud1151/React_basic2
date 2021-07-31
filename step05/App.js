import React from 'react';
import './App.css';
import GetDerivedStateFromPropsEx from './GetDerivedStateFromPropsEx';

function App() {
  return (
    <div>
      <h1>getDerivedStateFromProps 함수 연습</h1>
      <GetDerivedStateFromPropsEx 
        prop_value = 'FromApp.js'/>
    </div>
  )
}

export default App;
