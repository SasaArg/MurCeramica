
function validarFormulario(){
    let nombre = document.querySelector("#exampleFormControlText1").value.trim();
    let whatsapp = document.querySelector("#exampleFormControlTel1").value.trim();
    let email = document.querySelector("#exampleFormControlInput1").value.trim();
    let mensaje = document.querySelector("#exampleFormControlTextarea1").value.trim();
    let formulario = document.querySelector("#formulario");

    // PARA QUE LOS CAMPOS NO QUEDEN VACÍOS

    if (nombre === "" || whatsapp === "" || email === "" || mensaje === "") {
        alert ("Por favor, completar todos los campos");
        return false;
    }

    // PARA QUE NO SE USEN CARACTERES INCORRECTOS EN EL NOMBRE

    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt (i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert ("En el campo Nombre y Apellido sólo escribir caracteres alfabéticos y espacios");
            return false;
        }
    }

    // PARA QUE NO SE INGRESEN NÚMEROS DE MÁS O MENOS EN EL WHATSAPP

        if (whatsapp.length !== 10) {
            alert ("En el campo Whatsapp sólo ingresar característica sin 0 y celular sin 15");
            return false;
        }

    // PARA NO INGRESAR NINGÚN CARACTER QUE NO SEA UN NÚMERO

        for (var j = 0; j < whatsapp.length; j++) {
            var digito = whatsapp.charAt(j);
            if (digito < "0" || digito > "9") {
                alert ("En el campo Whatsapp sólo ingresar números sin espacios");
                return false;
            }
        }

    // PARA QUE NO SE INGRESEN CARACTERES EXTRAÑOS Y ADEMÁS NO FALTE EL @
        
        for (var k = 0; k < email.length; k++) {
            var charCode = email.charCodeAt (k);
            if (!( ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57) || (charCode === 164) || (charCode === 95) || (charCode === 45) || (charCode === 46)) || (charCode === 64))) {
            alert ("En el campo Email sólo escribir caracteres alfabéticos en minúscula, números, guiones, puntos y @");
            return false;
            }
            if (email.indexOf('@') === -1) {
                alert("El email debe contener @");
                return false;
            }
    }
document.formulario.submit();
}
