$(document).ready(function() {

    // Open product detail
    $(".view-btn").click(function() {
        let card = $(this).closest(".product-card");

        $("#detail-name").text(card.data("name"));
        $("#detail-desc").text(card.data("desc"));
        $("#detail-price").text("$" + card.data("price"));

        $("#product-detail").fadeIn();
    });

    // Close popup
    $(".close-btn").click(function() {
        $("#product-detail").fadeOut();
    });

    // Add to cart
    $(".add-cart-btn").click(function() {
        alert("Product added to cart!");
    });

});
