import React from 'react';
import logo from './logo.svg';
import Horas from './components/Horas';
import ToDoList from './components/ToDoList';
import ContactCard from './components/ContactCard';
import './App.css';

function App() {
  return (
    <div className="todo-list">
      <header className="App-header">
        
        <p>
          <Horas/>
        </p>
        <br/>
        <ToDoList/>
        <ToDoList/>
        <ToDoList/>
        <ContactCard/>S
       
      </header>
    </div>
  );
}

export default App;
