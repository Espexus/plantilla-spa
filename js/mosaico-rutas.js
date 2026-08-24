(function(){
    const cajas = document.querySelectorAll(".caja-mosaico");
    cajas.forEach(caja => {
        caja.addEventListener("click", redireccionar)
    })

    function redireccionar (e) {
        let id = e.currentTarget.id



        const archivo = `${id}.html`

        const ruta = `servicios/${archivo}`

        console.log(ruta);

        
        window.location.href = ruta;
    }

})()