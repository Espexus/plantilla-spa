(function(){
botones = document.querySelectorAll(".boton");
botones.forEach(boton => {
    boton.addEventListener("click", mensaje)
});

mensajes = [
    "Baby Botox",
    "Botox",
    "Dermapen",
    "Esperma de Salmón",
    "Fixer",
    "Spa Kids",
    "Levantamiento de Gluteos",
    "Limpieza Fácial",
    "masajes",
    "Plasma rico en plaquetas",
    "Reductores de medidas",
    "Spa Estandar"
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
    "estandar"
]


function mensaje (e){
    textoId = e.target.id;
    servicioIndice = ids.indexOf(textoId);
    servicio = mensajes[servicioIndice];

    mensaje = `*Hola,* buen día\nTengo mucho interés por su servicio *${servicio}*\n¿Puedes darme más información?`

    window.open(`https://wa.me/573212890180/?text=${encodeURIComponent(mensaje)}`, "_blank");

}


})()
