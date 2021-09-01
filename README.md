# onlineStoreFullStack
<h1>Wheatley Studios Online Store</h1>

![screenshot login page](/assets/readme/wheatleyHome.png)

<p>Wheatley studios is a fictional online store where you can view products, modify your cart (add, change quantities, remove items), create an account, sign in and sign up to the newsletter.

<p>Created as a final project demonstrating full stack development for the CodeSpace boot camp. Seperating the front end from the back by using APIs and their endpoints</p>

<h1>Main Page</h1>

<p>Scrolling down the main page will bring up various products on the store that you can click on a view</p>
<p>You can also subscribe to our news letter, this will save your email to the database</p>

<h1> Header Menu </h1>

<p>Clicking on the menu button will bring up the navigation menu for the various pages on the site.
Use the header menu to navigate.</p>

<p>It will also show you the quantity of items that are in you cart</p>

![screenshot login page](/assets/readme/menu.png)

<h1>Products</h1>

<p>When clicking on a view product button it will take you to the following page. This is where you can find out more about the product, zoom in on images, choose a finish and quantity then add them to your cart</p>

<p>The page is a template and auto populates the page by querying the database for the id of the product that was allowcated to the button</p>

![screenshot login page](/assets/readme/productInfo.png)

<h1>Login in and Creating an account</h1>

<p>When creating an account the api will check the database to see if the username already exists and will disable the button if it does exist</p>

<p>When creating a password the password will get hashed when saved to the database</p>

<h1>Cart</h1>

<p>From your cart you can view all the products that you have added, you can also update quantities and remove items.
This is done by using the local storage and not updating the database</p>

![screenshot login page](/assets/readme/cart.png)

<h1>Checkout</h1>

<p>When you click on the checkout button from the cart but you are not signed in you will be sent to the login page/create account and then back to the checkout</p>

<p>From the checkout you can add your delivery and billing address and then place your order</p>

<h1>Get in touch</h1>
<p>This page is used as a means of contacting us with any questions. It also shows our location by using the Google maps API</p>