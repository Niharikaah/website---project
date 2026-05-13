let cart = [];
let favourites = [];

function initializeShared() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    const savedFav = localStorage.getItem('favourites');
    if (savedFav) {
        favourites = JSON.parse(savedFav);
    }
}

function addToCart(name, price, qty) {
    cart.push({ name, price, qty: parseInt(qty) });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added To Cart');
}

function toggleFavourite(productName, category) {
    const idx = favourites.findIndex(f => f.name === productName && f.category === category);
    if (idx === -1) {
        if (typeof products !== 'undefined' && products[category]) {
            const product = products[category].find(p => p.name === productName);
            if (product) {
                favourites.push({ ...product, category });
                localStorage.setItem('favourites', JSON.stringify(favourites));
                alert('Added to Favourites ❤️');
            }
        }
    } else {
        favourites.splice(idx, 1);
        localStorage.setItem('favourites', JSON.stringify(favourites));
        alert('Removed from Favourites');
    }
    if (document.getElementById('favouritesContainer') && typeof renderFavourites === 'function') {
        renderFavourites();
    } else if (document.getElementById('productsContainer') && typeof applyFilters === 'function') {
        applyFilters();
    }
}

document.addEventListener('DOMContentLoaded', initializeShared);
