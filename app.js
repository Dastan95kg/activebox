$(function () {
    
    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        (scrollPos > introH) ? 
        header.addClass("fixed") : header.removeClass("fixed");
    }

    // Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // Отменяет поведение ссылки

        let elemId = $(this).data('scroll'); 
        let elemOffset = $(elemId).offset().top; // Отступ сверху
        
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop : elemOffset - 90
        }, 700);
        
    });


    // Nav Toggle
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })

    // Reviews: https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});