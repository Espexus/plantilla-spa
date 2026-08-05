(function() {

    const idsReserva = [
        "gummy1",
        "lollypop1",
        "sweetcandy1",
        "premiumkids1",
        "gummy2",
        "lollypop2",
        "sweetcandy2",
        "premiumkids2",
        "gummygrupal",
        "lollypopgrupal",
        "sweetcandygrupal",
        "premiumkidsgrupal",

        "turco1",
        "plata1",
        "oasis1",
        "relax1",
        "verano1",
        "girasol1",
        "oro1",
        "otono1",
        "premium1",
        "primavera1",

        "turco2",
        "plata2",
        "oasis2",
        "relax2",
        "verano2",
        "girasol2",
        "oro2",
        "otono2",
        "premium2",
        "primavera2",

        "turcoGrupal",
        "plataGrupal",
        "oasisGrupal",
        "relaxGrupal",
        "veranoGrupal",
        "girasolGrupal",
        "oroGrupal",
        "otonoGrupal",
        "premiumGrupal",
        "primaveraGrupal",

    ]
    
    const mensajes = [
        "Spa kids gummy bears para 1 niño",
        "Spa kids Lolly pop para 1 niño",
        "Spa kids sweet candy para 1 niño",
        "Spa kids premium para 1 niño",
        "Spa kids gummy bears para 2 niños",
        "Spa kids Lolly pop para 2 niños",
        "Spa kids sweet candy para 2 niños",
        "Spa kids premium para 2 niños",
        "Spa kids Gummy bears para un grupo de niños",
        "Spa kids Lolly pop para un grupo de niños",
        "Spa kids Sweet candy para un grupo de niños",
        "Spa kids Premium para un grupo de niños",

        "Turco spa de los spas relajantes para 1 persona",
        "Spa plata de los spas relajantes para 1 persona",
        "Spa oasis de los spas relajantes para 1 persona",
        "Spa relax de los spas relajantes para 1 persona",
        "Spa verano de los spas relajantes para 1 persona",
        "Spa girasol de los spas relajantes para 1 persona",
        "Spa oro de los spas relajantes para 1 persona",
        "Spa otoño de los spas relajantes para 1 persona",
        "Spa premium de los spas relajantes para 1 persona",
        "Spa primavera de los spas relajantes para 1 persona",

        "Turco spa de los spas relajantes para 2 personas",
        "Spa plata de los spas relajantes para 2 personas",
        "Spa oasis de los spas relajantes para 2 personas",
        "Spa relax de los spas relajantes para 2 personas",
        "Spa verano de los spas relajantes para 2 personas",
        "Spa girasol de los spas relajantes para 2 personas",
        "Spa oro de los spas relajantes para 2 personas",
        "Spa otoño de los spas relajantes para 2 personas",
        "Spa premium de los spas relajantes para 2 personas",
        "Spa primavera de los spas relajantes para 2 personas",

        "Spa turco grupal",
        "Spa plata grupal",
        "Spa oasis grupal",
        "Spa relax grupal",
        "Spa verano grupal",
        "Spa girasol grupal",
        "Spa oro grupal",
        "Spa otoño grupal",
        "Spa premium grupal",
        "Spa primavera grupal",

    ]

    const botonesReserva = document.querySelectorAll(".boton-reservar-plan");
    botonesReserva.forEach( boton => {
        boton.addEventListener("click", reservar)
    })

    function reservar (e) {
        const actual = e.currentTarget;

        const idMensaje = idsReserva.indexOf(actual.id);
        const complemento = mensajes[idMensaje];

        const mensaje = `*Hola,* buen día\nTengo mucho interés por su plan *${complemento}*\n¿Puedes darme más información?`

        window.open(`https://wa.me/573225362536/?text=${encodeURIComponent(mensaje)}`, "_blank");

    }
})()