import React from 'react';
import Wrapper from "./Wrapper"
import Buttons from "./Buttons"
import HeartBeatLogo from "./HeartBeatLogo"
import './App.css';

function App() {
  return (
    <div className="App">
    <Wrapper>
        <HeartBeatLogo/>
        <Buttons />
    </Wrapper>
      </div>
  );
}

export default App;
