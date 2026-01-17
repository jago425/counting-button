import React, { useState } from 'react'
import logo from './logo.svg';
import DynamicButton from './components/DynamicButton';
import './App.css';


function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(count);
}, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> }
        {<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> }
        <DynamicButton onClick={() => handleClick()} />
      </header> 
      
    </div>
  );
}

export default App;
