<?php
session_start();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>AdminLTE 2 <?php echo '| ' . $ruta = isset($_GET['ruta']) ? ucfirst($_GET['ruta']) : ''; ?></title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="view/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="view/bower_components/font-awesome/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="view/bower_components/Ionicons/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="view/dist/css/AdminLTE.min.css">
    <!-- DataTables -->
    <link rel="stylesheet" href="view/bower_components/datatables.net-bs/css/bootstrap.min.css">
    <link rel="stylesheet" href="view/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="view/dist/css/skins/_all-skins.min.css">


    <!-- Google Font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

    <!-- jQuery 3 -->
    <script src="view/bower_components/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap 3.3.7 -->
    <script src="view/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- SlimScroll -->
    <script src="view/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
    <!-- FastClick -->
    <script src="view/bower_components/fastclick/lib/fastclick.js"></script>
    <!-- AdminLTE App -->
    <script src="view/dist/js/adminlte.min.js"></script>

    <!-- sweetalert -->
    <script src="view/sweetalert/sweetalert.min.js"></script>

    <!-- DataTables -->
    <script src="view/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="view/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/a2af15c6a9.js" crossorigin="anonymous"></script>
</head>

<body class="hold-transition skin-red sidebar-collapse sidebar-mini login-page">
    <!-- Site wrapper -->
    <?php
    if (isset($_SESSION['iniciarSesion']) && $_SESSION['iniciarSesion'] == 'ok') { ?>

        <div class="wrapper"> <?php
                                include "modules/header.php";
                                include "modules/aside.php";

                                if (isset($_GET['ruta'])) {
                                    switch ($_GET['ruta']) {
                                        case 'index':
                                            include "modules/index.php";
                                            break;
                                        case 'users':
                                            include "modules/users.php";
                                            break;
                                        case 'products':
                                            include "modules/products.php";
                                            break;
                                        case 'customers':
                                            include "modules/customers.php";
                                            break;
                                        case 'sales':
                                            include "modules/sales.php";
                                            break;
                                        case 'reports':
                                            include "modules/reports-sales.php";
                                            break;
                                        default:
                                            include "modules/not-found.php";
                                            break;
                                    }
                                } else {
                                    include "modules/index.php";
                                }

                                include "modules/footer.php";

                                ?> </div> <?php } else {
                                            include "modules/login.php";
                                        }
                                            ?>
    <!-- ./wrapper -->
    <script src="view/javascript/template.js?v=<?php echo rand(); ?>"></script>
    <script src="view/javascript/users.js?v=<?php echo rand(); ?>"></script>
    <script src="view/javascript/regex.js?v=<?php echo rand(); ?>"></script>
    <script src="view/javascript/datatables.js?v=<?php echo rand(); ?>"></script>


</body>

</html>