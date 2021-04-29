function ValidaNombre() {
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("msgNombre");

    if (nombre.length < 5) {
        mensaje.innerText = "el nombre debe tener al menos 5 caracteres"
    } else {
        mensaje.innerText = "el nombre es correcto"
    }
}

function ValidarCorreo() {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var correo = document.getElementById("miemail").value;
    var msgCorreo = document.getElementById("msgCorreo");

    if (!regex.test(correo)) {
        msgCorreo.innerText = "Ingrese un correo valido!"
    } else {
        msgCorreo.innerText = "El correo ingresado es correcto";
    }
}

function ValidaNumero() {
    var telefono = document.getElementById("telefono").value;
    var msgNumero = document.getElementById("msgNumero");

    if (telefono.length < 9) {
        msgNumero.innerText = "Ingrese un numero valido!"
    } else {
        msgNumero.innerText = "El numero ingresado es correcto";
    }
}

var recopilainfo = [];
function Recopilacion(){
  let datosPersonales = new Object();
  let nombreCliente = document.getElementById('nombre').value;
  let emailCliente = document.getElementById('miemail').value;
  let telefonoCliente = document.getElementById('telefono').value;

  datosPersonales['Nombre'] = nombreCliente;
  datosPersonales['Correo'] = emailCliente;
  datosPersonales['telefono'] = telefonoCliente;

recopilainfo.push(datosPersonales);

console.log(recopilainfo);
}
