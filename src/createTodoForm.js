import React from "react";
import axios from "axios";

function CreateBox({ clickDetection, setErrorReport }) {
  function onSubmit(e) {
    e.preventDefault();
    const createField = document.getElementById("item-description");
    const createValue = createField.value;

    axios
      .post("http://localhost:5000/create-item", { text: createValue })
      .then(function() {
        createField.value = "";
        createField.focus();
        clickDetection();
      })
      .catch(function(err) {
        setErrorReport(err.message);
      });
  }

  return (
    <div>
      <div className="jumbotron p-3 shadow-sm">
        <form onSubmit={onSubmit} id="create-form">
          <div className="d-flex align-items center">
            <input
              id="item-description"
              name="item"
              autoFocus
              autoComplete="off"
              className="form-control mr-3"
              type="text"
            ></input>
            <button className="create-me btn btn-primary text-nowrap">
              {" "}
              Add New Item{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBox;
