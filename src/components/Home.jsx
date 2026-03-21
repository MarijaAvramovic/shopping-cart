
 import '../App.css';
 import { Link } from 'react-router-dom';
 import HeroImg from './HeroImg.jsx';

const Home = () => {

  return (
        <section>
        <div className="hero-content">
        <h1>Discover Your Style</h1>
        <p>
          Shop the latest trends with unbeatable prices. Upgrade your wardrobe today.
        </p>

        
 


      <div className="hero-image">
       <HeroImg />
      </div>

        <div className="hero-buttons">
        <Link to="/products" className="btn primary">
            Shop Now
          </Link>
          <Link to="/cart" className="btn secondary">
            View Cart
          </Link>
        </div>
      </div>
        </section>
  );
  
};

export default Home;
