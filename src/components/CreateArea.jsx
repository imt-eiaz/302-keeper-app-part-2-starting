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

<<<<<<< HEAD
=======
  function deleteNote(id) {
    setNote((preNote) => {
      return preNote.filter((id, index) => {
        return index !== id;
      });
    });
  }

>>>>>>> eb7a1daa906cf35884ad67da83e510aea55cb28d
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
<<<<<<< HEAD
          type="text"
          placeholder="title"
          name="title"
          value={note.title}
=======
          name="title"
          placeholder="title"
          type="text"
>>>>>>> eb7a1daa906cf35884ad67da83e510aea55cb28d
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="content"
          id=""
<<<<<<< HEAD
          value={note.content}
=======
>>>>>>> eb7a1daa906cf35884ad67da83e510aea55cb28d
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
