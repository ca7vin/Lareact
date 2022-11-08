import React from "react";
import axios from "axios";
import { useState } from "react";

export default function CreateBookAxios() {

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    publisher: "",
  });

  const handleChange = (event) => {
    setNewBook( [event.target.name] = event.target.value );
  };

  const handleSubmit = (event) => {
    axios.post("http://127.0.0.1:8000/api/book", newBook).then((response) =>
      setNewBook({
        title: response.data.title,
        author: response.data.author,
        publisher: response.data.publisher,
      })
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newBook.title}
            onInput={handleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={newBook.author}
            onInput={handleChange}
          />
        </label>
        <label>
          Publisher:
          <input
            type="text"
            name="publisher"
            value={newBook.publisher}
            onInput={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
