let myHeader =`
<nav class="navbar navbar-light navbar-expand-lg" style="position: fixed; width: 100%; z-index: 10;">
<div class="container-fluid">
    <a class="navbar-brand" href="#"><img class="logo" src="./img/logo-sf.png" alt="Cerámica Mur" width="50%"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" >
            <a class="nav-link list" aria-current="page" href="index.html">Inicio</a>
            <a class="nav-link list" href="./galeria.html">Galería</a>
            <a class="nav-link list" href="./productos.html">Productos</a>
            <a class="nav-link list" href="./contacto.html"> Contacto</a>
            <a class="nav-link list" href="https://www.whatsapp.com/?lang=es"><img src="./img/whatsapp3.svg" width="20px"/></a>
            <a class="nav-link list" href="https://www.facebook.com/MurCeramica"><img src="./img/facebook2.png" width="20px"/> </a>
            <a class="nav-link list" href="https://instagram.com/murceramica?igshid=MzRIODBiNWFIZA=="><img src="./img/instagram2.png" width="20px"/></a>
            
        </div>
    </div>
</div>
</nav>
`
document.querySelector("header").innerHTML=myHeader;



