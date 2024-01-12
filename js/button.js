// Función para mostrar u ocultar el menú
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Cerrar el menú si se hace clic fuera del botón y del menú
document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var button = document.querySelector("button");

    if (event.target !== button && event.target !== menu && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});