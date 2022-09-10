<?php

    require_once 'conexion.php';

class UserModel
{

    static public function ingresarCredenciales($user)
    {
        $stmt = Conexion::conectar()->prepare("
            SELECT 
                ID, NAME, SURNAME, 
                USER, PASSWORD, STATE, CREATION 
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
}