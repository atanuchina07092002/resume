$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".nav-bar").addClass("Sticky");
        } else {
            $(".nav-bar").removeClass("Sticky");
        }
        if (this.scrollY > 500) {
            $(".scroll-up").addClass("show");
        } else {
            $(".scroll-up").removeClass("show");
        }
    });
    $(".scroll-up").click(function() {
        $("html").animate({ scrollTop: 0 });
    });
    //toggle menu/navbar script
    $(".min-btn").click(function() {
        $(".nav-bar .menu").toggleClass("active");
        $(".nav-bar .min-btn i").toggleClass("active");
    });
    //text typing style
    var typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".text-me", {
        strings: ["Message Me"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


});