let navbar = document.querySelector(".nav");

window.addEventListener("scroll", function(){
    if (this.pageYOffset > 300) {
        navbar.classList.add("nav-transparent");
    }

    else (navbar.classList.remove("nav-transparent"));
});