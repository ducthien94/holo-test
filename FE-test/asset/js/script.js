$(function() {
    // Click gallery item show popup
    $(".gallery-item").click(function() {
        let srcImg = $(this).children().attr("src");
        $(".overlay").fadeIn();
        $(".popup img").attr("src", srcImg);
    })

    // Close popup
    $(".close").click(function() {
        $(".overlay").fadeOut();
    })

    // Zoom in image
    $(".zoom-in").click(function() {
        $(this).parent().parent().animate({
            // width: "1015px",
            // height: "680px"
            width: "100%",
            height: "100%"
        })
    })

    // Zoom out image
    $(".zoom-out").click(function () {
        let windowWidth = $(window).width();
        if (windowWidth < 992) {
            $(this).parent().parent().animate({
                width: "70%",
                height: "40%"
            })
        }
        //  if (600 < windowWidth < 992) {
        //     $(this).parent().parent().animate({
        //         width: "70%",
        //         height: "40%"
        //     })
        // }
        if (992 <= windowWidth && windowWidth < 1200 ){
            $(this).parent().parent().animate({
                width: "55%",
                height: "50%"
            })
        }
        if (windowWidth > 1200){
            $(this).parent().parent().animate({
                width: "45%",
                height: "50%"
            })
        }

    })


})