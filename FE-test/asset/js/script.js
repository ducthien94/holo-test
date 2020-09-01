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
            width: "1015px",
            height: "680px"
        })
    })

    // Zoom out image
    $(".zoom-out").click(function() {
        $(this).parent().parent().animate({
            width: "615px",
            height: "400px"
        })
    })
})