// script.js

// Global Variables
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
]; // List of available products

const cart = []; // Cart array to store selected products
const totalPriceElement = document.getElementById("total-price"); // Element to display total price
const cartItemsElement = document.getElementById("cart-items"); // Element to display cart items

// Wait for the DOM to load before executing
document.addEventListener("DOMContentLoaded", () => {

    // Function to update the cart display and calculate the total price
    const updateCart = () => {
        // Calculate the total price by summing up the prices of products in the cart
        const total = cart.reduce((sum, product) => sum + product.price, 0);
        
        // Update the total price in the DOM
        totalPriceElement.textContent = total;

        // Clear the current list of cart items
        cartItemsElement.innerHTML = '';

        // Loop through each product in the cart and display it
        cart.forEach(item => {
            const li = document.createElement("li"); // Create a new list item
            li.textContent = `${item.name} - $${item.price}`; // Set the text content to show product name and price
            cartItemsElement.appendChild(li); // Append the list item to the cart items list
        });
    };

    // Function to handle adding a product to the cart
    const handleAddToCart = (event) => {
        // Get the product ID from the data-id attribute of the clicked product
        const productId = event.target.closest(".product").dataset.id;

        // Find the product in the products array by its ID
        const product = products.find(p => p.id === parseInt(productId));

        if (product) {
            // If product is found, add it to the cart
            cart.push(product);
            // Update the cart display with the new product and total price
            updateCart();
        }
    };

    // Function to handle the checkout process
    const handleCheckout = () => {
        // If the cart is empty, display an alert
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            // Display a thank you message with the total price and clear the cart
            alert(`Thank you for your purchase! Total: $${totalPriceElement.textContent}`);
            cart.length = 0; // Empty the cart array
            updateCart(); // Update the cart display (reset the items and total)
        }
    };

    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", handleAddToCart); // Call the function when button is clicked
    });

    // Add event listener to the checkout button
    const checkoutButton = document.getElementById("checkout-btn");
    checkoutButton.addEventListener("click", handleCheckout); // Call the function when checkout button is clicked

});
