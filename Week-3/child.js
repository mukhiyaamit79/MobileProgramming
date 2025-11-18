$(document).ready(function() {

    // Open product detail popup
    $(".view-btn").click(function() {
        const card = $(this).closest(".product-card");

        $("#detail-name").text(card.data("name"));
        $("#detail-desc").text(card.data("desc"));
        $("#detail-price").text("$" + card.data("price"));

        $("#product-detail").css("display", "flex");
    });

    // Close popup when clicking X
    $(".close-btn").click(function() {
        $("#product-detail").hide();
    });

    // Close popup by clicking outside content
    $(window).click(function(e) {
        if ($(e.target).is("#product-detail")) {
            $("#product-detail").hide();
        }
    });

    // Show toast function
    function showToast(message) {
        const $toast = $("#toast");
        $toast.text(message).addClass("show");

        setTimeout(function() {
            $toast.removeClass("show");
        }, 2500);
    }

    // Add to cart button
    $(".cart-btn").click(function() {
        const card = $(this).closest(".product-card");
        const name = card.data("name");
        const price = card.data("price");

        showToast(name + " added to cart • $" + price);
    });

});
