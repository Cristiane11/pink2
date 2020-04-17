import React from 'react';
import logo from './logo.svg';
import Horas from './components/Horas';
import ToDoList from './components/ToDoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <Horas/>
        </p>
        <hr/>
        <ToDoList/>
       
      </header>
    </div>
  );
}

export default App;
