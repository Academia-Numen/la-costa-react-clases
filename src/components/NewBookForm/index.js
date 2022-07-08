import React, { useContext } from 'react';
import { useState } from 'react';
import { BooksContext } from '../../contexts/BooksContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ACTIONS } from '../../reducers/bookReducer';
import { FormContainer, InputField } from './new-book-form.styled';

const NewBookForm = () => {
    const { books, dispatch } = useContext(BooksContext);
    const { themeStyles } = useContext(ThemeContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    function generateId(books) {
        const id = Math.max(0, ...books.map(book => book.id)) + 1;
        return id;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { 
            author: author, 
            title: title, 
            id: generateId(books),
            isRead: false 
        };
        dispatch({ type: ACTIONS.ADD_BOOK, payload: newBook});
        setTitle('');
        setAuthor('');
    }

    return (
        <FormContainer 
            themeStyles={themeStyles} 
            onSubmit={handleSubmit}
        >
            <InputField 
                type="text" 
                value={title} 
                placeholder="book title"
                required
                onChange={e => setTitle(e.target.value)}
            />
            <InputField 
                type="text" 
                value={author} 
                placeholder="book author"
                required
                onChange={e => setAuthor(e.target.value)}
            />
            <InputField type="submit" />
        </FormContainer>
    );
}

export default NewBookForm;
