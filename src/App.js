import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a mi tienda online!" />
    </div>
  );
}

export default App;

