import React from 'react';
import './App.css';
import ComponentDidMountEx from './ComponentDidMountEx';

function App() {
  return (
    <div>
      <h1>componentDidMount 함수 연습</h1>
      <ComponentDidMountEx 
        prop_value = 'FromApp.js'/>
    </div>
  )
}

export default App;
