function addListeners() {
    let burger = document.querySelector(".fa-bars");
    let navbar = document.querySelector(".nav");


    /** Navbar black color listener */
    window.addEventListener("scroll", function () {
        if (this.pageYOffset > 350) {
            navbar.classList.add("nav-transparent");
        } else(navbar.classList.remove("nav-transparent"));
    });


    /** Burger menu click listener */
    burger.addEventListener("click", function () {
        let nav = document.querySelector(".nav ul");
        nav.classList.toggle("show");
    });
}

function type() {
    const headerText = document.querySelector(".header-text");
    const h1 = headerText.children[0];
    const h2 = headerText.children[1];
    const h1Text = "Hello world!";
    const h2Text = "I am a web developer";
    let i = 0;
    let j = 0;
    const speed = 250;

    function typeWriter() {
        if (i < h1Text.length) {
            h1.textContent += h1Text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else if (j < h2Text.length) {
            h2.textContent += h2Text.charAt(j).toUpperCase();
            j++;
            setTimeout(typeWriter, speed);
        }
    }
    setTimeout(typeWriter, 700);
}

addListeners();
type();