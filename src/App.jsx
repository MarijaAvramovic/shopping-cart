import { useState } from 'react'
 import './App.css';
import NavBar from './components/NavBar.jsx'
import { Outlet } from 'react-router-dom';
 
 

function App() {

    const [cartItems, setCartItems] = useState([]);

    function addCartItem(newItem) {
        setCartItems(prev => [...prev, newItem]);
    }

    return (
        <div className="App">
          { cartItems.length }
        <button onClick={() => addCartItem({ id: cartItems.length + 1, name: `Product ${cartItems.length + 1}` })}>
        add 

        </button>
            <NavBar cartItems={cartItems} />
            <main>
                <Outlet />
            </main>
             

            <footer> 
                <p>&copy; 2026 The Odin Project</p>
            </footer>
        </div>
    );
}

export default App
