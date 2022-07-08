import React from 'react';
import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorge';
import bookReducer from '../reducers/bookReducer';

export const BooksContext = createContext();

const initialState = [
    { author: 'García Marquez', title: '100 Años de Soledad', id: 1, isRead: false },
    { author: 'Eduardo Galeano', title: 'Las Venas Abiertas de America Latina', id: 2, isRead: false },
    { author: 'Ernest Hemignway', title: 'El Viejo y el Mar', id: 3, isRead: false },
    { author: 'Emilio Salgari', title: 'Sandokan', id: 4, isRead: false },
]

const BooksContextProvider = (props) => {
    const [books, dispatch] = useLocalStorage('books', bookReducer, initialState);

    return (
        <BooksContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;



// LINKS IMAGENES
// SANDOKAN
// https://i.pinimg.com/originals/53/e7/e7/53e7e779804e142dad77a3cffd8ef3e4.jpg
// EL VIEJO Y EL MAR
// https://literaturaparavivir.com.ar/wp-content/uploads/2021/01/518vvjuregl._sx331_bo1204203200_.jpg
// CIEN AÑOS...
// https://centrogabo.org/sites/default/files/100_anos_172.jpg
// LAS VENAS...
// https://contentv2.tap-commerce.com/cover/large/9789876295116_1.jpg?id_com=1113
