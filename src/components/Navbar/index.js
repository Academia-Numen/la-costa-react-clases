import React, { useContext } from 'react';
import { BooksContext } from '../../contexts/BooksContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { NavbarContainer } from './navbar.styled';

export default function Navbar() {
    const books = useContext(BooksContext);
    const { themeStyles } = useContext(ThemeContext);

    return (
        <NavbarContainer themeStyles={themeStyles}>
            <h1>Libros Disponible: {books.length}</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </NavbarContainer>
    )
}