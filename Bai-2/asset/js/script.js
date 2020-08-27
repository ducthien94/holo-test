let overlay = document.querySelector(".overlay");
let headerTop = document.querySelector(".header-top");
let title = document.querySelector("h1.title");
let desc = document.querySelector(".desc");
let btn = document.querySelector(".btn");
let nav = document.querySelector(".nav");


const toggle = () => {
    overlay.classList.toggle("show");
}

const showMenu = () => {
    nav.style.visibility = "visible";
}

const hideMenu = () => {
    nav.style.visibility = "hidden";
}

setTimeout(() => {
    headerTop.style.visibility = "visible";
}, 800);

setTimeout(() => {
    title.style.visibility = "visible";
}, 1600);

setTimeout(() => {
    desc.style.visibility = "visible";
}, 2400);

setTimeout(() => {
    btn.style.visibility = "visible";
}, 3200);


