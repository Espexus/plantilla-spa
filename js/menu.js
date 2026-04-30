const menu = document.getElementById("menu");
const botonMenu = document.getElementById("boton-menu");
const botonCerrar = document.getElementById("boton-cerrar");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-oculto");
    botonCerrar.classList.toggle("boton-oculto");
});

botonCerrar.addEventListener("click", () => {
    menu.classList.toggle("menu-oculto");
    botonCerrar.classList.toggle("boton-oculto");
});