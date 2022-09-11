<?php

session_start();




require_once 'controller/template.controller.php';

$template = TemplateController::invokeTemplate();