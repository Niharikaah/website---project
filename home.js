function openCategory(category) {
    const pageMap = {
        'Gaming': 'gaming.html',
        'Electronics': 'electronics.html',
        'Fashion': 'fashion.html',
        'Sports': 'sports.html',
        'Home & Kitchen': 'home-kitchen.html',
        'Beauty & Personal Care': 'beauty-personal-care.html',
        'Books': 'books.html',
        'All Products': 'products.html'
    };
    window.location.href = pageMap[category] || 'home.html';
}
