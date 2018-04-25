let navbar = document.querySelector(".nav");
let nav = document.querySelector(".nav ul");
let burger = document.querySelector(".fa-bars");

window.addEventListener("scroll", function(){
    if (this.pageYOffset > 350) {
        navbar.classList.add("nav-transparent");
    }
    else (navbar.classList.remove("nav-transparent"));
});

burger.addEventListener("click", function(){
    nav.classList.toggle("show");
});