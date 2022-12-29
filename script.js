let header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});


let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}


const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})
sr.reveal('.home-text', {delay:10, origin:'bottom'})
sr.reveal('.about', {delay:20, origin:'bottom'})
sr.reveal('.skills,.tools', {delay:20, origin:'bottom'})
sr.reveal('.services', {delay:20, origin:'bottom'})
sr.reveal('.contact', {delay:20, origin:'bottom'})