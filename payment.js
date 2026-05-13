let paymentTimer;

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

        if (time <= 0) {
            clearInterval(paymentTimer);
            alert('Payment Failed');
            window.location.href = 'cart.html';
        }
        time--;
    }, 1000);
}

function completePayment() {
    clearInterval(paymentTimer);

    const items = JSON.parse(sessionStorage.getItem('paymentItems'));
    const subtotal = parseFloat(sessionStorage.getItem('paymentSubtotal'));
    const gst = parseFloat(sessionStorage.getItem('paymentGst'));
    const delivery = parseFloat(sessionStorage.getItem('paymentDelivery'));
    const total = parseFloat(sessionStorage.getItem('paymentTotal'));

    if (!items || items.length === 0) {
        alert('No items to process');
        window.location.href = 'cart.html';
        return;
    }

    const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const currentDate = new Date().toLocaleString();

    sessionStorage.setItem('receipt', JSON.stringify({
        orderId,
        currentDate,
        subtotal,
        gst,
        delivery,
        total,
        items
    }));

    cart = [];
    localStorage.removeItem('cart');

    window.location.href = 'receipt.html';
}

function renderReceipt() {
    const data = JSON.parse(sessionStorage.getItem('receipt'));

    if (!data) {
        window.location.href = 'home.html';
        return;
    }

    let itemsHTML = '';
    data.items.forEach((item, index) => {
        itemsHTML += `
        <div class="receipt-item">
            <span>${index + 1}. ${item.name}</span>
            <span>${item.qty} × ₹${item.price}</span>
            <span class="item-total">₹${(item.qty * item.price).toFixed(2)}</span>
        </div>
        `;
    });

    const html = `
        <div class="receipt-header">
            <h1>🛒 LuxeMart</h1>
            <p>Order Confirmation</p>
        </div>

        <div class="receipt-info">
            <div class="info-row">
                <span>Order ID:</span>
                <strong>${data.orderId}</strong>
            </div>
            <div class="info-row">
                <span>Order Date:</span>
                <strong>${data.currentDate}</strong>
            </div>
        </div>

        <div class="receipt-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>

        <div class="receipt-items">
            <h3>Order Items</h3>
            ${itemsHTML}
        </div>

        <div class="receipt-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>

        <div class="receipt-summary">
            <div class="summary-row">
                <span>Subtotal:</span>
                <strong>₹${data.subtotal.toFixed(2)}</strong>
            </div>
            <div class="summary-row">
                <span>GST (18%):</span>
                <strong>₹${data.gst.toFixed(2)}</strong>
            </div>
            <div class="summary-row">
                <span>Delivery Charges:</span>
                <strong>₹${data.delivery.toFixed(2)}</strong>
            </div>
            <div class="summary-row total-row">
                <span>Total Amount:</span>
                <strong>₹${data.total.toFixed(2)}</strong>
            </div>
        </div>

        <div class="receipt-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>

        <div class="payment-status">
            <p>✓ Payment Successful</p>
            <p>Thank you for your order!</p>
        </div>
    `;

    document.getElementById('receiptDetails').innerHTML = html;
}

function downloadReceipt() {
    const content = document.getElementById('receiptContent').innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'receipt.txt';
    a.click();
}

if (document.getElementById('paymentAmount')) {
    document.addEventListener('DOMContentLoaded', function () {
        const total = sessionStorage.getItem('paymentTotal');
        if (!total) {
            window.location.href = 'cart.html';
            return;
        }
        document.getElementById('paymentAmount').textContent = total;
        startTimer();
    });
}

if (document.getElementById('receiptDetails')) {
    document.addEventListener('DOMContentLoaded', renderReceipt);
}
