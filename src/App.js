import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';
import ThemeToggle from './components/ThemeToggle';
import { AppContainer } from './App.styled';
import BooksContextProvider from './contexts/BooksContext';
import { NavbarContainer } from './components/Navbar/navbar.styled';
import ThemeContextProvider from './contexts/ThemeContext';
import NewBookForm from './components/NewBookForm';

function App() {

  return (
    <AppContainer>
      <ThemeContextProvider>
        <BooksContextProvider>

          <Navbar />
          <BooksList />
          <NewBookForm />
          <ThemeToggle />

        </BooksContextProvider>
      </ThemeContextProvider>
    </AppContainer>
  );
}

export default App;
