# React Shopping Cart App

This project is a **Single Page Application (SPA)** built with **React**, **TypeScript**, and **Tailwind CSS**. The app simulates a shopping cart where users can add, remove, and view product details. It uses the **Context API** for state management and **React Router DOM** for navigation. The products are fetched from a fake API, powered by `json-server`.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)


## Features

- **Add/Remove Products to Cart**: Users can browse products and add or remove them from the cart.
- **View Product Details**: Clicking on a product will show detailed information.
- **Responsive Design**: The application is fully responsive and works on all screen sizes.
- **Context API**: State management for products and cart is handled using React’s Context API.
- **Client-side Routing**: Navigation between pages is seamless, thanks to React Router DOM.
  
## Demo

You can see the app running by following these steps:

1. Install `json-server` to simulate the backend.
2. Run `json-server` and the React app simultaneously (instructions below).

## Technologies

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better development experience.


## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v12.x or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/VitorTorquato/PetCare
   cd PetCare

2. Install the dependencies:
  npm install 

3. Install json-server globally to simulate the backend:
    npm install -g json-server

5.In a second terminal, run json-server to serve the product data:
   json-server --watch data.json

4. In one terminal:
  npm run dev
