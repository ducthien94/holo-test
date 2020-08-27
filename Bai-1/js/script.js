// let subMenu = document.querySelector("#sub-menu");

// function showSubMenu() {
//     subMenu.classList.toggle("show");
// }

$(document).ready(function () {
    $('.menu-item').bind('click', function(e) {
        // e.preventDefault();
        // e.stopPropagation();
        $(this).children('.sub-menu').slideToggle(400, 'swing');
    });
});