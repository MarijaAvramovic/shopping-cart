import '../App.css';
import { Link } from 'react-router-dom';

const NavBar = ( { cartItems } ) => {

  return (
     <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart <span>{cartItems.length}</span></Link></li>
        </ul>

     </nav>
  );
  
};

export default NavBar;
