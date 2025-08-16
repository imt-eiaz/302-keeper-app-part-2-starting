import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((preNote) => {
      return { ...preNote, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="title"
          name="title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="content"
          id=""
          value={note.content}
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
