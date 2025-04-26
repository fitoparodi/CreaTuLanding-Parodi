import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <h1>Mi Tienda</h1>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
