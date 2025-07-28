import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Answer from './components/Answer';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
     <Greet />
     <Answer />
     <Welcome />
    </div>
  );
}

export default App;
