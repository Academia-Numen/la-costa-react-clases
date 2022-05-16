import './App.css';
import Lista from './components/Lista';

function App() {

  const clase = {
    numero: '5',
    tema: 'Angular'
  }

  const estilos = {
    color: 'blue',
    fontSize: 30,
  }

  const autos = [
    { id: 1, strong: 'Corsa', span: 'Chevrolet' },
    { id: 2, strong: 'Siena', span: 'Fiat' },
    { id: 3, strong: 'Ka', span: 'Ford' },
    { id: 4, strong: 'Gol', span: 'Volkswagen' },
    { id: 5, strong: 'A7', span: 'Audi' },
  ]

  const electrodomesticos = [
    { id: 1, strong: 'Heladera', span: 'Gafa' },
    { id: 2, strong: 'Secarropas', span: 'Kohinoor' },
    { id: 3, strong: 'Cocina', span: 'Escorial' },
    { id: 4, strong: 'Batidora', span: 'Peabod' },
    { id: 5, strong: 'Aire Acondicionado', span: 'Lift' },
  ]

  return (
    <div className="App">
      <h2 style={estilos}>Bienvenidos a las clase {clase.numero} de {clase.tema} </h2>
      <Lista lista={autos} titulo='Lista de Autos' />
      <Lista lista={electrodomesticos} titulo='Lista de Electrodomésticos'>
        <li style={{ backgroundColor: 'red', color: 'white' }}>Fin de la lista</li>
      </Lista>
    </div>
  );
}

export default App;
