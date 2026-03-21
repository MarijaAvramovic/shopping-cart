Setup project + routing
Create pages (empty first)
Build Navbar
Fetch & display products
Add "Add to Cart" logic
Build Cart page
Add quantity controls
Show cart count in navbar
Test everything
Style
Deploy

- This is my modern, responsive e-commerce storefront project built with React. 

- I have three pages: a home page, a shop page, and a cart page. The user can navigate between the pages with a navigation bar, which is shown on all pages with children in router. 
The homepage has fetched img from picsum.photos.


- On the shop page we have individual card elements for each product. 
An input field which lets a user manually type in how many items they want to buy. 
An increment and decrement button next to it for fine-tuning. 

- When there are items in the cart, the cart page link in the navbar indicate how many items are in users cart. This updates in real time as the user adds or removes items from their cart.

- On the cart page = allow users to increase/decrease the quantity of items in their cart (including removal). 

Fetch your shop items from FakeStore API or something similar.
Clear out any missing in props validation errors in your app!
Make sure to test your app thoroughly using the React Testing Library. Be careful not to test react-router-dom directly, since it is an external library and the developers working on it must have tested the library already.
As usual, style your application so you can show it off! You have a host of options provided already.
Lastly, it’s time to deploy it! Depending on what hosting solution you’re using, you may need some additional configuration so that your routing is handled correctly as a single page application (SPA).