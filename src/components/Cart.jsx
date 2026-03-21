import { useOutletContext } from "react-router-dom";

const Cart = ( ) => {
      const { cartItems, setCartItems } = useOutletContext();

  return (
        <section>
      
        <p>{cartItems.map(item => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
            </div>
        ))}</p>
        </section>
  );
  
};

export default Cart;
