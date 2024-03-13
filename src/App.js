import { useEffect, useState } from 'react';
import './App.css';

// canvas width is 1200px
// max point is canvas - balloon width --> 1200px - 160px = 1140px

// random number between 0 and max point
const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function App() {
  // const [leftPosition, setLeftPosition] = useState('0');
  const [limit, setLimit] = useState(3);
  const [count, setCount] = useState(1);
  const [balloons, setBalloons] = useState([]);
  const [inputList, setInputList] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (count > limit) {
      alert('game over');
    }

    return () => {
      console.log('stopped listening to count')
    }
  }, [count, limit]);


  const Balloon = () => {
    const leftPosition = randomIntFromInterval(0, 1140);
    return (
      <div
        className="balloon"
        style={{ left: leftPosition }}
        onClick={handleBalloonClick}
      ></div>
    )
  }

  const handleBalloonClick = () => {
    console.log('clicked balloon');
    setInputList(inputList.concat(<Balloon key={inputList.length} />));
  }

  return (
    <div className="App">
      <div className="gameContainer">
        <h1>Balloon # {count}</h1>
        {inputList}
        <Balloon handleBalloonClick={handleBalloonClick} />
        {/* <div style={{ left: randomIntFromInterval(0, 1140) }} onClick={handleBalloonClick} className="balloon"></div> */}
      </div>
    </div>
  );
}

export default App;
