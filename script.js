$(document).ready(() => {
    $("#addToCart").on("click", () => {
        let button = $("#addToCart");
        let cart = $("#cartDiv");
        let cartSum = cart.attr("data-totalitems");
        let newSum = parseInt(cartSum) + 1;

        button.addClass("sendtocart");
        setTimeout(() => {
            button.removeClass("sendtocart");
            cart.addClass("shake").attr("data-totalitems", newSum);
            setTimeout(() => {
                cart.removeClass("shake");
            }, 500);
        }, 1000);
    });
});