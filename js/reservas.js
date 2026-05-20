(function(){

    const formulario = document.getElementById("formulario_reserva");
    formulario.addEventListener("submit", (e)=> {
        e.preventDefault();
        const datos = new FormData(formulario);

        const tipo = datos.get("servicios");
        const sede = datos.get("sede");
        const fecha = datos.get("fecha");

        if (!tipo || !sede || !fecha){
            alert("Selecciona un tipo de servicio, la sede a la cuál deseas acudir y la fecha en la cuál esperas agendar")
            return
        }

        mensaje = `*Hola,* buen día\nDeseo agendar una reserva para el spa para uno de sus servicios ${tipo}, quiero acudir en la sede de ${sede} y deseo conocer si hay disponibilidad para la fecha: ${fecha}`

        const url = `https://wa.me/573212890180?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");

    })
})()