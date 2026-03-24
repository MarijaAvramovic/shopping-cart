# The Odin Project Shopping Cart

![Alt text](src/assets/Screenshot%202026-03-22%20at%2011.28.44%20AM.png)


* This is my modern, responsive e-commerce storefront project built with React. 

- [Live Demo](https://shopping-cart-odin-project-marija.netlify.app/)

* I have three pages: a home page, a shop page, and a cart page. The user can navigate between the pages with a navigation bar, which is shown on all pages with children in router. 
The homepage has fetched img from picsum.photos.


* On the shop page we have individual card elements for each product. 
An input field which lets a user manually type in how many items they want to buy. 
An increment and decrement button next to it for fine-tuning. 

* When there are items in the cart, the cart page link in the navbar indicate how many items are in users cart. This updates in real time as the user adds or removes items from their cart.

* On the cart page = allow users to increase/decrease the quantity of items in their cart (including removal). 

* Shop items fetched from FakeStore API.

* Used React Testing Library. Snapshot testing with simulate a click event. Testing if elements render for user.vi.mock() API.
Used MemoryRouter for React router.

 
* Steps
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

- [LinkedIN](https://www.linkedin.com/in/marija-avramovic-absolute4one/)