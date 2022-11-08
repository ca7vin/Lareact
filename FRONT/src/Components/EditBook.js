import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [book, setBook] = useState([]);

  useEffect(() => {
    getbook();
  }, []);

  const getbook = () => {
    fetch(`http://127.0.0.1:8000/api/book/` + id)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  };

  const handleChange = (event) => {
    setBook({...book,[event.target.name]:event.target.value});
  };

  const handleSubmit = (event) => {
    console.log(book);
    fetch(`http://127.0.0.1:8000/api/book/` + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: book.title,
        author: book.author,
        publisher: book.publisher,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          setBook({
            isLoaded: true,
            error,
          });
        }
      );
    event.preventDefault();
    navigate("/");
  }
  return(
    <form className="form d-flex flex-column w-75 mx-auto" onSubmit={handleSubmit}>
        <label className="form-label">
          Title:
          <input
            className="form-control"
            type="text"
            name="title"
            value={book.title}
            onInput={handleChange}
          />
        </label>
        <label className="form-label">
          Author:
          <input
            className="form-control"
            type="text"
            name="author"
            value={book.author}
            onInput={handleChange}
          />
        </label>
        <label className="form-label">
          Publisher:
          <input
            className="form-control"
            type="text"
            name="publisher"
            value={book.publisher}
            onInput={handleChange}
          />
        </label>
        <input className="btn btn-primary w-50 mx-auto mt-5" type="submit" value="Submit" />
      </form>
  )
};

export default EditBook;
