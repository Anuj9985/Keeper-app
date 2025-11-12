import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();

if (!note.title.trim() || !note.content.trim()) {
    alert("Please fill in both the title and content before adding a note!");
    return;
}
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="flex justify-center mt-6">
     
      <form
        onSubmit={submitNote}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
      >
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
         
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
