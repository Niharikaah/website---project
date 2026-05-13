function renderFavourites() {
    const container = document.getElementById('favouritesContainer');
    container.innerHTML = '';

    if (favourites.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 50px; color: #999; font-size: 18px;">No favourite items yet! 💔</p>';
        return;
    }

    favourites.forEach((product, index) => {
        container.innerHTML += `
        <div class="product-card">
            <img src="${product.image}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="brand">${product.brand}</p>
                <p class="description">${product.description}</p>
                <p>₹${product.price}</p>
                <p>⭐ ${product.rating} (${product.reviews} reviews)</p>

                <div class="product-actions">
                    <input type="number" id="favQty${index}" class="qty" value="1" min="1">
                    <button class="like-btn" onclick="toggleFavourite('${product.name}', '${product.category}')">❤️</button>
                </div>

                <button onclick="addToCart('${product.name}',${product.price},document.getElementById('favQty${index}').value)">
                    Add To Cart
                </button>
            </div>
        </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', renderFavourites);
