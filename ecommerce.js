   const prompt = require('prompt-sync')({sigint: true})
   const ecommerceProduct = [
        {
            productID: 1,
            productName: "Apple",
            productPrice: 500,
            productQty: 20
        },
        {
            productID: 2,
            productName: "Indomie",
            productPrice: 350,
            productQty: 50
        },
        {
            productID: 3,
            productName: "Rice",
            productPrice: 250,
            productQty: 2000
        },
        {
            productID: 4,
            productName: "Garri",
            productPrice: 500,
            productQty: 20
        },
        {
            productID: 5,
            productName: "Spaghetti",
            productPrice: 850,
            productQty: 45
        },
        {
            productID: 6,
            productName: "Beans",
            productPrice: 250,
            productQty: 230
        },
        {
            productID: 7,
            productName: "Orange",
            productPrice: 100,
            productQty: 30
        },
        {
            productID: 8,
            productName: "Watermelon",
            productPrice: 1500,
            productQty: 10
        },
        {
            productID: 9,
            productName: "Banana",
            productPrice: 500,
            productQty: 15
        },
        {
            productID: 10,
            productName: "Pineapple",
            productPrice: 2500,
            productQty: 5
        }, 
        {
            productID: 11,
            productName: "Milk",
            productPrice: 3500,
            productQty: 55
        },
        {
            productID: 12,
            productName: "Milo",
            productPrice: 500,
            productQty: 20
        },
        {
            productID: 13,
            productName: "Mango",
            productPrice: 50,
            productQty: 17
        },
        {
            productID: 14,
            productName: "Avocado",
            productPrice: 200,
            productQty: 23
        },
        {
            productID: 15,
            productName: "Cherry",
            productPrice: 270,
            productQty: 24
        }
]

// arrays to hold all the cart items
const cart = []

// function to display products
    function displayProducts(){
        for (const product of ecommerceProduct) {
         console.log(`${product.productID} ${product.productName} and price is ${product.productPrice}`)
             }
 }


// displayProducts()

// function to add to cart 
function addToCart(itemID, quantity) {
    const selectedProduct = ecommerceProduct.find((item) => item.productID === itemID)
    if (selectedProduct) {
        if (selectedProduct.productQty >= quantity) {
            cart.push({
                productName: selectedProduct.productName,
                productPrice: selectedProduct.productPrice,
                quantity: quantity 
            })
            console.log("Product added to cart.")
        } else {
            console.log("Sorry, the quantity you requested is not available.")
        }
    } else {
        console.log("Sorry, the product ID does not exist.")
    }
}




addToCart(2, 5)

function displayCart(){
    for(const item of cart){
        console.log(item)
        console.log(`Our product name is  + ${item}`)
    }

    // using the the reduce function to get the total price of the items in the cart
    const total = cart.reduce((total, item) => total + item.productPrice * item.quantity, 0) 
    console.log(`The total price of the Products you puchased is $ ${total}`)
}

displayCart()

function startShopping(){
    console.log("Welcome to the DigiShops built by Js Module guys....")
    console.log("These are the available Items in stock")
    displayProducts()

    while(true){
        
        const config = {
            promptMessage: "Enter Your Preference: "
        }
        const choice = prompt(config.promptMessage)

        if(choice.toLowerCase() === "checkout"){
            displayCart()
            break;
        }
        
        const productId = parseInt(choice);

    }

}

startShopping()