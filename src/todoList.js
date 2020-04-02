import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateBox from "./createTodoForm";
import DeleteButton from "./deleteButton";
import EditButton from "./editButton";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [errorReport, setErrorReport] = useState([]);
  const [clickCount, setClickCount] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [clickCount]);

  function fetchItems() {
    axios
      .get("/data")
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
        <CreateBox
          clickDetection={handleChange}
          setErrorReport={setErrorReport}
        />
        {errorReport.length === 0 ? (
          ""
        ) : (
          <div className="alert alert-danger text-center">{errorReport}</div>
        )}
        <ul className="list-group pb-5">
          {todos.map(todos => (
            <li
              key={todos._id}
              className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
            >
              <span className="item-text">{todos.text}</span>
              <div>
                <EditButton
                  id={todos._id}
                  clickDetection={handleChange}
                  setErrorReport={setErrorReport}
                />
                <DeleteButton
                  id={todos._id}
                  clickDetection={handleChange}
                  setErrorReport={setErrorReport}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
