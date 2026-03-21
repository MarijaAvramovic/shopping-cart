 
import App from "./App";
import Home from "./components/Home";
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
 
 

 const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },  
      { path: "cart", element: <Cart /> }
    ],
  },
  
]; 

export default routes;