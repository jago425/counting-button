import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './reduxStore/counterSlice';
import { determineButtonColor } from './utils/doMath';
import DynamicButton from './components/DynamicButton';
import './App.css';


function App() {
  const count = useSelector((state) => state.clickCounter.count)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(increment());
}

const color = determineButtonColor(count);


  return (
    <div className="App">
      <header className="App-header">
        <DynamicButton onClick={handleClick} color={color} />
         <img src={logo} className="App-logo" alt="logo" />
      </header> 
      
    </div>
  );
}

export default App;
