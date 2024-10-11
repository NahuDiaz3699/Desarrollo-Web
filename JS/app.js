// Verificar si el usuario ya ha visto el SweetAlert
if (!localStorage.getItem('alertShown')) {
    // Mostrar SweetAlert si no ha sido mostrado antes
    Swal.fire({
        title: '¡Bienvenido a la página de Contacto!',
        text: 'Nos alegra que estés aquí. Si tienes alguna consulta, no dudes en escribirnos.',
        icon: 'info',
        confirmButtonText: 'Entendido',
        customClass: {
            popup: 'my-custom-popup'
        }
    });

    // Guardar en localStorage para que no se muestre nuevamente
    localStorage.setItem('alertShown', 'true');
}
