const products = {

    Gaming: [
        {
            name: "Gaming Keyboard",
            price: 2500,
            rating: 4.5,
            reviews: 234,
            brand: "Razer",
            description: "Mechanical gaming keyboard with RGB lighting and ultra-responsive keys. Perfect for competitive gaming with customizable macro keys.",
            image: "https://m.media-amazon.com/images/I/61DP8L9ooYL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            name: "Gaming Mouse",
            price: 1200,
            rating: 4.3,
            reviews: 156,
            brand: "Logitech",
            description: "High precision gaming mouse with 16000 DPI sensor and ergonomic design. Features 7 programmable buttons for ultimate control.",
            image: "https://m.media-amazon.com/images/I/51ZLPEu0SmS.jpg"
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
            image: "https://www.fullh4rd.com.ar/img/productos/monitor-27-asus-vg278-144hz-1.jpg"
        },
        {
            name: "Gaming Chair",
            price: 8500,
            rating: 4.4,
            reviews: 189,
            brand: "Secretlab",
            description: "Ergonomic racing-style gaming chair with lumbar support. Adjustable armrests and tilt mechanism for comfort.",
            image: "https://images.secretlab.co/theme/common/gaming-chair-secretlab-hero-stealth.jpg"
        },
        {
            name: "Graphics Card RTX 3070",
            price: 45000,
            rating: 4.8,
            reviews: 567,
            brand: "NVIDIA",
            description: "High-performance graphics card for smooth 4K gaming. 8GB GDDR6 memory and advanced cooling system.",
            image: "https://m.media-amazon.com/images/I/71Yd+IAZUKL.jpg"
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
            image: "https://rukminim2.flixcart.com/image/480/640/kkfrjww0/gamepad/wireless/d/e/r/1v8-00006-microsoft-original-imafzsc7tygvdnmy.jpeg?q=90"
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
            image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/latitude/compact-design/fy25/lati-compact-franchise-1920x1440-hero-perf.png"
        },
        {
            name: "Laptop",
            price: 65000,
            rating: 4.8,
            reviews: 523,
            brand: "Dell",
            description: "Powerful laptop with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for work and gaming.",
            image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/latitude/compact-design/fy25/lati-compact-franchise-1920x1440-hero-perf.png"
        },
        {
            name: "Wireless Earbuds",
            price: 4500,
            rating: 4.5,
            reviews: 678,
            brand: "Apple",
            description: "True wireless earbuds with active noise cancellation and 8-hour battery life. Crystal clear audio quality.",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725502639798"
        },
        {
            name: "Tablet",
            price: 18000,
            rating: 4.6,
            reviews: 445,
            brand: "Apple",
            description: "10-inch tablet with high-resolution display and powerful processor. Great for multimedia and productivity.",
            image: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-ipad-air-with-apple-m2-chip-11-inch-wifi-starlight-128gb-front-view.png"
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
            image: "https://m.media-amazon.com/images/I/715CeFp-7NL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            name: "Wireless Router",
            price: 2800,
            rating: 4.3,
            reviews: 234,
            brand: "TP-Link",
            description: "High-speed wireless router with WiFi 6 technology. Covers up to 3000 sq ft with stable connection.",
            image: "https://cdn.moglix.com/p/2mKFArDsXYa9k-xxlarge.jpg"
        },
        {
            name: "Power Bank",
            price: 1500,
            rating: 4.6,
            reviews: 456,
            brand: "Anker",
            description: "20000mAh power bank with fast charging technology. Charges multiple devices simultaneously.",
            image: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018863333_437Wx649H_202308221131171.jpeg"
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
            image: "https://www.fashiola.in/product-list/129099570.webp"
        },
        {
            name: "T-Shirt",
            price: 450,
            rating: 4.5,
            reviews: 567,
            brand: "Nike",
            description: "Comfortable cotton t-shirt available in multiple colors. Perfect for casual wear.",
            image: "https://i5.walmartimages.com/asr/d306899f-57c5-4a34-b578-f459cb25d6c4.61c3f306c69962ad31cda20228b8d8cd.jpeg"
        },
        {
            name: "Jeans",
            price: 1200,
            rating: 4.6,
            reviews: 445,
            brand: "Levi's",
            description: "Stylish blue jeans with perfect fit. Durable denim fabric and comfortable stretch.",
            image: "https://i5.walmartimages.com/seo/Levi-s-Men-s-501-Original-Fit-Jeans_d88ed239-b830-458d-896a-94b25e6bc0ce.b84e99c57efcbdc9f16c05836cc10806.jpeg"
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
            image: "https://images-cdn.ubuy.co.in/69846f1fd864b6d055011361-adidas-men-s-essentials-fleece-hoodie.jpg"
        },
        {
            name: "Sports Shorts",
            price: 600,
            rating: 4.5,
            reviews: 189,
            brand: "Nike",
            description: "Breathable sports shorts with quick-dry technology. Ideal for gym and outdoor activities.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudh8-8dL0N9jQmu8Eei0JL5pjA7ymwuQryg&s"
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
            image: "https://thumblr.uniid.it/product/256328/fba613707bac.jpg?width=3840&format=webp&q=75"
        },
        {
            name: "Basketball",
            price: 1500,
            rating: 4.6,
            reviews: 389,
            brand: "Spalding",
            description: "Regulation basketball with excellent bounce and control. Suitable for indoor and outdoor courts.",
            image: "https://scssports.in/cdn/shop/files/61_WYkFsM_L._SY450.jpg?v=1711972054&width=450"
        },
        {
            name: "Tennis Racket",
            price: 3500,
            rating: 4.7,
            reviews: 234,
            brand: "Wilson",
            description: "Lightweight tennis racket with advanced string technology. Perfect for beginners and professionals.",
            image: "https://d2f594itnhlick.cloudfront.net/media/catalog/product/b/l/blade_98_1619_v9.jpg"
        },
        {
            name: "Yoga Mat",
            price: 800,
            rating: 4.5,
            reviews: 456,
            brand: "Manduka",
            description: "Non-slip yoga mat with extra cushioning. Perfect for yoga, pilates, and floor exercises.",
            image: "https://www.manduka.com/cdn/shop/files/184011682_GRPADAPT5MM-71-PURPLEHAZE_01.jpg?v=1737581870&width=871"
        },
        {
            name: "Dumbbell Set",
            price: 4500,
            rating: 4.8,
            reviews: 567,
            brand: "Bowflex",
            description: "Complete dumbbell set with adjustable weights. Ideal for home gym workouts.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyKLzxfCTOElzoDKKtFYizujwG-sE7irM3g&s"
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
            image: "https://www.speedo.in/cdn/shop/files/812670F808_1_fbfd5376-bd30-49bb-8e32-3fa737ad4382.webp?v=1777993948&width=860"
        },
        {
            name: "Cycling Helmet",
            price: 1200,
            rating: 4.5,
            reviews: 234,
            brand: "Bell",
            description: "Lightweight cycling helmet with ventilation system. Provides maximum safety and comfort.",
            image: "https://choosemybicycle.com/cdn/shop/files/Bell_Crest_Cycling_Helmet.png?v=1773162134&width=1200"
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
            image: "https://caramelly.in/cdn/shop/products/nespresso-gran-lattissima-coffee-machine-614636.jpg?v=1719034381"
        },
        {
            name: "Blender",
            price: 1800,
            rating: 4.4,
            reviews: 278,
            brand: "Oster",
            description: "High-power blender with multiple speed settings. Perfect for smoothies and food processing.",
            image: "https://newellbrands.imgix.net/41be980e-6e1e-3c6f-956e-833b1bcd216f/41be980e-6e1e-3c6f-956e-833b1bcd216f.jpg"
        },
        {
            name: "Air Fryer",
            price: 3500,
            rating: 4.7,
            reviews: 456,
            brand: "Philips",
            description: "Healthy air fryer with digital controls. Fry, bake, and roast with little to no oil.",
            image: "https://m.media-amazon.com/images/I/41Z5ldkAeYL._AC_UF894,1000_QL80_.jpg"
        },
        {
            name: "Microwave Oven",
            price: 4200,
            rating: 4.5,
            reviews: 389,
            brand: "LG",
            description: "Convection microwave with multiple cooking modes. Smart inverter technology for even cooking.",
            image: "https://www.lg.com/content/dam/channel/wcms/in/images/microwave-ovens/mc2846sl_dslqiln_eail_in_c/gallery/MC2846SL-microwave-ovens-Front-view-D-01.jpg"
        },
        {
            name: "Vacuum Cleaner",
            price: 2800,
            rating: 4.3,
            reviews: 234,
            brand: "Dyson",
            description: "Cordless vacuum cleaner with powerful suction. Lightweight and easy to use.",
            image: "https://m.media-amazon.com/images/I/418vSp+SqzL._AC_UF894,1000_QL80_.jpg"
        },
        {
            name: "Water Purifier",
            price: 3200,
            rating: 4.6,
            reviews: 345,
            brand: "Kent",
            description: "Advanced RO water purifier with UV technology. Provides pure drinking water.",
            image: "https://healthairindia.com/wp-content/uploads/2020/11/kent-grand-plus.png"
        },
        {
            name: "Rice Cooker",
            price: 1500,
            rating: 4.4,
            reviews: 267,
            brand: "Panasonic",
            description: "Automatic rice cooker with fuzzy logic technology. Cooks perfect rice every time.",
            image: "https://i5.walmartimages.com/seo/Panasonic-6-Cup-Rice-Cooker-with-One-Touch-Automatic-Cooking-Feature-Model-Number-SR-G06FGL_02e722c3-7450-4ae5-99c0-311de0696e8e.ac0549defb3aef4d81f78e15cf0d76ac.jpeg"
        },
        {
            name: "Toaster",
            price: 800,
            rating: 4.2,
            reviews: 189,
            brand: "Hamilton Beach",
            description: "2-slice toaster with adjustable browning control. Quick and even toasting.",
            image: "https://www.hamiltonbeach.in/s/65eb6249ec1d5ed192d7fa69/6617dd4e0198a3e2195e8cb2/1-7-.jpg"
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
            image: "https://www.cetaphil.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw613390bd/routine/routinenew/053061%20DFM%20Night%203oz%20Pump-Front.png"
        },
        {
            name: "Shampoo",
            price: 280,
            rating: 4.4,
            reviews: 456,
            brand: "Head & Shoulders",
            description: "Anti-dandruff shampoo with menthol. Controls dandruff and soothes scalp.",
            image: "https://images-static.nykaa.com/media/catalog/product/2/5/251949f4902430774130_1.jpg?tr=w-500"
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbP65sqHMVWCXh1bDSWP2CRWHpy5RbtgK9xg&s"
        },
        {
            name: "Face Wash",
            price: 220,
            rating: 4.4,
            reviews: 278,
            brand: "Neutrogena",
            description: "Gentle face wash for daily cleansing. Removes impurities without drying skin.",
            image: "https://images.ctfassets.net/aub2fvcyp2t8/5KXIqAWEa7r2b6YRyTfEJU/ca4224ef31bcdd285e4c058ae1bb282b/neutrogena-deep-clean-fash-wash-en-in?fm=webp&w=3840"
        },
        {
            name: "Deodorant",
            price: 150,
            rating: 4.2,
            reviews: 345,
            brand: "Axe",
            description: "Long-lasting deodorant with fresh fragrance. Provides all-day protection.",
            image: "https://images.apollo247.in/pub/media/catalog/product/A/X/AXE0028_1-JULY23_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w"
        },
        {
            name: "Nail Polish",
            price: 120,
            rating: 4.3,
            reviews: 156,
            brand: "OPI",
            description: "Quick-dry nail polish with chip-resistant formula. Salon-quality results at home.",
            image: "https://m.media-amazon.com/images/I/71aDXnz1o8L._AC_UF1000,1000_QL80_.jpg"
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-eFv81eiiGX2SERvVlT7x4WwPeKGuefzJg&s"
        },
        {
            name: "Atomic Habits",
            price: 450,
            rating: 4.9,
            reviews: 2345,
            brand: "Random House",
            description: "Guide to building good habits and breaking bad ones. Science-backed strategies.",
            image: "https://jamesclear.com/wp-content/uploads/2020/11/atomic-habits_gallery_hi-res_01.jpg"
        },
        {
            name: "Rich Dad Poor Dad",
            price: 380,
            rating: 4.7,
            reviews: 1876,
            brand: "Warner Books",
            description: "Personal finance classic about building wealth. Changes how you think about money.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_RlyN2CuRFxEKwDc8oKbRxoELJmSBMTsiQ&s"
        },
        {
            name: "The Psychology of Money",
            price: 420,
            rating: 4.6,
            reviews: 1456,
            brand: "Harriman House",
            description: "Understanding the strange ways people think about money. Timeless lessons.",
            image: "https://austinkleon.com/wp-content/uploads/2023/02/FpSSZtdagAEieD3-600x450.jpeg"
        },
        {
            name: "Sapiens",
            price: 550,
            rating: 4.8,
            reviews: 2341,
            brand: "Harper",
            description: "Brief history of humankind. From the Stone Age to the modern age.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKeV_mr2DqCt9PJ7nJR-jnGJrjjThumN6OQ&s"
        },
        {
            name: "Think and Grow Rich",
            price: 320,
            rating: 4.5,
            reviews: 987,
            brand: "The Ralston Society",
            description: "Success principles that have inspired millions. Classic personal development book.",
            image: "https://i0.wp.com/www.raptisrarebooks.com/wp-content/uploads/2022/10/RRB-138266.jpg?fit=1250%2C1000&ssl=1"
        },
        {
            name: "The Power of Now",
            price: 380,
            rating: 4.6,
            reviews: 1456,
            brand: "New World Library",
            description: "Spiritual guide to living in the present moment. Eckhart Tolle's masterpiece.",
            image: "https://target.scene7.com/is/image/Target/GUEST_f2291e58-276c-42b5-97bf-eea78901976f"
        },
        {
            name: "Dune",
            price: 480,
            rating: 4.7,
            reviews: 1876,
            brand: "Ace Books",
            description: "Epic science fiction novel set on the desert planet Arrakis. Winner of Hugo Award.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhgWch69FhCNpZ63FqiNuAwfjIhvSyPIliA&s"
        }
    ]
};
