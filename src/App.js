import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { AppContainer } from './App.styled';
import Counter from './components/Counter';

function App() {

  return (
    <AppContainer>
      <Counter />
    </AppContainer>
  );
}

export default App;
