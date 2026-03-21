import "./styles/Products.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Products = () => {
        const { cartItems, setCartItems } = useOutletContext();
  return (
        <section className="productsSection">
        <h2>Products</h2>
       <Card cartItems={cartItems} setCartItems={setCartItems} />
              <Card />
                 <Card />
                    <Card />

        </section>
  );
  
};

export default Products;



const Card = ( { cartItems, setCartItems } ) => {
        const [quantity, setQuantity] = useState(1);

         const handleIncrease = () => {
            setQuantity(prev => prev + 1);
         };

         const handleDecrease = () => {
            setQuantity(prev => (prev > 1 ? prev - 1 : 1));
         };     

         const addToCart = () => {
            const newItem = {
                id: cartItems.length + 1,
                name: `Product ${cartItems.length + 1}`,
                quantity: quantity
            };
            setCartItems(prev => [...prev, newItem]);
         }

return (
            <div className="card">
                    <div className="img"><img src="" alt="" /></div>
                    <h3>Product Title</h3>
                    <p>Product description goes here.</p>
                    <div className="quantity-control">
                            <button onClick={handleDecrease}>-</button>
                            <input type="number" value={quantity} onChange={(e) => setQuantity(
                                Math.max(1, parseInt(e.target.value) || 1)
                                )} />
                            <button onClick={handleIncrease}>+</button>
                    </div>
                    <button onClick={addToCart} className="add-to-cart">Add To Cart</button>
            </div>
);
  
};