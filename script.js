window.addEventListener("load", function () {
    function addListeners() {
        let burger = document.querySelector(".fa-bars");
        let navbar = document.querySelector(".nav");

        /** Navbar black color listener */
        window.addEventListener("scroll", function () {
            if (this.pageYOffset > 150) {
                navbar.classList.add("nav-transparent");
            } else (navbar.classList.remove("nav-transparent"));
        });

        /** Burger menu click listener */
        burger.addEventListener("click", function () {
            let nav = document.querySelector(".nav ul");
            nav.classList.toggle("show");
        });
    }

    function type() {
        const headerText = document.querySelector(".header-text");
        const text = headerText.children[1];
        const h2Text = "I am a web developer";
        let i = 0;
        const speed = 150;

        function typeWriter() {
            if (i < h2Text.length) {
                text.textContent += h2Text.charAt(i).toUpperCase();
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        setTimeout(typeWriter, 1200);
    }

    let loadOverlay = document.getElementById("loading-overlay");
    setTimeout(() => {
        loadOverlay.style.display = "none";
    }, 500);

    // Runtime
    // Loading the ParticlesJs library
    particlesJS.load('particles-js', 'assets/particlesjs-config.json');

    addListeners();
    type();

    // Eye candy
    let skill = document.querySelectorAll("#my-skills .skill");

    let html = document.querySelector(".html");

    // Waypoint.js
    var skillsIn = new Waypoint({
        element: document.getElementById("my-skills"),
        handler: function (direction) {
        },
        offset: 600
    });
});