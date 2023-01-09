$(function() {

    /* Header */
    var introH = $("#intro").innerHeight(),
        header = $("#header"),
        header__inner = $("#header__inner"),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        var $this = $(this);
        scrollOffset = $this.scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll() {
        if( scrollOffset >= introH - 10 ) {
            header.addClass("fixed");
            header__inner.addClass("fixed");

        } else {
            header.removeClass("fixed");
            header__inner.removeClass("fixed");
        }
    }

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {

        // decline standard nav handling
        event.preventDefault();

        // take ID from data-scroll
        var $this = $(this);
            blockId = $this.data('scroll'),
            // take element from ID, get element's offsetTop
            blockOffset = $(blockId).offset().top;

        // add class active
        $("[data-scroll]").removeClass("active");
        $this.addClass("active");

        // scroll on that offset
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

    });

    /* Nav */

    $("#nav__toggle").on("click", function() {
        $(this).toggleClass("active");
        $(".nav").toggleClass("active");
    });

    /* Quote carusel*/

    $('[data-carousel]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

