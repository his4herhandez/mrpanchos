<?php

class UserController 
{

    static public function ingresarCredenciales($user, $password)
    {

        $respuesta = UserModel::ingresarCredenciales($user);

        if($respuesta['execute'] == 'ok' && $respuesta['respuesta']) {

            if($user == $respuesta['respuesta']['USER'] && $password == $respuesta['respuesta']['PASSWORD']) {

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
}