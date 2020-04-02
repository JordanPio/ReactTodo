import React from "react";
import Axios from "axios";

function EditButton({ id, clickDetection, setErrorReport }) {
  function editFunc(e) {
    let userInput = prompt(
      "Enter new item",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      Axios.post("/edit-item", {
        text: userInput,
        id: id
      })
        .then(clickDetection())
        .catch(function(err) {
          setErrorReport(`"${err.message}`);
        });
    }
  }

  return (
    <button
      className="edit-me btn btn-secondary btn-sm mr-1"
      onClick={editFunc}
    >
      Edit
    </button>
  );
}

export default EditButton;
