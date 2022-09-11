<?php

class UserController 
{

    static public function ingresarCredenciales($user, $password)
    {

        $respuesta = UserModel::ingresarCredenciales($user);
        $encriptar = crypt($password, '$2a$07$usesomesillystringforsalt$');

        if($respuesta['execute'] == 'ok' && $respuesta['respuesta']) {

            if($user == $respuesta['respuesta']['USER'] && $encriptar == $respuesta['respuesta']['PASSWORD']) {

                session_start();
                $_SESSION['iniciarSesion'] = 'ok';
                foreach($respuesta['respuesta'] as $user => $value) {
                    $_SESSION[$user] = $value;
                }
            } else {
                $respuesta = ['execute' => 'incorrecto'];
                return $respuesta;
            }
        } else {

            $respuesta['execute'] = 'error';
        }

        return $respuesta;
    }


    static public function olvidarCredenciales()
    {
        session_start();
        if(isset($_SESSION['iniciarSesion'])) {

            
            $user = $_SESSION['USER'];
            session_destroy();
            $respuesta = ['execute' => 'session_is_dead', 'respuesta' => $user];
        }
        
        return $respuesta;
    }


    static public function guardarUsuario($datos)
    {
        $regex = false;
        foreach($datos as $element => $valor) {
            switch($element) {
                case 'nombre':
                case 'clave':
                case 'apellidos':

                    if(preg_match('/^[a-zA-Záéíóú,\s]*$/', $valor) && $valor != '') {
                        
                        $regex = true;
                    } else {

                        $regex = false;
                        $respuesta = ['execute' => $regex];
                        return $respuesta;
                    }
                    break;
                case 'usuario':

                    if(preg_match('/(?=\w*[a-zA-Záéíóú0-9])\S{8,16}$/', $valor) && $valor != '') {
                        
                        $regex = true;
                    } else {

                        $regex = false;
                        $respuesta = ['execute' => $regex];
                        return $respuesta;
                    }
                    break;
                case 'password':
                    if(preg_match('/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/', $valor) && $valor != '') {
                        
                        $regex = true;
                    } else {

                        $regex = false;
                        $respuesta = ['execute' => $regex];
                        return $respuesta;
                    }
                    break;
            }
        }
        /**
         * sha
         */
        $datos['password'] = crypt($datos['password'], '$2a$07$usesomesillystringforsalt$');
        $respuesta = UserModel::guardarUsuario($datos);
        return $respuesta;
    }
}