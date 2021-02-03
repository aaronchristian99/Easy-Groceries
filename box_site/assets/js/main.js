//main.js
// routing for MMDB

function getSplash() {
    $(".hideAll").hide();
    // call movie XHR
    // Populate splash div
    $(".splash").show();
}

function getProducts() {
    $(".hideAll").hide();
    // call movie XHR
    // Populate movie div
    $(".products").show();
}

function getCart() {
    $(".hideAll").hide();
    // call people XHR
    // Populate people div
    $(".cart").show();
}

function getInformation() {
    $(".hideAll").hide();
    // call people XHR
    // Populate people div
    $(".information").show();
}

function getPayment() {
    $(".hideAll").hide();
    // call people XHR
    // Populate people div
    $(".payment").show();
}

function getConfirmation() {
    $(".hideAll").hide();
    // call people XHR
    // Populate people div
    $(".confirmation").show();
}

$(window).on("load", function () {

    $(".logo").click(function() {
        location.href="#/splash/";
    });

    $(".products").click(function() {
        location.href="#/products/";
    });

    $(".cart_icon").click(function() {
        location.href="#/cart/";
    });

    $(".checkout").click(function() {
        location.href="#/information/";
    });

    $(".pay").click(function() {
        location.href="#/payment/";
    });

    $(".confirm_pay").click(function() {
        location.href="#/confirmation/";
    });

    $(".home").click(function() {
        location.href="#/splash/";
    });

    // SAMMY ROUTING
    // Controller in MVC
    
    var app = $.sammy(function () {

        this.get('#/splash/', function () {
            getSplash();
        });

        this.get('#/products/', function () {
            getProducts();
        });

        this.get('#/cart/', function () {
            getCart();
        });

        this.get('#/information/', function () {
            getInformation();
        });

        this.get('#/payment/', function () {
            getPayment();
        });

        this.get('#/confirmation/', function () {
            getConfirmation();
        });

    });

	// default when page first loads
    $(function () {
        app.run('#/splash/');
    });
});





