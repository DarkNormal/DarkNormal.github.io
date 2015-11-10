$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 3000);


    $("#portfolio-scroll").click(function () {
        $('html,body').animate({
            scrollTop: $(".portfolio-container").offset().top
        },
            'slow');
    });
    $('#backtotop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        //$("html, body").scrollTop(0); //For without animation
        return false;
    });
});