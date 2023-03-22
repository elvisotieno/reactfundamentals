import './App.css';
import CounterFunction from './react_fundamentals/usestateus';
import Todos from './react_fundamentals/usereducer/todos';

function App() {
  return (
    <div className="App">      
      <CounterFunction />
      <Todos />
    </div>
  );
}

export default App;
