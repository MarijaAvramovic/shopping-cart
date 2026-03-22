import { useOutletContext } from "react-router-dom";
import "./styles/Cart.css";

const Cart = ( ) => {
      const { cartItems, setCartItems } = useOutletContext();

  return (
        <section className="cartPage">
          <div className="cartSection">
            <h2>Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <div className="cartItem" key={item.id}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <img src={item.image} alt={item.name} />

                  <div className="cartQuantity"> 
                <p>Quantity: {item.quantity}</p>

                  <button onClick={() => setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))}>
                  +</button>

                  <button onClick={() => setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))}>
                  -</button>
                      
                  
                 </div>


                   <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                   
                  <button onClick={() => setCartItems(prev => prev.filter(i => i.id !== item.id))}>
                    Remove Item
                  </button>

               
                  
                </div>
              ))  
            )}
          </div>

          <Checkout cartItems={cartItems} />
      
       
        </section>
  );
  
};

export default Cart;


const Checkout = ( {cartItems} ) => { 


  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        
      
      <button onClick={() => alert("I LOVE ODIN PROJECT!")}>Proceed to Checkout</button>
    </div>
  );
};
