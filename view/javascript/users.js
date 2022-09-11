/** INICIAR SESION */
$('body').on('click', '#ingresarSistema', () => {

    let user = document.querySelector('#ingresoUsuarioLogin').value;
    let pass = document.querySelector('#ingresoPasswordLogin').value;

    if (user == '' && pass == '') {

        credenciales = 'A'; // ambos
    } else if (user != '' && pass == '') {

        credenciales = 'UN'; //usernull
    } else if (user == '' && pass != '') {

        credenciales = 'NP' //nullpassword
    } else if(user != '' || pass != '') {

        credenciales = 'C' //correcto
    } 

    switch(credenciales) {
        case 'A':
        case 'UN':
        case 'NP':
            swal({
                title: `Datos incorrectos`,
                text: "Por favor, valida tus credenciales",
                icon: "warning",
                button: "Continuar!",
            }).then((e)=> {
    
                $(user).val = '';
                $(pass).val = '';
            })
            break;
        case 'C':
            ingresarCredenciales(user, pass);
            break;
    }
})


/** CERRAR SESION */
$('body').on('click', '#salirSistema', () => {
    olvidarCrendenciales();
})


/** validacion para colocar modulo Agregar Usuario */
$('body').on('click', '#colocarContenedorAgregarUsuario', () => {
    
    let modulo = document.querySelector('#moduloAgregarUsuario');
    if(!modulo) {
        colocarModuloAgregarUsuario();
    } else {
        colocarModuloAlertaAgregarUsuario();
    }
})


/** desvincular modulo Agregar Usuario */
$('body').on('click', '#cancelarUsuario', () => {

    $('#moduloAgregarUsuario').remove();
});


/** guardar Usuario */
$('body').on('click', '#guardarUsuario', () => {

    let arrCkUsers = ['hacker', 'man', 'woman', 'turtle', 'owl', 'chick'];
    arrCkUsers.forEach(element => {
        $('#' + element).attr('checked');
    });
})


const changePicture = () => {

    let img = document.querySelector('#fotoUsuario').files[0];
    let type = 'U';
    validarFotografia(img, type);
}


colocarModuloAgregarUsuario = () => {
    modulo = 
        '<div class="box box-danger" id="moduloAgregarUsuario">' +
                '<div class="box-header with-border">' +
                    '<h3 class="box-title">Agregar Usuario</h3>' +
                '</div>' +
                '<div class="box-body">' +
                    '<div class="row">' +
                        '<div class="col-xs-12 col-md-3 form-group">' +
                            '<label for="ingresoNuevoNombre">Nombre:</label>' +
                            '<input type="text" class="form-control" id="ingresoNuevoNombre" placeholder="Ingresa tu nombre" onfocusout="validarNombreUsuario();">' +
                        '</div>' +
                        '<div class="col-xs-12 col-md-3 form-group">' +
                            '<label for="ingresoNuevoApellidos">Apellidos:</label>' +
                            '<input type="text" class="form-control" id="ingresoNuevoApellidos" placeholder="Ingresa tus apellidos" onfocusout="validarApellidosUsuario();">' +
                        '</div>' +
                        '<div class="col-xs-12 col-md-6 form-group">' +
                            '<label for="ingresoNuevoUsuario">Usuario:</label>' +
                            '<input type="text" class="form-control" id="ingresoNuevoUsuario" placeholder="Ingresa tu usuario" onfocusout="validarUser();">' +
                        '</div>' +
                        '<div class="col-xs-12 col-md-3 form-group">' +
                            '<label for="ingresoNuevoPassword">Password:</label>' +
                            '<input type="password" class="form-control" id="ingresoNuevoPassword" placeholder="Ingresa tu constraseña" onfocusout="validarPass();">' +
                        '</div>' +
                        '<div class="col-xs-12 col-md-3 form-group">' +
                            '<label for="ingresoNuevoConfirmarPassword">Confirmar password:</label>' +
                            '<input type="password" class="form-control" id="ingresoNuevoConfirmarPassword" placeholder="Confirma la contraseña" onfocusout="confirmarPass();">' +
                        '</div>' +
                        '<div class="col-xs-12 col-md-6 form-group">' +
                            '<label for="ingresoNuevoClave">Clave:</label>' +
                            '<input type="text" class="form-control" id="ingresoNuevoClave" placeholder="Ingresa un distintivo para recordar tu contraseña" onfocusout="validarClave();">' +
                        '</div>' +
                        '<div id="ckUser">' +
                            '<div class="col-xs-12 col-md-2 form-group">' +
                                '<div class="custom-control custom-radio image-checkbox">' +
                                    '<input type="radio" class="custom-control-input" id="hacker" name="ck2" onclick="obtenerEstado(this);">' +
                                    '<label class="custom-control-label" for="hacker">' +
                                        '<img src="view/img/users/profiles/hacker.png" width="100px" alt="#" class="img-fluid margin">' +
                                    '</label>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-xs-12 col-md-2 form-group">' +
                                '<div class="custom-control custom-radio image-checkbox">' +
                                    '<input type="radio" class="custom-control-input" id="woman" name="ck2" onclick="obtenerEstado(this);">' +
                                    '<label class="custom-control-label" for="woman">' +
                                        '<img src="view/img/users/profiles/woman.png" width="100px" alt="#" class="img-fluid margin">' +
                                    '</label>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-xs-12 col-md-2 form-group">' +
                                '<div class="custom-control custom-radio image-checkbox">' +
                                    '<input type="radio" class="custom-control-input" id="turtle" name="ck2" onclick="obtenerEstado(this);">' +
                                    '<label class="custom-control-label" for="turtle">' +
                                        '<img src="view/img/users/profiles/turtle.png" width="100px" alt="#" class="img-fluid margin">' +
                                    '</label>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-xs-12 col-md-2 form-group">' +
                                '<div class="custom-control custom-radio image-checkbox">' +
                                    '<input type="radio" class="custom-control-input" id="man" name="ck2" onclick="obtenerEstado(this);">' +
                                    '<label class="custom-control-label" for="man">' +
                                        '<img src="view/img/users/profiles/man.png" width="100px" alt="#" class="img-fluid margin">' +
                                    '</label>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-xs-12 col-md-2 form-group">' +
                                '<div class="custom-control custom-radio image-checkbox">' +
                                    '<input type="radio" class="custom-control-input" id="owl" name="ck2" onclick="obtenerEstado(this);">' +
                                    '<label class="custom-control-label" for="owl">' +
                                        '<img src="view/img/users/profiles/owl.png" width="100px" alt="#" class="img-fluid margin">' +
                                    '</label>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-xs-12 col-md-2 form-group">' +
                                '<div class="custom-control custom-radio image-checkbox">' +
                                    '<input type="radio" class="custom-control-input" id="chick" name="ck2" onclick="obtenerEstado(this);">' +
                                    '<label class="custom-control-label" for="chick">' +
                                        '<img src="view/img/users/profiles/chick.png" width="100px" alt="#" class="img-fluid margin">' +
                                ' </label>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="box-footer">' +
                    '<button type="button" class="btn btn-sm bg-olive pull-right margin disabled" id="guardarUsuario">Agregar usuario</button>' +
                    '<button type="button" class="btn btn-sm btn-danger pull-right margin" id="cancelarUsuario">Cancelar</button>' +
                '</div>' +
            '</div>';

    $('#contenidoUsuarios').prepend(modulo);
}


const obtenerEstado = (obj) => {

    let arrCkUsers = ['hacker', 'man', 'woman', 'turtle', 'owl', 'chick'];
    arrCkUsers.forEach(element => {
        $('#' + element).attr('src', 'no');
    });
    
    $('#ckUser').find('input:radio[id="' + obj.id  + '"]').attr('src', 'si');
}


colocarModuloAlertaAgregarUsuario = () => {
    modulo =
        '<div class="alert alert-danger alert-dismissible" id="alertaAgregarUsuario">' +
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
            '<h4><i class="icon fa fa-ban"></i> Atención!</h4>' +
            'Ya cuentas con un modulo colocado, no es posible colocar dos modulos' +
        '</div>';

    $('#contenidoUsuarios').prepend(modulo);

    setTimeout(() => {

       $('#alertaAgregarUsuario').remove();
    }, 3000);

}


ingresarCredenciales = (user, password) => {
    document.querySelector('#contenedorIngresarSistema').classList.add('overlay')
    $('#ingresarSistema').html(
        '<i class="fa fa-refresh fa-spin"></i>'
    );
    $.ajax({
        data: {
            'user': user,
            'password': password
        },
        url: 'ajax/users.ajax.php?function=ingresarCredenciales',
        type: 'post',
        typeData: 'json',
        success: (resp) => {
            
            let JSONresp = JSON.parse(resp);
            if(JSONresp.execute == 'ok') {
                $('#ingresarSistema').html(
                    '<i class="fa fa-check"></i>'
                );
                let user = JSONresp.respuesta.USER.toUpperCase();
                swal({
                    title: `Bienvenid@ ${user}`,
                    text: "Datos correctos",
                    icon: "success",
                    button: "Continuar!",
                }).then((e)=> {

                    window.location = 'index';
                })
            } else if (JSONresp.execute == 'error'){

                swal({
                    title: `Oops... Surgio un error`,
                    text: "Datos incorrectos",
                    icon: "error",
                    button: "Continuar!",
                }).then((e)=> {

                    location.reload();
                });
            } else if (JSONresp.execute == 'incorrecto') {
                
                swal({
                    title: `Oops... Surgio un error`,
                    text: "Datos incorrectos",
                    icon: "error",
                    button: "Continuar!",
                }).then((e)=> {

                    location.reload();
                });
            }
        },
        error: (resp) => {
            console.log('error', resp)
        }
    });
}


olvidarCrendenciales = () => {

    $.ajax({
        url: 'ajax/users.ajax.php?function=olvidarCredenciales',
        type: 'post',
        typeData: 'json',
        success: (resp) => {
            let JSONresp = JSON.parse(resp);
            let user = JSONresp.respuesta.toUpperCase();
            if(JSONresp.execute == 'session_is_dead') {

                swal({
                    title: `Adios ${user}`,
                    icon: "success",
                    button: "Continuar!",
                }).then((e)=> {

                    window.location = 'login';
                })
            } else {
                swal({
                    title: `Oops... Surgio un error`,
                    text: "Datos incorrectos",
                    icon: "error",
                    button: "Continuar!",
                }).then((e)=> {

                    location.reload();
                })
            }
        },
        error: (resp) => {
            console.log(resp)
        }
    });
}