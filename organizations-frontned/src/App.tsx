import React from 'react';
import { Organizations } from './features/organizations/organizations';
import './App.css';
import { reset } from './features/organizations/actions';

function App() {
  console.log('reset', reset());
  return (
    <div className="App">
      <Organizations />
    </div>
  );
}

export default App;
