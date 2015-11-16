$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 3000);


    //$("#portfolio-scroll").click(function () {
    //    $('html,body').animate({
    //        scrollTop: $(".portfolio-container").offset().top
    //    },
    //        'slow');
    //});
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
    
});