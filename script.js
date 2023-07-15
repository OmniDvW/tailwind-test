const toggleOpenBtn = document.querySelector("#open-btn");
const toggleCloseBtn = document.querySelector("#close-btn");
const toggledMenu = document.querySelector("#toggled-menu");
const toggledBackground = document.querySelector("#toggled-background");
const menuLinks = document.querySelector("#menu-links");



toggleOpenBtn.addEventListener("click", toggleNav);
toggleCloseBtn.addEventListener("click", toggleNav);
toggledBackground.addEventListener("click", toggleNav);
menuLinks.addEventListener("click", toggleNav);


function toggleNav() {
    toggledMenu.classList.toggle("-translate-x-full");
    toggledBackground.classList.toggle("hidden");
}