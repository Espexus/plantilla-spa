(function(){

    const botones = document.querySelectorAll(".boton");
    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const clase= e.currentTarget.id;

            if (clase == "reservar-bogota"){
                window.open("https://wa.me/573212890180")
            } else if (clase == "reservar-bucaramanga") {
                window.open("https://wa.me/573212890180")
            }
        })
    })


})()