let navbar = document.querySelector(".nav");
let grid = document.querySelector(".grid");
let projects = document.querySelectorAll(".grid div");


window.addEventListener("scroll", function(){
    if (this.pageYOffset > 350) {
        navbar.classList.add("nav-transparent");
    }

    else (navbar.classList.remove("nav-transparent"));
});

grid.addEventListener("click", function(event) {
    let clicked = event.target.parentNode;

    console.log(clicked);
    

});

