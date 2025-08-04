import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Answer from './components/Answer';
import Welcome from './components/Welcome';
import Hello from './components/JSX';
import Message from './components/Message';
import ClickFunction from './components/ClickFunction';
import ClickClass from './components/ClickClass';
import EventBind from './components/EventBind';
import ParentComponents from './components/ParentComponents';
import UserGreeting from './components/UserGreeting';
import NameeLists from './components/NameeLists';
import Form from './components/Form'
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

      {/*  Destructing props & state*/}
      {/* <Welcome name="Brim" username="Hussain"  /> */}

      {/* Event handling */}
      {/* <ClickFunction /> */}
      {/* <ClickClass /> */}

      {/* EventBind */}
      {/* <EventBind /> */}

      {/* Method Props */}
      {/* <ParentComponents /> */}

      {/* conditional rendering */}
      {/* <UserGreeting /> */}

      {/* List Rendering */}
      {/* <NameeLists/>   */}

     <Form/>
 </div>
  );
}

export default App;
