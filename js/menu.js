const menu = document.getElementById("menu");
const botonMenu = document.getElementById("boton-menu");
const botonCerrar = document.getElementById("boton-cerrar");
const banner = document.getElementById("banner-promociones");
const body = document.getElementById("body")

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-oculto");
    botonCerrar.classList.toggle("boton-oculto");
    banner.classList.toggle("oculto");
    body.style.paddingTop = "0";
});

botonCerrar.addEventListener("click", () => {
    menu.classList.toggle("menu-oculto");
    botonCerrar.classList.toggle("boton-oculto");
    banner.classList.toggle("oculto");
    body.style.paddingTop = "30px";
});