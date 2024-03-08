const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getShoppingCart = () =>{
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductLocalStorage = (product, quantity) =>{
    cart = getShoppingCart();
    cart [product] = quantity;
    const cartStringified = JSON.stringify(cart);
    // console.log(cartStringified);
    localStorage.setItem('cart', cartStringified);
}

const displayProductFromLocalStorage = () =>{
    const savedCart = getShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
}
displayProductFromLocalStorage();