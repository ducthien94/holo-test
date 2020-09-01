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
})