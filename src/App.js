import { useState } from 'react';
import './App.css';
import Contador from './components/Contador';
import Lista from './components/Lista';

const autosData = [
  { id: 1, strong: 'Corsa', span: 'Chevrolet' },
  { id: 2, strong: 'Siena', span: 'Fiat' },
  { id: 3, strong: 'Ka', span: 'Ford' },
  { id: 4, strong: 'Gol', span: 'Volkswagen' },
  { id: 5, strong: 'A7', span: 'Audi' },
]

const electrodomesticosData = [
  { id: 1, strong: 'Heladera', span: 'Gafa' },
  { id: 2, strong: 'Secarropas', span: 'Kohinoor' },
  { id: 3, strong: 'Cocina', span: 'Escorial' },
  { id: 4, strong: 'Batidora', span: 'Peabod' },
  { id: 5, strong: 'Aire Acondicionado', span: 'Lift' },
]

function App() {


  const [estado, setEstado] = useState('Valor Inicial del Estado');
  const [autos, setAutos] = useState(() => autosData);
  const [electrodomesticos, setElectrodomesticos] = useState(electrodomesticosData);

  function actualizarEstado() {
    setEstado('Nuevo valor de Estado');
    setAutos(prevState => [...prevState, 
      { id: 6, strong: 'Bora', span: 'Volkswagen' },
      { id: 7, strong: 'TT', span: 'Audi' },
    ])
    setElectrodomesticos(prevState => [...prevState, 
      { id: 6, strong: 'Aire Acondicionado', span: 'LG' },
    ])
  };

  return (
    <div>
      <Contador />

      <button onClick={actualizarEstado}>Actualizar Estado</button>
      <h1>{ estado }</h1>

      <Lista titulo='Lista de Autos' lista={autos} />
      <Lista titulo='Lista de Electrodomesticos' lista={electrodomesticos} />
    </div>
  );
}

export default App;
