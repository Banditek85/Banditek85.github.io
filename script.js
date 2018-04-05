
window.onload = function () {


    function addClick(clickedLink) {
        let link = document.getElementById("r");
        let resources = document.querySelector(".Resources");


        link.addEventListener("click", (e) => {
            resources.classList.toggle("visible");
            console.log("clicked");
        });
    }

    addClick();
}