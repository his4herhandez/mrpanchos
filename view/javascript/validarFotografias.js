const validarFotografia = (img, type) => {

    if(img['type'] != 'image/png') {

        swal({
            title: "Formato incorrecto",
            text: "Por favor, valida el formato permitido en fotografías.",
            icon: "error",
            button: "¡Ok!",
        });
    } else if(img['size'] > 2000000) {

        swal({
            title: "Tamaño incorrecto",
            text: "Por favor, valida el peso permitido en fotografías.",
            icon: "error",
            button: "¡Ok!",
        });
    } else {
        
        const imgFile = new FileReader; // lectura de archivo
        imgFile.readAsDataURL(img); //codificar img a base64

        switch(type) {
            case 'U':
                
                $(imgFile).on('load', function(event) {
                    const rutaImg = event.target.result;
                    $('.previsualizarUser').attr('src', rutaImg);
                });
                break;
        }

    }
}