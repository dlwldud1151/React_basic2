import React from 'react';
import './App.css';
import ShouldComponentUpDateEx from './ShouldComponentUpDateEx';

function App() {
  return (
    <div>
      <h1>shouldComponentUpdate 함수 연습</h1>
      <ShouldComponentUpDateEx 
        prop_value = 'FromApp.js'/>
    </div>
  )
}

export default App;
