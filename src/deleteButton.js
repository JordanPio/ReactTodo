import React from "react";
import Axios from "axios";

function DeleteButton({ clickDetection, id, setErrorReport }) {
  function deleteFunc() {
    Axios.post("http://localhost:5000/delete-item", { id: id })
      .then(() => clickDetection())
      .catch(error => setErrorReport(error.message));
  }

  return (
    <button className="delete-me btn btn-danger btn-sm" onClick={deleteFunc}>
      Delete
    </button>
  );
}

export default DeleteButton;
