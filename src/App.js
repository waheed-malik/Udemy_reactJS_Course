import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Answer from './components/Answer';
import Welcome from './components/Welcome';
import Hello from './components/JSX';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
{/*       
      <Greet name="Billy" username="Waheed" color="red">
        <p>This is a children props</p>
      </Greet>
      <Greet name="Astra" username="Malik" color="Blue" >
        <button>Click me</button></Greet>
      
      <Answer />
      <Welcome name="Brim" username="Hussain" />
      <Welcome name="Astra" username="Malik"/>
      <Welcome name="Billy" username="Waheed"/>
      <Hello />
      <Message /> */}
      <Greet name="Brim" username="Hussain"  />
    </div>
  );
}

export default App;
