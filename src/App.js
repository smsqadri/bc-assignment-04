import React, {useState} from 'react';
import Message from './Message.js'
import './App.css';

function App() {
  let[count, setCount] = useState (1);
  let[isMorning, setMorning] = useState(true);

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day Time = {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count}/>
      <br/>
      <button onClick={()=> setCount(count + 1)}>Update Counter Method 1 with count + 1</button>
      <br/> <br/>
      <button onClick={()=> setCount(++count)}>Update Counter Method 2 with ++count</button>
      <br/> <br/>
      <button onClick={() => setMorning(!isMorning)}>Day / Night</button>
    </div>
  );
}

export default App;
