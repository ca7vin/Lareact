import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import CreateBook from './Components/CreateBook';
import List from './Components/List';
import "./sass/style.sass"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Book List</Link>
            </li>
            <li>
              <Link to="/create">Add a book</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/create" element={<CreateBook/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
