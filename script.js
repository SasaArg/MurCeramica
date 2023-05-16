document.getElementById("btn-hamburguesa").addEventListener("click", function () {
    var menu = document.querySelector(".menu");
    var icono = document.querySelector("#btn-hamburguesa span");

    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

    menu.classList.toggle("mostrando");
    icono.classList.toggle("rotar");
});