<?php

class Conexion
{

    static public function conectar()
    {
        $link = new PDO(
			"mysql:host=localhost;dbname=mrpancho;charset=utf8mb4",
			"root",
			"",
			array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
		);

		return $link;
    }
}