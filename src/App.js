import React, { useState } from 'react'
import logo from './logo.svg';
import DynamicButton from './components/DynamicButton';
import InfoMessage from './components/InfoMessage';
import { determineButtonColor } from './utils/doMath';
import './App.css';


function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(count);
}, [count]);

const getButtonColor = (count) => {
let color = 'green';
if (determineButtonColor(count)=== 'purple') {
  color = 'purple'
} else if (determineButtonColor(count) === 'blue') {
  color = 'blue'
} else if (determineButtonColor(count) === 'teal'){ color = 'teal'};
console.log('button color is', color);
return color
};

    const handleClick = () => {
        setCount(count + 1);
    }
  return (
    <div className="App">
      <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />

      </header> 
        <DynamicButton color={getButtonColor(count)}onClick={() => handleClick()} />
          <InfoMessage count={count}/>
    </div>
  );
}

export default App;
