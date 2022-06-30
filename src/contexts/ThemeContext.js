import React, { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isLightTheme, setIsLightTheme] = useState(false);

    const updateThemeStyles = () => setIsLightTheme(!isLightTheme);
  
    const themeStyles = `
      color: ${isLightTheme ? '#555' : '#ddd' };
      background: ${isLightTheme ? '#eee' : '#555' };
    `;  

    return (
        <ThemeContext.Provider value={{ themeStyles, updateThemeStyles }}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;