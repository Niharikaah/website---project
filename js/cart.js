function renderCart() {
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

    const gst = subtotal * 0.18;
    const delivery = subtotal > 0 ? 50 : 0;
    const total = subtotal + gst + delivery;

    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('gst').innerText = gst.toFixed(2);
    document.getElementById('delivery').innerText = delivery.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);

    return total;
}

function proceedPayment() {
    if (cart.length === 0) {
        alert('Please add some products to your cart before proceeding to payment!');
        return;
    }

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.qty;
    });

    const gst = subtotal * 0.18;
    const delivery = subtotal > 0 ? 50 : 0;
    const total = subtotal + gst + delivery;

    sessionStorage.setItem('paymentSubtotal', subtotal.toFixed(2));
    sessionStorage.setItem('paymentGst', gst.toFixed(2));
    sessionStorage.setItem('paymentDelivery', delivery.toFixed(2));
    sessionStorage.setItem('paymentTotal', total.toFixed(2));
    sessionStorage.setItem('paymentItems', JSON.stringify(cart));

    window.location.href = 'payment.html';
}

document.addEventListener('DOMContentLoaded', renderCart);
