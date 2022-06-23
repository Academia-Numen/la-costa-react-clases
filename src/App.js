import './App.css';
import BooksList from './components/BooksList';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const BooksContext = createContext();

function App() {
  const [books, setBooks] = useState([
    { title: '100 años de soledad', id: 1 },
    { title: 'las venas abiertas de america latina', id: 2 },
    { title: 'El viejo y el mar', id: 3 },
    { title: 'Sandokan', id: 4 },
  ])

  return (
    <div>
      <BooksContext.Provider value={books}>
        <div>
          <div>
            <BooksList/>
          </div>
        </div>
      </BooksContext.Provider>
    </div>
  );
}

export default App;
