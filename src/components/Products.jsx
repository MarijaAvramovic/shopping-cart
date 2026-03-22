import "./styles/Products.css";
import { useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";

const Products = () => {
        const { cartItems, setCartItems } = useOutletContext();
        const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

        useEffect(() => {

            fetch('https://fakestoreapi.com/products')
             .then(response => response.json())
             .then(data => {
                 setProducts(data);
                console.log(data);
             }
               
             )
              .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
        <section className="productsSection">
        <h2>Products</h2>
         
                {products.map(product => (
                  <div key={product.id}>    
                        <Card  product={product} cartItems={cartItems} setCartItems={setCartItems} />
                   </div>
                ))  
            }        
         
        
     
               
        </section>
  );
  
};

export default Products;



const Card = ( { product, cartItems, setCartItems } ) => {
        const [quantity, setQuantity] = useState(1);

         const handleIncrease = () => {
            setQuantity(prev => prev + 1);
         };

         const handleDecrease = () => {
            setQuantity(prev => (prev > 1 ? prev - 1 : 1));
         };     

         const addToCart = () => {
            const newItem = {
                id: product.id,
                name: product.title,
                price: product.price,
                quantity: quantity,
                image: product.image,
            };
            setCartItems(prev => [...prev, newItem]);
         }

return (

            <div className="card">
                    <div className="img"><img src={product.image} alt={product.title} /></div>
                    <h3>{product.title}</h3>
                    <p>{product.category}</p>
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