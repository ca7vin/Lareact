import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function List() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          return (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}
