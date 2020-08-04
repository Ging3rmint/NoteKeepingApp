import React, { useState } from "react";

function CreateArea(props) {
  const [note, createNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    createNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          type="button"
          onClick={() => {
            props.addFunc(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
