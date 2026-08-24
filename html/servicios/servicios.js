(function(){
botones = document.querySelectorAll(".boton");
botones.forEach(boton => {
    boton.addEventListener("click", comprobacion)
});

mensajes = [
    "Baby Botox",
    "Botox",
    "Antimanchas",
    "Hidratación",
    "Fixer",
    "Spa Kids",
    "Levantamiento de Gluteos",
    "Limpieza Fácial",
    "masajes",
    "Antiacné",
    "Reductores de medidas",
    "Spa relajante para una persona",
    "Spa relajante para dos personas",
    "Spa relajante grupal",
    "Spa familiar para papá, mamá e hij@"
]
ids = [
    "baby",
    "botox",
    "dermapen",
    "esalmon",
    "fixer",
    "kids",
    "levantamiento",
    "limpieza",
    "masajes",
    "plasma",
    "reductores",
    "estandar1",
    "estandar2",
    "estandarG",
    "familiar"
]

function comprobacion (e) {
    if (e.currentTarget.classList.contains("reserva")) {
        mensaje(e)
    }
    else {
        ruta = e.currentTarget.id;
        window.open(`../planes/${ruta}.html`)
    }
}

function mensaje (e){
    textoId = e.CurrentTarget.id;
    servicioIndice = ids.indexOf(textoId);
    servicio = mensajes[servicioIndice];

    mensaje = `*Hola,* buen día\nTengo mucho interés por su servicio *${servicio}*\n¿Puedes darme más información?`

    window.open(`https://wa.me/573127171110/?text=${encodeURIComponent(mensaje)}`, "_blank")

}


})()
