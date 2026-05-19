(function() {
    const boton_promos = document.querySelectorAll(".boton");
    boton_promos.forEach(boton => {
        boton.addEventListener("click", enviar_mensaje);
    });
    
    const promociones = ["reservar-madre", "reservar-sanvalentin"]
    const mensajesPromo = [
        "el mes de la madre que cuenta con descuentos especiales para mamá",
        "san Valentín que cuenta con descuentos especiales para ir en pareja"
    ]

    function enviar_mensaje (e) {
        idpromo = promociones.indexOf(e.target.id);

        mensajePromo = mensajesPromo[idpromo];
        mensaje = `*Hola,* buen día\n Estoy interesado en la promoción de ${mensajePromo}\n*¿Puedes darme más información?*`;

        window.open(`https://wa.me/573212890180/?text=${encodeURIComponent(mensaje)}`, "_blank")
    }

})();