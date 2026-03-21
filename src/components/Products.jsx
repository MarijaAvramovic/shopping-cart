import "./styles/Products.css";
import { useState } from "react";

const Products = () => {

  return (
        <section className="productsSection">
        <h2>Products</h2>
       <Card />
              <Card />
                 <Card />
                    <Card />

        </section>
  );
  
};

export default Products;



const Card = () => {
        const [quantity, setQuantity] = useState(1);

         const handleIncrease = () => {
            setQuantity(prev => prev + 1);
         };

         const handleDecrease = () => {
            setQuantity(prev => (prev > 1 ? prev - 1 : 1));
         };     


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
                    <button className="add-to-cart">Add To Cart</button>
            </div>
);
  
};