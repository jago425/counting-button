import logo from './logo.svg';
import DynamicButton from './components/DynamicButton';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DynamicButton onClick={() => alert('Button clicked!')} />
      </header> 
      
    </div>
  );
}

export default App;
