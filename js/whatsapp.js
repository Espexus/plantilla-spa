(function () {

    const boton = document.getElementById("boton-wp");
    const pantalla = document.getElementById("pantalla");

    boton.addEventListener("click", mostrar_pantalla);

    function mostrar_pantalla() {

        if (pantalla.classList.contains("none")) {

            pantalla.style.display = "block";

            setTimeout(() => {
                pantalla.classList.remove("none");
            }, 10);

        } else {

            pantalla.classList.add("none");

            setTimeout(() => {
                pantalla.style.display = "none";
            }, 600);
        }
    }

})();