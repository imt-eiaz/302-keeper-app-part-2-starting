import React, { useState } from "react";
<<<<<<< HEAD
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
=======
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
>>>>>>> eb7a1daa906cf35884ad67da83e510aea55cb28d
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  }

<<<<<<< HEAD
  function deleteNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

=======
>>>>>>> eb7a1daa906cf35884ad67da83e510aea55cb28d
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
<<<<<<< HEAD
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
=======
        return <Note title={noteItem.title} content={noteItem.content} />;
>>>>>>> eb7a1daa906cf35884ad67da83e510aea55cb28d
      })}
      <Footer />
    </div>
  );
}

export default App;
