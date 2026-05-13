let currentCategory = '';
let isAllProducts = false;

function getAllProducts() {
    const all = [];
    for (const [cat, items] of Object.entries(products)) {
        items.forEach(p => all.push({ ...p, _category: cat }));
    }
    return all;
}

function displayFilteredProducts(filteredProducts) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    if (filteredProducts.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 50px; color: #999; font-size: 18px;">No products match your filters! 🔍</p>';
        return;
    }

    filteredProducts.forEach((product, index) => {
        const prodCategory = product._category || currentCategory;
        const isFavourited = favourites.some(fav => fav.name === product.name && fav.category === prodCategory);
        const heartIcon = isFavourited ? '❤️' : '🤍';

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
                    <input type="number" id="qty${index}" class="qty" value="1" min="1">
                    <button class="like-btn" onclick="toggleFavourite('${product.name}', '${prodCategory}')">${heartIcon}</button>
                </div>
                <button onclick="addToCart('${product.name}',${product.price},document.getElementById('qty${index}').value)">
                    Add To Cart
                </button>
            </div>
        </div>
        `;
    });
}

function applyFilters() {
    const productsList = isAllProducts ? getAllProducts() : [...products[currentCategory]];
    let filteredProducts = [...productsList];

    if (currentFilters.brand !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.brand === currentFilters.brand);
    }

    if (currentFilters.rating !== 'all') {
        const minRating = parseFloat(currentFilters.rating);
        filteredProducts = filteredProducts.filter(p => p.rating >= minRating);
    }

    if (currentFilters.priceRange !== 'all') {
        switch (currentFilters.priceRange) {
            case 'under-500':
                filteredProducts = filteredProducts.filter(p => p.price < 500);
                break;
            case '500-2000':
                filteredProducts = filteredProducts.filter(p => p.price >= 500 && p.price <= 2000);
                break;
            case '2000-5000':
                filteredProducts = filteredProducts.filter(p => p.price >= 2000 && p.price <= 5000);
                break;
            case '5000-10000':
                filteredProducts = filteredProducts.filter(p => p.price >= 5000 && p.price <= 10000);
                break;
            case 'above-10000':
                filteredProducts = filteredProducts.filter(p => p.price > 10000);
                break;
        }
    }

    if (currentFilters.priceSort !== 'none') {
        filteredProducts.sort((a, b) => {
            if (currentFilters.priceSort === 'low-to-high') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    }

    displayFilteredProducts(filteredProducts);
}

function resetFilters() {
    currentFilters = {
        brand: 'all',
        rating: 'all',
        priceSort: 'none',
        priceRange: 'all'
    };

    document.getElementById('brandFilter').value = 'all';
    document.getElementById('ratingFilter').value = 'all';
    document.getElementById('priceSort').value = 'none';
    document.getElementById('priceRangeFilter').value = 'all';

    const productsList = isAllProducts ? getAllProducts() : products[currentCategory];
    displayFilteredProducts(productsList);
}

function updateBrandOptions() {
    const brandSelect = document.getElementById('brandFilter');
    const productsList = isAllProducts ? getAllProducts() : products[currentCategory];
    const brands = [...new Set(productsList.map(p => p.brand))];

    brandSelect.innerHTML = '<option value="all">All Brands</option>';
    brands.forEach(brand => {
        brandSelect.innerHTML += `<option value="${brand}">${brand}</option>`;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const catAttr = document.querySelector('.page.active').dataset.category;

    if (!catAttr || catAttr === 'all') {
        isAllProducts = true;
        document.getElementById('categoryTitle').textContent = 'All Products';
        updateBrandOptions();
        resetFilters();
        return;
    }

    if (!products[catAttr]) {
        window.location.href = 'home.html';
        return;
    }

    currentCategory = catAttr;
    document.getElementById('categoryTitle').textContent = catAttr;
    updateBrandOptions();
    resetFilters();
});
