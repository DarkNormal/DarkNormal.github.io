$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 3000);

    $('#myForm').validate({
        rules: {
            field1: {
                required: true
            },
            field2: {
                required: true,
                email: true
            },
            field4: {
                required: true
            }
        },
        submitHandler: function (form) {
            alert('valid form submitted');
            $('#myModal').modal('hide');
            return false;
        }
    });
    $('main').scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                if ($(this).hasClass('timeline-panel-right')) {
                    $(this).addClass("slide-right");
                }
                else {
                    $(this).addClass("slide-left");
                }

            }
        });
    });

    $("#dropdown-group").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });

    /* Every time the window is scrolled ... */
    $('main').scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object + 50) {

                $(this).animate({ 'opacity': '1' }, 500);

            }

        });

    });
});
   