import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosContextProvider } from "./contexts/TodosContext";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TodosContextProvider>
                    <TodoForm/>
                    <TodoList/>
                </TodosContextProvider>
            </header>
        </div>
    );
}

export default App;
