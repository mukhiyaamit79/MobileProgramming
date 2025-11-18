// ==========================
// PRODUCT DETAIL POPUP
// ==========================

// Buttons that open the popup
const viewButtons = document.querySelectorAll(".view-btn");

// Popup elements
const popup = document.getElementById("product-detail");
const closeBtn = document.querySelector(".close-btn");

const detailName = document.getElementById("detail-name");
const detailDesc = document.getElementById("detail-desc");
const detailPrice = document.getElementById("detail-price");

// Open product detail
viewButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        const card = this.parentElement;

        detailName.textContent = card.dataset.name;
        detailDesc.textContent = card.dataset.desc;
        detailPrice.textContent = "$" + card.dataset.price;

        popup.style.display = "flex";
    });
});

// Close popup when clicking X
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close popup by clicking outside content
window.addEventListener("click", function(e){
    if(e.target === popup){
        popup.style.display = "none";
    }
});


// ==========================
// TOAST NOTIFICATION
// ==========================

// Show toast message
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "show";

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 2500);
}


// ==========================
// ADD TO CART BUTTON
// ==========================

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(btn => {
    btn.addEventListener("click", function(){
        const card = this.parentElement;

        const name = card.dataset.name;
        const price = card.dataset.price;

        // Show toast
        showToast(name + " added to cart • $" + price);
    });
});
