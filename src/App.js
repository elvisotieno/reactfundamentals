import './App.css';
import CounterFunction from './react_fundamentals/usestateus';
import Todos from './react_fundamentals/usereducer/todos';
import Stopwatchtimmer from './react_fundamentals/use_ref/Stopwatchtimmer';

function App() {
  return (
    <div className="App">      
      <CounterFunction />
      <Todos />
      <br></br>
      <Stopwatchtimmer />
    </div>
  );
}

export default App;
