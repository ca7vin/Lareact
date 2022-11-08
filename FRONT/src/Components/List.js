import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function List({books}) {


  return (
    <table className="table mx-auto w-75">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Actions</th>
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
              <td>
                <button className="btn btn-warning me-3">
                  <Link className="text-decoration-none text-white" to={{ pathname: "book/edit/" + book.id }}>Edit</Link>
                </button>
                <button
                  onClick={() => this.delBook(book.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
