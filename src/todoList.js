import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateBox from "./createTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [errorReport, setErrorReport] = useState([]);
  const [clickCount, setClickCount] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [clickCount]);

  function fetchItems() {
    axios
      .get("http://localhost:5000/")
      .then(res => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch(function(err) {
        console.log(err.message);
        setErrorReport(err.message);
      });
  }

  function handleChange() {
    setClickCount(clickCount + 1);
  }

  return (
    <div>
      <div>
        <CreateBox clickDetection={handleChange} />
        <ul>
          {errorReport.length === 0 ? (
            ""
          ) : (
            <div className="alert align-items-center">{errorReport}</div>
          )}
          {todos.map(todos => (
            <li key={todos._id}>
              <span>{todos.text}</span>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
