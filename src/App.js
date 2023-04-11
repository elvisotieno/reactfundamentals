import React from 'react';
import './App.css';
import CounterFunction from './react_fundamentals/usestateus';
import Todos from './react_fundamentals/usereducer/todos';
import Stopwatchtimmer from './react_fundamentals/use_ref/Stopwatchtimmer';
import Datafetching from './react_fundamentals/useffect/Datafetching';

function App() {
  return (
    <div className="App">      
      <CounterFunction />
      <Todos />
      <Stopwatchtimmer />
      <Datafetching />
    </div>
  );
}

export default App;
