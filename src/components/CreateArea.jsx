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

  function submitNote() {
    props.onAdd(note);
    createNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="button" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
