//main.js
// routing for MMDB

$(document).foundation();

function getSplash() {
    $(".splash_slider").slick("unslick");
    $(".hideAll").hide();
    // call movie XHR
    // Populate splash div
    initSplashSlider();
    $(".splash, .splash_slider, .info_container").show();
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

function initSplashSlider() {
    $(".splash_slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
}

$(window).on("load", function () {

    initSplashSlider();

    $("#search_btn").hover(
        function() {
            $("#search_btn img").attr("src", "assets/images/search_logo_hover.svg");
        }, function() {
            $("#search_btn img").attr("src", "assets/images/search.svg");
        });

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





