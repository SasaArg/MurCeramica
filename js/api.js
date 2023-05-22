function traerDatosClima() {
    let b1=document.querySelector(".box1-1")
    fetch('https://ws.smn.gob.ar/map_items/weather')
    .then(datos => datos.json())
    .then(datos => {
        b1.innerHTML = 
            `<div class="weather">
            Ciudad: "${datos[21].province}"<br>
            Temperatura: "${datos[21].weather.tempDesc}"<br>
            Tiempo: "${datos[21].weather.description}"
            </div>`
        }
    )
}
traerDatosClima();