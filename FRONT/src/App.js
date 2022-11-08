import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';
import CreateBook from './Components/CreateBook';
import EditBook from './Components/EditBook';
import CreateBookAxios from './Components/CreateBookAxios';
import List from './Components/List';
import "./sass/style.sass"
import axios from 'axios';



function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook])
  }

  return (
    <Router>
      <div>
        <nav>
          <ul className='d-flex'>
            <li>
              <Link className="btn btn-success m-3" to="/">Book List</Link>
            </li>
            <li>
              <Link className="btn btn-primary m-3"  to="/create">Add a book</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<List books={books}/>}/>
          {/* <Route path="/create" element={<CreateBookAxios/>}/> */}
          <Route path="/create" element={<CreateBook addBook={addBook}/>}/>
          <Route path="/book/edit/:id" element={<EditBook />}/>
        </Routes>
      </div>
    </Router>
  );
}



export default App;
