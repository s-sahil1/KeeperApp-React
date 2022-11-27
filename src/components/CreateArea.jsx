import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [show, changeShow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    changeShow(true);

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function Show() {
    return (
      <div>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      </div>
    );
  }

  return (
    <div>
      <form className="create-note">
        {show ? <Show /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {show ?3:1}
        />

        <Zoom in={show}>
          <Fab onClick={submitNote}>
            {" "}
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
