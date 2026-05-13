
let users = [];
let cart = [];
let favourites = [];
let currentCategory = "";
let paymentTimer;
let totalAmount = 0;
let currentUser = null;
let isDarkMode = true;
let currentFilters = {
    brand: 'all',
    rating: 'all',
    priceSort: 'none',
    priceRange: 'all'
};

// Load users and current user from localStorage
function initializeApp() {
    const savedUsers = localStorage.getItem('users');
    if(savedUsers) {
        users = JSON.parse(savedUsers);
    }
    
    // Always start with login page - don't restore logged-in sessions
    currentUser = null;
    showPage('loginPage');

    const savedFavourites = localStorage.getItem('favourites');
    if(savedFavourites) {
        favourites = JSON.parse(savedFavourites);
    }

    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        isDarkMode = savedTheme === 'dark';
        applyTheme();
    }
}

const products = {

    Gaming: [
        {
            name: "Gaming Keyboard",
            price: 2500,
            rating: 4.5,
            reviews: 234,
            brand: "Razer",
            description: "Mechanical gaming keyboard with RGB lighting and ultra-responsive keys. Perfect for competitive gaming with customizable macro keys.",
            image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
        },
        {
            name: "Gaming Mouse",
            price: 1200,
            rating: 4.3,
            reviews: 156,
            brand: "Logitech",
            description: "High precision gaming mouse with 16000 DPI sensor and ergonomic design. Features 7 programmable buttons for ultimate control.",
            image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
        },
        {
            name: "Gaming Headset",
            price: 3500,
            rating: 4.6,
            reviews: 312,
            brand: "SteelSeries",
            description: "Immersive surround sound gaming headset with noise cancellation. Comfortable over-ear design for extended gaming sessions.",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        },
        {
            name: "Gaming Monitor 144Hz",
            price: 18000,
            rating: 4.7,
            reviews: 428,
            brand: "ASUS",
            description: "27-inch 144Hz gaming monitor with 1ms response time. IPS panel for vibrant colors and fast-paced gameplay.",
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46"
        },
        {
            name: "Gaming Chair",
            price: 8500,
            rating: 4.4,
            reviews: 189,
            brand: "Secretlab",
            description: "Ergonomic racing-style gaming chair with lumbar support. Adjustable armrests and tilt mechanism for comfort.",
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267"
        },
        {
            name: "Graphics Card RTX 3070",
            price: 45000,
            rating: 4.8,
            reviews: 567,
            brand: "NVIDIA",
            description: "High-performance graphics card for smooth 4K gaming. 8GB GDDR6 memory and advanced cooling system.",
            image: "https://images.unsplash.com/photo-1591290621437-f347dc74c1d7"
        },
        {
            name: "Gaming Console PS5",
            price: 55000,
            rating: 4.9,
            reviews: 1234,
            brand: "Sony",
            description: "Next-generation gaming console with ultra-high speed SSD and 4K gaming capabilities.",
            image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
        },
        {
            name: "Gaming Controller",
            price: 4500,
            rating: 4.5,
            reviews: 345,
            brand: "Microsoft",
            description: "Wireless gaming controller with haptic feedback and adaptive triggers for immersive gameplay.",
            image: "https://images.unsplash.com/photo-1592840496694-26d28d37818d"
        }
    ],

    Electronics: [
        {
            name: "Smartphone",
            price: 25000,
            rating: 4.7,
            reviews: 892,
            brand: "Samsung",
            description: "Latest flagship smartphone with 5G connectivity, 120Hz AMOLED display, and advanced camera system.",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },
        {
            name: "Laptop",
            price: 65000,
            rating: 4.8,
            reviews: 523,
            brand: "Dell",
            description: "Powerful laptop with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for work and gaming.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        },
        {
            name: "Wireless Earbuds",
            price: 4500,
            rating: 4.5,
            reviews: 678,
            brand: "Apple",
            description: "True wireless earbuds with active noise cancellation and 8-hour battery life. Crystal clear audio quality.",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        },
        {
            name: "Tablet",
            price: 18000,
            rating: 4.6,
            reviews: 445,
            brand: "Apple",
            description: "10-inch tablet with high-resolution display and powerful processor. Great for multimedia and productivity.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
        },
        {
            name: "Smart Watch",
            price: 12000,
            rating: 4.4,
            reviews: 334,
            brand: "Samsung",
            description: "Feature-rich smartwatch with fitness tracking, heart rate monitor, and 5-day battery life.",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        },
        {
            name: "Portable Speaker",
            price: 3500,
            rating: 4.7,
            reviews: 567,
            brand: "JBL",
            description: "Waterproof portable speaker with 360-degree sound. Bluetooth 5.0 and 12-hour battery life.",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
        },
        {
            name: "Wireless Router",
            price: 2800,
            rating: 4.3,
            reviews: 234,
            brand: "TP-Link",
            description: "High-speed wireless router with WiFi 6 technology. Covers up to 3000 sq ft with stable connection.",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
        },
        {
            name: "Power Bank",
            price: 1500,
            rating: 4.6,
            reviews: 456,
            brand: "Anker",
            description: "20000mAh power bank with fast charging technology. Charges multiple devices simultaneously.",
            image: "https://images.unsplash.com/photo-1609594040184-9267984920e6"
        }
    ],

    Fashion: [
        {
            name: "Jacket",
            price: 1800,
            rating: 4.2,
            reviews: 234,
            brand: "Levi's",
            description: "Premium winter jacket made from high-quality leather. Water-resistant and highly durable.",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        },
        {
            name: "T-Shirt",
            price: 450,
            rating: 4.5,
            reviews: 567,
            brand: "Nike",
            description: "Comfortable cotton t-shirt available in multiple colors. Perfect for casual wear.",
            image: "https://images.unsplash.com/photo-1521572215317-7b72f4af27e7"
        },
        {
            name: "Jeans",
            price: 1200,
            rating: 4.6,
            reviews: 445,
            brand: "Levi's",
            description: "Stylish blue jeans with perfect fit. Durable denim fabric and comfortable stretch.",
            image: "https://images.unsplash.com/photo-1542272604-787c62d465d1"
        },
        {
            name: "Sneakers",
            price: 3500,
            rating: 4.7,
            reviews: 723,
            brand: "Nike",
            description: "Trendy casual sneakers with cushioned sole. Perfect for everyday wear and sports.",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        },
        {
            name: "Hoodie",
            price: 1500,
            rating: 4.4,
            reviews: 312,
            brand: "Adidas",
            description: "Soft and warm hoodie perfect for cold weather. Available in multiple colors.",
            image: "https://images.unsplash.com/photo-1556821840-a63b7f73d996"
        },
        {
            name: "Sports Shorts",
            price: 600,
            rating: 4.5,
            reviews: 189,
            brand: "Nike",
            description: "Breathable sports shorts with quick-dry technology. Ideal for gym and outdoor activities.",
            image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b"
        },
        {
            name: "Watch",
            price: 2500,
            rating: 4.3,
            reviews: 278,
            brand: "Fossil",
            description: "Elegant analog watch with stainless steel band. Perfect for formal and casual occasions.",
            image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314"
        },
        {
            name: "Sunglasses",
            price: 800,
            rating: 4.4,
            reviews: 345,
            brand: "Ray-Ban",
            description: "UV protection sunglasses with polarized lenses. Stylish design for outdoor activities.",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f"
        }
    ],

    Sports: [
        {
            name: "Football",
            price: 900,
            rating: 4.4,
            reviews: 267,
            brand: "Nike",
            description: "Professional-grade football with superior grip and durability. Perfect for competitive play.",
            image: "https://images.unsplash.com/photo-1508098682722-e99c643e7485"
        },
        {
            name: "Basketball",
            price: 1500,
            rating: 4.6,
            reviews: 389,
            brand: "Spalding",
            description: "Regulation basketball with excellent bounce and control. Suitable for indoor and outdoor courts.",
            image: "https://images.unsplash.com/photo-1546519638-68711109c7f4"
        },
        {
            name: "Tennis Racket",
            price: 3500,
            rating: 4.7,
            reviews: 234,
            brand: "Wilson",
            description: "Lightweight tennis racket with advanced string technology. Perfect for beginners and professionals.",
            image: "https://images.unsplash.com/photo-1554931670-4ebf1f29fcd0"
        },
        {
            name: "Yoga Mat",
            price: 800,
            rating: 4.5,
            reviews: 456,
            brand: "Manduka",
            description: "Non-slip yoga mat with extra cushioning. Perfect for yoga, pilates, and floor exercises.",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
        },
        {
            name: "Dumbbell Set",
            price: 4500,
            rating: 4.8,
            reviews: 567,
            brand: "Bowflex",
            description: "Complete dumbbell set with adjustable weights. Ideal for home gym workouts.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
        },
        {
            name: "Running Shoes",
            price: 4000,
            rating: 4.6,
            reviews: 678,
            brand: "Nike",
            description: "Professional running shoes with gel cushioning. Provides excellent support and comfort.",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        },
        {
            name: "Swimming Goggles",
            price: 350,
            rating: 4.3,
            reviews: 123,
            brand: "Speedo",
            description: "Anti-fog swimming goggles with UV protection. Comfortable fit for extended swimming sessions.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
        },
        {
            name: "Cycling Helmet",
            price: 1200,
            rating: 4.5,
            reviews: 234,
            brand: "Bell",
            description: "Lightweight cycling helmet with ventilation system. Provides maximum safety and comfort.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
        }
    ],

    Grocery: [
        {
            name: "Organic Fruits Pack",
            price: 450,
            rating: 4.6,
            reviews: 523,
            brand: "Organic Farms",
            description: "Fresh organic fruits pack with seasonal selection. Pesticide-free and nutritious.",
            image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf"
        },
        {
            name: "Organic Vegetables",
            price: 350,
            rating: 4.5,
            reviews: 412,
            brand: "Green Valley",
            description: "Fresh organic vegetables from local farms. Perfect for healthy meals.",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
        },
        {
            name: "Olive Oil",
            price: 800,
            rating: 4.7,
            reviews: 289,
            brand: "Extra Virgin",
            description: "Premium extra virgin olive oil rich in antioxidants. Perfect for cooking and salads.",
            image: "https://images.unsplash.com/photo-1599599810694-dc4dd71de8db"
        },
        {
            name: "Organic Rice",
            price: 250,
            rating: 4.6,
            reviews: 334,
            brand: "Golden Grain",
            description: "Premium organic basmati rice with excellent texture and fragrance.",
            image: "https://images.unsplash.com/photo-1599599810627-4b94ddf96c17"
        },
        {
            name: "Honey",
            price: 400,
            rating: 4.8,
            reviews: 567,
            brand: "Pure Nature",
            description: "Pure raw honey with natural enzymes and nutrients. Great for health and sweetening.",
            image: "https://images.unsplash.com/photo-1587049352251-2e67b731d96a"
        },
        {
            name: "Almonds",
            price: 600,
            rating: 4.7,
            reviews: 445,
            brand: "NutriLife",
            description: "Premium quality almonds rich in protein and healthy fats. Perfect snack for health-conscious.",
            image: "https://images.unsplash.com/photo-1585518419759-113e89dd4e10"
        },
        {
            name: "Green Tea",
            price: 180,
            rating: 4.4,
            reviews: 156,
            brand: "Zen Tea",
            description: "Premium green tea leaves with antioxidant properties. Helps in relaxation and health.",
            image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
        },
        {
            name: "Protein Powder",
            price: 1200,
            rating: 4.5,
            reviews: 234,
            brand: "MuscleMax",
            description: "High-quality whey protein powder for muscle building and recovery. 25g protein per serving.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
        }
    ],

    "Home & Kitchen": [
        {
            name: "Coffee Maker",
            price: 2500,
            rating: 4.6,
            reviews: 345,
            brand: "Nespresso",
            description: "Automatic coffee maker with programmable settings. Brews perfect coffee every time.",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
        },
        {
            name: "Blender",
            price: 1800,
            rating: 4.4,
            reviews: 278,
            brand: "Oster",
            description: "High-power blender with multiple speed settings. Perfect for smoothies and food processing.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
        },
        {
            name: "Air Fryer",
            price: 3500,
            rating: 4.7,
            reviews: 456,
            brand: "Philips",
            description: "Healthy air fryer with digital controls. Fry, bake, and roast with little to no oil.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
        },
        {
            name: "Microwave Oven",
            price: 4200,
            rating: 4.5,
            reviews: 389,
            brand: "LG",
            description: "Convection microwave with multiple cooking modes. Smart inverter technology for even cooking.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
        },
        {
            name: "Vacuum Cleaner",
            price: 2800,
            rating: 4.3,
            reviews: 234,
            brand: "Dyson",
            description: "Cordless vacuum cleaner with powerful suction. Lightweight and easy to use.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
        },
        {
            name: "Water Purifier",
            price: 3200,
            rating: 4.6,
            reviews: 345,
            brand: "Kent",
            description: "Advanced RO water purifier with UV technology. Provides pure drinking water.",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b"
        },
        {
            name: "Rice Cooker",
            price: 1500,
            rating: 4.4,
            reviews: 267,
            brand: "Panasonic",
            description: "Automatic rice cooker with fuzzy logic technology. Cooks perfect rice every time.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
        },
        {
            name: "Toaster",
            price: 800,
            rating: 4.2,
            reviews: 189,
            brand: "Hamilton Beach",
            description: "2-slice toaster with adjustable browning control. Quick and even toasting.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
        }
    ],

    "Beauty & Personal Care": [
        {
            name: "Face Moisturizer",
            price: 450,
            rating: 4.5,
            reviews: 345,
            brand: "Cetaphil",
            description: "Gentle daily moisturizer for all skin types. Hydrates and nourishes the skin.",
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
        },
        {
            name: "Shampoo",
            price: 280,
            rating: 4.4,
            reviews: 456,
            brand: "Head & Shoulders",
            description: "Anti-dandruff shampoo with menthol. Controls dandruff and soothes scalp.",
            image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07"
        },
        {
            name: "Perfume",
            price: 1200,
            rating: 4.6,
            reviews: 567,
            brand: "Dior",
            description: "Luxury fragrance with floral notes. Long-lasting and elegant scent.",
            image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
        },
        {
            name: "Lipstick",
            price: 350,
            rating: 4.3,
            reviews: 234,
            brand: "MAC",
            description: "Long-lasting matte lipstick in multiple shades. Professional quality makeup.",
            image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
        },
        {
            name: "Hair Dryer",
            price: 1800,
            rating: 4.5,
            reviews: 389,
            brand: "Dyson",
            description: "Professional hair dryer with ionic technology. Quick drying with less damage.",
            image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
        },
        {
            name: "Face Wash",
            price: 220,
            rating: 4.4,
            reviews: 278,
            brand: "Neutrogena",
            description: "Gentle face wash for daily cleansing. Removes impurities without drying skin.",
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
        },
        {
            name: "Deodorant",
            price: 150,
            rating: 4.2,
            reviews: 345,
            brand: "Axe",
            description: "Long-lasting deodorant with fresh fragrance. Provides all-day protection.",
            image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07"
        },
        {
            name: "Nail Polish",
            price: 120,
            rating: 4.3,
            reviews: 156,
            brand: "OPI",
            description: "Quick-dry nail polish with chip-resistant formula. Salon-quality results at home.",
            image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
        }
    ],

    Books: [
        {
            name: "The Alchemist",
            price: 350,
            rating: 4.8,
            reviews: 1234,
            brand: "HarperCollins",
            description: "Inspirational novel about following your dreams. A modern classic by Paulo Coelho.",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
        },
        {
            name: "Atomic Habits",
            price: 450,
            rating: 4.9,
            reviews: 2345,
            brand: "Random House",
            description: "Guide to building good habits and breaking bad ones. Science-backed strategies.",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
        },
        {
            name: "Rich Dad Poor Dad",
            price: 380,
            rating: 4.7,
            reviews: 1876,
            brand: "Warner Books",
            description: "Personal finance classic about building wealth. Changes how you think about money.",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
        },
        {
            name: "The Psychology of Money",
            price: 420,
            rating: 4.6,
            reviews: 1456,
            brand: "Harriman House",
            description: "Understanding the strange ways people think about money. Timeless lessons.",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
        },
        {
            name: "Sapiens",
            price: 550,
            rating: 4.8,
            reviews: 2341,
            brand: "Harper",
            description: "Brief history of humankind. From the Stone Age to the modern age.",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
        },
        {
            name: "Think and Grow Rich",
            price: 320,
            rating: 4.5,
            reviews: 987,
            brand: "The Ralston Society",
            description: "Success principles that have inspired millions. Classic personal development book.",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
        },
        {
            name: "The Power of Now",
            price: 380,
            rating: 4.6,
            reviews: 1456,
            brand: "New World Library",
            description: "Spiritual guide to living in the present moment. Eckhart Tolle's masterpiece.",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
        },
        {
            name: "Dune",
            price: 480,
            rating: 4.7,
            reviews: 1876,
            brand: "Ace Books",
            description: "Epic science fiction novel set on the desert planet Arrakis. Winner of Hugo Award.",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
        }
    ]
};

function showPage(pageId) {

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
}

function signup() {

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if(username === '' || email === '' || password === '') {
        alert('Please fill all fields');
        return;
    }

    // Check if username already exists
    if(users.find(u => u.username === username)) {
        alert('Username already exists');
        return;
    }

    users.push({username, email, password});

    // Save users to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account Created Successfully');

    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';

    showPage('loginPage');
}

function login() {

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if(username === '' || password === '') {
        alert('Please fill all fields');
        return;
    }

    const user = users.find(u => u.username === username && u.password === password);

    if(user) {
        currentUser = user;
        // Do NOT save to localStorage - user should need to login on every page load
        
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';

        showPage('homePage');
    }

    else {
        alert('Invalid Credentials');
    }
}

function logout() {
    currentUser = null;
    // Remove current user from localStorage
    localStorage.removeItem('currentUser');
    cart = [];
    showPage('loginPage');
}

function openCategory(category) {

    currentCategory = category;

    document.getElementById('categoryTitle').innerText = category;
    
    // Update brand options for the current category
    updateBrandOptions();
    
    // Reset filters when opening a new category
    resetFilters();
    
    // Display all products initially
    displayFilteredProducts(products[category]);

    showPage('productsPage');
}

function addToCart(name,price,qty) {

    cart.push({
        name,
        price,
        qty: parseInt(qty)
    });

    alert('Added To Cart');
}

function toggleFavourite(productName, category) {
    const existingIndex = favourites.findIndex(fav => fav.name === productName && fav.category === category);
    
    if(existingIndex === -1) {
        // Add to favourites
        const product = products[category].find(p => p.name === productName);
        favourites.push({...product, category});
    } else {
        // Remove from favourites
        favourites.splice(existingIndex, 1);
    }
    
    // Save to localStorage
    localStorage.setItem('favourites', JSON.stringify(favourites));
    
    // Refresh the current view
    const currentPage = document.querySelector('.page.active').id;
    if(currentPage === 'favouritesPage') {
        showFavourites();
    } else if(currentCategory) {
        openCategory(currentCategory);
    }
}

function showFavourites() {
    const container = document.getElementById('favouritesContainer');
    container.innerHTML = '';
    
    if(favourites.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 50px; color: #999; font-size: 18px;">No favourite items yet! 💔</p>';
        showPage('favouritesPage');
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
    
    showPage('favouritesPage');
}

function showCart() {

    const cartItems = document.getElementById('cartItems');

    cartItems.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {

        subtotal += item.price * item.qty;

        cartItems.innerHTML += `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>${item.qty} x ₹${item.price}</p>
        </div>
        `;
    });

    let gst = subtotal * 0.18;
    let delivery = subtotal > 0 ? 50 : 0;

    totalAmount = subtotal + gst + delivery;

    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('gst').innerText = gst.toFixed(2);
    document.getElementById('delivery').innerText = delivery.toFixed(2);
    document.getElementById('total').innerText = totalAmount.toFixed(2);

    showPage('cartPage');
}

function proceedPayment() {
    if(cart.length === 0) {
        alert('Please add some products to your cart before proceeding to payment!');
        return;
    }
    document.getElementById('paymentAmount').innerText = totalAmount.toFixed(2);
    startTimer();
    showPage('paymentPage');
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme();
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function applyTheme() {
    const body = document.body;
    const themeToggles = document.querySelectorAll('.theme-toggle-btn');
    
    if(isDarkMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggles.forEach(btn => btn.innerHTML = '☀️');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggles.forEach(btn => btn.innerHTML = '🌙');
    }
}

function applyFilters() {
    const category = currentCategory;
    let filteredProducts = [...products[category]];
    
    // Apply brand filter
    if(currentFilters.brand !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.brand === currentFilters.brand);
    }
    
    // Apply rating filter
    if(currentFilters.rating !== 'all') {
        const minRating = parseFloat(currentFilters.rating);
        filteredProducts = filteredProducts.filter(p => p.rating >= minRating);
    }
    
    // Apply price range filter
    if(currentFilters.priceRange !== 'all') {
        switch(currentFilters.priceRange) {
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
    
    // Apply price sorting
    if(currentFilters.priceSort !== 'none') {
        filteredProducts.sort((a, b) => {
            if(currentFilters.priceSort === 'low-to-high') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    }
    
    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    
    if(filteredProducts.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 50px; color: #999; font-size: 18px;">No products match your filters! 🔍</p>';
        return;
    }
    
    filteredProducts.forEach((product,index) => {
        const isFavourited = favourites.some(fav => fav.name === product.name && fav.category === currentCategory);
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
                    <button class="like-btn" onclick="toggleFavourite('${product.name}', '${currentCategory}')">${heartIcon}</button>
                </div>
                
                <button onclick="addToCart('${product.name}',${product.price},document.getElementById('qty${index}').value)">
                    Add To Cart
                </button>
            </div>
        </div>
        `;
    });
}

function resetFilters() {
    currentFilters = {
        brand: 'all',
        rating: 'all',
        priceSort: 'none',
        priceRange: 'all'
    };
    
    // Reset form elements
    document.getElementById('brandFilter').value = 'all';
    document.getElementById('ratingFilter').value = 'all';
    document.getElementById('priceSort').value = 'none';
    document.getElementById('priceRangeFilter').value = 'all';
    
    // Display all products without calling openCategory to avoid infinite recursion
    displayFilteredProducts(products[currentCategory]);
}

function updateBrandOptions() {
    const brandSelect = document.getElementById('brandFilter');
    const brands = [...new Set(products[currentCategory].map(p => p.brand))];
    
    brandSelect.innerHTML = '<option value="all">All Brands</option>';
    brands.forEach(brand => {
        brandSelect.innerHTML += `<option value="${brand}">${brand}</option>`;
    });
}

function showMethod(sectionId) {

    document.getElementById('cardSection').classList.add('hidden');
    document.getElementById('qrSection').classList.add('hidden');

    document.getElementById(sectionId).classList.remove('hidden');
}

function startTimer() {

    let time = 600;

    clearInterval(paymentTimer);

    paymentTimer = setInterval(() => {

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('timer').innerText = `${minutes}:${seconds}`;

        if(time <= 0) {

            clearInterval(paymentTimer);

            alert('Payment Failed');

            showPage('cartPage');
        }

        time--;

    },1000);
}

function completePayment() {

    clearInterval(paymentTimer);

    let subtotal = parseFloat(document.getElementById('subtotal').innerText);
    let gst = parseFloat(document.getElementById('gst').innerText);
    let delivery = parseFloat(document.getElementById('delivery').innerText);
    let orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    let currentDate = new Date().toLocaleString();

    let receiptHTML = `
        <div class="receipt-header">
            <h1>🛒 LuxeMart</h1>
            <p>Order Confirmation</p>
        </div>
        
        <div class="receipt-info">
            <div class="info-row">
                <span>Order ID:</span>
                <strong>${orderId}</strong>
            </div>
            <div class="info-row">
                <span>Order Date:</span>
                <strong>${currentDate}</strong>
            </div>
        </div>
        
        <div class="receipt-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        
        <div class="receipt-items">
            <h3>Order Items</h3>
    `;
    
    cart.forEach((item, index) => {
        receiptHTML += `
            <div class="receipt-item">
                <span>${index + 1}. ${item.name}</span>
                <span>${item.qty} × ₹${item.price}</span>
                <span class="item-total">₹${(item.qty * item.price).toFixed(2)}</span>
            </div>
        `;
    });
    
    receiptHTML += `
        </div>
        
        <div class="receipt-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        
        <div class="receipt-summary">
            <div class="summary-row">
                <span>Subtotal:</span>
                <strong>₹${subtotal.toFixed(2)}</strong>
            </div>
            <div class="summary-row">
                <span>GST (18%):</span>
                <strong>₹${gst.toFixed(2)}</strong>
            </div>
            <div class="summary-row">
                <span>Delivery Charges:</span>
                <strong>₹${delivery.toFixed(2)}</strong>
            </div>
            <div class="summary-row total-row">
                <span>Total Amount:</span>
                <strong>₹${totalAmount.toFixed(2)}</strong>
            </div>
        </div>
        
        <div class="receipt-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        
        <div class="payment-status">
            <p>✓ Payment Successful</p>
            <p>Thank you for your order!</p>
        </div>
    `;
    
    document.getElementById('receiptDetails').innerHTML = receiptHTML;

    cart = [];

    showPage('receiptPage');
}

function downloadReceipt() {

    const content = document.getElementById('receiptContent').innerText;

    const blob = new Blob([content], {
        type: 'text/plain'
    });

    const a = document.createElement('a');

    a.href = URL.createObjectURL(blob);

    a.download = 'receipt.txt';

    a.click();
}

// Initialize the app when the page loads
initializeApp();

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', initializeApp);