<h1 align="center">
	Apna Shop 🛒   
</h1>
<h4 align="center">Welcome to Apna Shop, a full-stack e-commerce web application built from scratch using the MERN Stack (ReactJS, NodeJS, ExpressJS, MongoDB). Apna Shop is designed to provide users with a seamless and feature-rich online shopping experience.</h4>

<p align="center">
    <img src="https://img.shields.io/badge/%E2%9D%A4-Made%20with%20Love-blue" alt="Gitter">
</p>

<p align="center">
  • <a href="#key-features">Key Features</a> 
  • <a href="#how-to-use">How To Use</a> 
  • <a href="https://mern-ecommerce-gold.vercel.app">Live Demo</a> 
  </p>

<p align="center">
<img src="https://github.com/Pravin69/mern-ecommerce/blob/main/Server/demo/app_ss.jpeg?raw=true" alt="Apna Shop Capture" style="max-width: 100% !important">
</p>

## Key Features ✨

- **User Authentication** :-

  - Implemented a secure session-based authentication strategy using PassportJs for enhanced user account protection.

- **Global State Management** :-

  - Utilized Redux to manage the global state of the application, ensuring seamless data flow and a responsive user interface.

- **Payment Management with Stripe Webhook** :-

  - Integrated a Stripe webhook to efficiently manage the payment flow on the backend, ensuring secure and reliable transactions.

- **MVC Architecture** :-

  - Followed a well-organized MVC architecture for the backend, enhancing code structure and maintainability.

- **Email Notifications** :-

  - Implemented email functionality to keep users informed about their orders and account updates.

- **Invoice Feature** :-

  - Added an invoice feature for users upon the successful order of a product, providing a comprehensive transaction summary.

- **User Account Management** :-

  - Users can easily create or update their accounts, offering a personalized and user-centric experience.

- **Product Filtering and Sorting** :-

  - Users can filter products by category and brands, and also sort by price and rating for a tailored shopping experience.

- **Shopping Cart Management** :-

  - Users can add or remove products from the cart, streamlining the shopping process.

- **Multiple Payment Methods** :-

  - Facilitated the use of various payment methods, including cash or card during the checkout process.

- **Pagination for Product Listings** :-

  - Integrated pagination functionality for product listings, simplifying navigation through a vast catalog.

- **Admin Portal** :-
  - Admins can log in to edit or add products and view/update order statuses, ensuring efficient business operations.

## How To Use ❓

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line :

```
# Clone this repository
  git clone https://github.com/Pravin69/mern-ecommerce.git

# Go into the repository
  cd mern-ecommerce

# Install client dependencies
  cd client
  npm install

# Install server dependencies
  cd server
  npm install

# Configure environment variables by creating .env file in the server directory and copy the content of env.example file in .env file, and fill it with your own secrets.
  cp env.example .env

# Create a MongoDB database and name it 'mern_app', You can use MongoDB Atlas cloud free tier.

# Start server in a terminal
  cd server/
  npm start

# Start client in another terminal while server is running.
  cd client/
  npm run dev

# Run the app
  npm start
```

## You may also like... 🙂

- [Share-and-Fun](https://github.com/Pravin69/Share-and-Fun-Web-app) - A social media web-app
- [Movie-remix](https://github.com/Pravin69/movie-remix) - A movie recommender app
