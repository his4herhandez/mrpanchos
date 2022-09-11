const validarUsuario = (valor) => {
    var test = valor
    return /(?=\w*[a-zA-Záéíóú0-9])\S{8,16}$/.test(test);
}

const ValidarPassword = (valor) => {
    var test = valor
    return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/gm.test(test);
}

const validarNombre = (valor) => {
    var test = valor;
    return /^[a-zA-Záéíóú,\s]*$/.test(test);
}


if(document.querySelector('#ingresoUsuarioLogin')) {
    
    ingresoUsuarioLogin.oninput = () => {
        if(!validarUsuario(ingresoUsuarioLogin.value)) {
    
            document.querySelector('#ingresoUsuarioLogin').classList.add('text-red')
            document.querySelector('#regexUsuarioLogin').classList.add('glyphicon-remove-circle')
            document.querySelector('#regexUsuarioLogin').classList.add('text-red')
            document.querySelector('#regexUsuarioLogin').classList.remove('glyphicon-envelope')
        } else {
    
            document.querySelector('#ingresoUsuarioLogin').classList.remove('text-red')
            document.querySelector('#regexUsuarioLogin').classList.remove('glyphicon-remove-circle')
            document.querySelector('#regexUsuarioLogin').classList.remove('text-red')
            document.querySelector('#regexUsuarioLogin').classList.add('glyphicon-envelope')
        }
    }
}

const validarNombreUsuario = () => {
    let nombre = document.querySelector('#ingresoNuevoNombre').value;
    if(validarNombre(nombre)) {

        document.querySelector('#ingresoNuevoNombre').classList.add('text-green')
        document.querySelector('#guardarUsuario').classList.remove('disabled')
        
        document.querySelector('#ingresoNuevoNombre').classList.remove('text-red')
        setTimeout(() => {

            document.querySelector('#ingresoNuevoNombre').classList.remove('text-green')
         }, 3000);
    } else {
        document.querySelector('#ingresoNuevoNombre').classList.remove('text-green')
        document.querySelector('#guardarUsuario').classList.add('disabled')
        
        document.querySelector('#ingresoNuevoNombre').classList.add('text-red')
    }
}

const validarApellidosUsuario = () => {
    let apellidos = document.querySelector('#ingresoNuevoApellidos').value;
    if(validarNombre(apellidos)) {

        document.querySelector('#ingresoNuevoApellidos').classList.add('text-green')
        document.querySelector('#guardarUsuario').classList.remove('disabled')

        document.querySelector('#ingresoNuevoApellidos').classList.remove('text-red')

        setTimeout(() => {

            document.querySelector('#ingresoNuevoApellidos').classList.remove('text-green')
         }, 3000);
    } else {
        document.querySelector('#guardarUsuario').classList.add('disabled')
        document.querySelector('#ingresoNuevoApellidos').classList.remove('text-green')
        document.querySelector('#ingresoNuevoApellidos').classList.add('text-red')
    }
}

const validarUser = () => {ingresoNuevoUsuario
    let user = document.querySelector('#ingresoNuevoUsuario').value;
    if(validarUsuario(user)) {

        document.querySelector('#guardarUsuario').classList.remove('disabled')
        document.querySelector('#ingresoNuevoUsuario').classList.add('text-green')
        document.querySelector('#ingresoNuevoUsuario').classList.remove('text-red')
        setTimeout(() => {

            document.querySelector('#ingresoNuevoUsuario').classList.remove('text-green')
         }, 3000);
    } else {

        document.querySelector('#guardarUsuario').classList.add('disabled')
        document.querySelector('#ingresoNuevoUsuario').classList.remove('text-green')
        document.querySelector('#ingresoNuevoUsuario').classList.add('text-red')
    }
}

const validarPass = () => {
    let password = document.querySelector('#ingresoNuevoPassword').value;
    if(ValidarPassword(password)) {

        document.querySelector('#guardarUsuario').classList.remove('disabled')
        document.querySelector('#ingresoNuevoPassword').classList.add('text-green')
        document.querySelector('#ingresoNuevoPassword').classList.remove('text-red')
        setTimeout(() => {

            document.querySelector('#ingresoNuevoPassword').classList.remove('text-green')
         }, 3000);
    } else {

        document.querySelector('#guardarUsuario').classList.add('disabled')
        document.querySelector('#ingresoNuevoPassword').classList.remove('text-green')
        document.querySelector('#ingresoNuevoPassword').classList.add('text-red')
    }
}

const confirmarPass = () => {
    let confirmPassword = document.querySelector('#ingresoNuevoConfirmarPassword').value;
    let password = document.querySelector('#ingresoNuevoPassword').value;
    if(ValidarPassword(confirmPassword) && confirmPassword === password) {

        document.querySelector('#guardarUsuario').classList.remove('disabled')
        document.querySelector('#ingresoNuevoConfirmarPassword').classList.add('text-green')
        document.querySelector('#ingresoNuevoConfirmarPassword').classList.remove('text-red')
        setTimeout(() => {

            document.querySelector('#ingresoNuevoConfirmarPassword').classList.remove('text-green')
         }, 3000);
    } else {

        document.querySelector('#guardarUsuario').classList.add('disabled')
        document.querySelector('#ingresoNuevoConfirmarPassword').classList.remove('text-green')
        document.querySelector('#ingresoNuevoConfirmarPassword').classList.add('text-red')
    }
}

const validarClave = () => {

    let clave = document.querySelector('#ingresoNuevoClave').value;
    if(validarNombre(clave)) {

        document.querySelector('#guardarUsuario').classList.remove('disabled')
        document.querySelector('#ingresoNuevoClave').classList.add('text-green')
        document.querySelector('#ingresoNuevoClave').classList.remove('text-red')
        setTimeout(() => {

            document.querySelector('#ingresoNuevoClave').classList.remove('text-green')
         }, 3000);
    } else {

        document.querySelector('#guardarUsuario').classList.add('disabled')
        document.querySelector('#ingresoNuevoClave').classList.remove('text-green')
        document.querySelector('#ingresoNuevoClave').classList.add('text-red')
    }
}

