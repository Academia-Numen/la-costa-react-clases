import './App.css';
import BooksList from './components/BooksList';
import React from 'react';
import Navbar from './components/Navbar';
import { AppContainer } from './App.styled';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';
import BooksContextProvider from './contexts/BooksContext';

function App() {

  return (
    <AppContainer>
      <ThemeContextProvider>
        <BooksContextProvider>

          <Navbar/>

          <BooksList/>

          <ThemeToggle />
          
        </BooksContextProvider>
      </ThemeContextProvider>
    </AppContainer>
  );
}

export default App;
