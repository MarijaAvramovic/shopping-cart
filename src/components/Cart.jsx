import { useOutletContext } from "react-router-dom";

const Cart = ( ) => {
      const { cartItems, setCartItems } = useOutletContext();

  return (
        <section>
        <p>{cartItems.length} items in cart</p>
        </section>
  );
  
};

export default Cart;
