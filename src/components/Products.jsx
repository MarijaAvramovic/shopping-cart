import "./styles/Products.css";
import { useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";

const Products = () => {
        const { cartItems, setCartItems } = useOutletContext();
        const [products, setProducts] = useState([]);

        useEffect(() => {

            fetch('https://fakestoreapi.com/products')
             .then(response => response.json())
             .then(data => {
                 setProducts(data);
                console.log(data);
             }
               
             )
             .catch(error => console.error('Error fetching products:', error)
             );
         }, []); 



  return (
        <section className="productsSection">
        <h2>Products</h2>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <h3>{product.category}</h3>
                    <p>{product.title}</p>
                    <p>${product.price}</p> 

                </li>
            ))}
        </ul>
       <Card products={products}
       cartItems={cartItems} setCartItems={setCartItems} />
               
        </section>
  );
  
};

export default Products;



const Card = ( { products, cartItems, setCartItems } ) => {
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
                price: 19.99,
                quantity: quantity
            };
            setCartItems(prev => [...prev, newItem]);
         }

return (
            <div className="card">
                    <div className="img"><img src={products[4].image} alt="" /></div>
                    <h3>dsjsdk</h3>
                    <p>dsds</p>
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