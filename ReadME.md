
# eCommerce Shopping System
This script simulates an eCommerce shopping system. It contains functions to display products, add items to the cart, display the cart, and start the shopping process.

## Usage
1. Ensure you have Node.js installed on your system.
2. Clone or download the repository containing this script.
3. Open a terminal or command prompt in the directory containing the script.
4. Run the script using the command node <filename.js>.


## Code Explanation
Initial Setup
The script requires the prompt-sync in order to accept input. It initializes an array named ecommerceProduct containing product objects with properties such as productID, productName, productPrice, and productQty.
An empty array cart is created to hold cart items.


## Functions
1. displayProducts()
This function loops through the ecommerceProduct array and displays the product ID, name, and price.
2. addToCart(itemID, quantity)
a. This function adds a specified quantity of a product to the cart.
It searches for the product with the given itemID in the ecommerceProduct array.
b. If the product is found and the requested quantity is available, it adds the product to the cart array.
c. If the product is not found or the requested quantity is not available, appropriate error messages are displayed.
3. displayCart()
This function displays the items currently in the cart along with their details (name, price, and quantity).
It calculates and displays the total price of all items in the cart.
4. startShopping()
This function initiates the shopping process by displaying available products and prompting the user for input.
Users can add products to the cart by entering the product ID and quantity.
Typing "checkout" ends the shopping process and displays the contents of the cart.