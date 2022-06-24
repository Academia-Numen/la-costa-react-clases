import React from 'react';
import { useContext } from 'react';
import { BooksContext, ThemeContext } from '../../App';
import { BooksContainer, BooksUnorderedList, BookItem } from './book-list.styled';

const BooksList = () => {
   const books = useContext(BooksContext);
   const themeStyles = useContext(ThemeContext);

    return (
        <BooksContainer themeStyles={themeStyles}>
            <h2>Lista de Libros</h2>
            <BooksUnorderedList>
                { books.map(book => (
                    <BookItem key={ book.id }>
                        { book.title }
                    </BookItem>
                ))}
            </BooksUnorderedList>
        </BooksContainer>
    );
}

export default BooksList;
