<?php

    require_once '../controller/users.controller.php';
    require_once '../model/users.model.php';

class UserAjax {

    function ingresarCredenciales()
    {
        $user = $_POST['user'];
        $password = $_POST['password'];
        $respuesta = UserController::ingresarCredenciales($user, $password);
        echo json_encode($respuesta);
    }

    function olvidarCredenciales()
    {
        $respuesta = UserController::olvidarCredenciales();
        echo json_encode($respuesta);
    }
}

if(isset($_GET['function'])) {
    $funcion = $_GET["function"];
    $axCW = new UserAjax();
    $axCW->$funcion();
}