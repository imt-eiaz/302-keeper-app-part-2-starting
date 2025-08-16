import React from "react";

function Note(props) {
<<<<<<< HEAD
  function handleClick() {
=======
  function deleteNote(id) {
>>>>>>> eb7a1daa906cf35884ad67da83e510aea55cb28d
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
<<<<<<< HEAD
      <button onClick={handleClick}>Delete</button>
=======
      <button onClick={deleteNote}>Delete</button>
>>>>>>> eb7a1daa906cf35884ad67da83e510aea55cb28d
    </div>
  );
}

export default Note;
