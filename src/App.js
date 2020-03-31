import React from "react";
import TodoList from "./todoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <title>Simple To-do App</title>
      <div className="container">
        <h1 className="display-4 text-center py-1">To-do App</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
