const productos = [
    {id: "0001", nombre: "Sombrero Dagr", precio: 19.990},
    {id: "0002", nombre: "Mochila de Cuero Idun", precio: 109.990},
    {id: "0003", nombre: "Bolso Tyr", precio: 179.990}
];

function subirProductos() {
    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";
    productos.forEach(producto => {
        const newProduct = document.createElement("div");
        newProduct.innerHTML = `
            <p>Nombre: ${producto.nombre} - Precio: $${producto.precio}</p>
            <button onclick="newWl('${producto.id}')" class="agregar">Agregar a Wishlist</button>
        `;
        catalogo.appendChild(newProduct);
    });
}

function newWl(productoID) {
    productos.forEach(producto => {
        if (producto.id === productoID) {
            addToWishlist(producto);
        }
    });
}

const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistDOM();
    console.log(`Producto agregado: ${product.nombre}`);
};

function updateWishlistDOM() {
    const wishlistCont = document.getElementById('wishlist');
    wishlistCont.innerHTML = '';
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.forEach(producto => {
        const productElement = document.createElement('div');
        productElement.textContent = `Nombre: ${producto.nombre} - Precio: $${producto.precio}`;
        wishlistCont.appendChild(productElement);
    });
}

const clear = document.getElementById("borraWL");
clear.addEventListener('click', () => {
    localStorage.removeItem('wishlist');
    updateWishlistDOM();
});

document.addEventListener('DOMContentLoaded', () => {
    subirProductos();
    updateWishlistDOM();
});
