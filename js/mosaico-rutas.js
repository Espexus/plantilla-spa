(function(){
    const cajas = document.querySelectorAll(".caja-mosaico");
    cajas.forEach(caja => {
        caja.addEventListener("click", redireccionar)
    })

    function redireccionar (e) {
        let id = e.target.id

        if (id == "spa1p" || id == "spa2p" || id == "spaG"){
            id = "servicios_estandar"
        } else if (id == "spaGk" || id == "spa1k" || id == "spa2k"){
            id = "kids"
        }


        const archivo = `${id}.html`

        const ruta = `servicios/${archivo}`

        console.log(ruta);

        
        window.location.href = ruta;
    }

})()