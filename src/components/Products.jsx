import "./styles/Products.css";

const Products = () => {

  return (
        <section className="productsSection">
        <h2>Products section</h2>
       <Card />
           

        </section>
  );
  
};

export default Products;



const Card = () => {

  return (
        <div className="card">
            <div className="img"><img src="" alt="" /></div>
            <h3>Product Title</h3>
            <p>Product description goes here.</p>
            <div className="quantity-control">
                <button>-</button>
                <input type="number" defaultValue="1" />
                <button>+</button>
            </div>
            <button className="add-to-cart">Add To Cart</button>
        </div>
  );
  
};