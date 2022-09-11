<?php
    $nombreCompleto = $_SESSION['NAME'] . " " . $_SESSION['SURNAME'];
    $avatar = $_SESSION['URLAVATAR'];
?>

<header class="main-header">

    <!-- logotipo -->
    <a href="#" class="logo text-decoration-none">
        <!-- logo mini -->
        <span class="logo-mini"><b><i class="fa-solid fa-shop"></i></b></span>
        <!-- logo normal -->
        <span class="logo-lg"><b><i class="fa-solid fa-shop"></i></b> Mr Pancho's</span>
    </a>

    <nav class="navbar navbar-static-top d-flex justify-content-between" role="navigation">
        <a href="#" class="sidebar-toggle me-auto" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>
        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="<?php echo $avatar ?>" class="user-image">
                        <span class="hidden-xs"><?php echo $nombreCompleto ;?></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="user-body">
                            <div class="pull-right">
                                <a class="btn btn-default btn-flat" id="salirSistema">
                                    <span>Salir </span><i class="fa fa-sign-out"></i> 
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </nav>

</header>