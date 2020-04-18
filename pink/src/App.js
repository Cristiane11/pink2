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
        <ContactCard name="Mr. Whiskerson" imgUrl="http://placekitten.com/300/200" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
        <ContactCard name="Cristiane Abreu" imgUrl="http://placekitten.com/400/300" phone="(212) 777-2020" email="cristiane.abreu@martindale.com" />

       
      </header>
    </div>
  );
}

export default App;
