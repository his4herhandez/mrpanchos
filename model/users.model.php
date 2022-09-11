<?php

    require_once 'conexion.php';

class UserModel
{

    static public function ingresarCredenciales($user)
    {
        $stmt = Conexion::conectar()->prepare("
            SELECT 
                U.ID, U.NAME, U.SURNAME, U.USER, U.PASSWORD,
                U.CODE, U.URLAVATAR, U.STATE
            FROM 
                USERS U
            WHERE 
                U.USER = :user
        ");

        $stmt -> bindParam(":user", $user, PDO::PARAM_STR);

        try {

            $stmt -> execute();
            $queryStatus = ['execute' => 'ok', 'respuesta' => $stmt->fetch(PDO::FETCH_ASSOC)];
        } catch (PDOException $e) {

            $queryStatus = ['execute' => 'error', 'respuesta' => $e->getMessage()];
        }

        $stmt = null;
        return $queryStatus;
    }

    static public function guardarUsuario($datos)
    {
        $stmt = Conexion::conectar()->prepare("
            INSERT INTO 
                USERS
                    (NAME, SURNAME, USER, PASSWORD, CODE, URLAVATAR, STATE, CREATION) 
            VALUES
                (:nombre, :apellidos, :usuario, :password, :clave,  :avatar, 1, CURRENT_TIMESTAMP());
        ");

        $stmt -> bindParam(":nombre", $datos['nombre'], PDO::PARAM_STR);
        $stmt -> bindParam(":apellidos", $datos['apellidos'], PDO::PARAM_STR);
        $stmt -> bindParam(":usuario", $datos['usuario'], PDO::PARAM_STR);
        $stmt -> bindParam(":password", $datos['password'], PDO::PARAM_STR);
        $stmt -> bindParam(":clave", $datos['clave'], PDO::PARAM_STR);
        $stmt -> bindParam(":avatar", $datos['urlAvatar'], PDO::PARAM_STR);

        try {

            $stmt -> execute();
            $queryStatus = ['execute' => 'ok'];
        } catch (PDOException $e) {

            $queryStatus = ['execute' => 'error', 'respuesta' => $e -> getMessage()];
        }

        $stmt = null;
        return $queryStatus;
    }
}