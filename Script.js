let cartItems = 0;
let totalAmount = 0;

function addToCart(price) {
    cartItems++;
    totalAmount += price;

    document.getElementById("cartCount").innerText = cartItems;
    document.getElementById("totalItems").innerText = cartItems;
    document.getElementById("totalAmount").innerText = totalAmount;

    alert("Product added to cart successfully!");
}
