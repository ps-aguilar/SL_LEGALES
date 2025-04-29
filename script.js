function sendMail(event) {
    event.preventDefault(); // <- esto evita que el formulario se envíe normalmente

    let parms = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        compania: document.getElementById("compania").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value
    };
    
    emailjs.send("service_51C0RP", "template_service_51C0RP", parms)
    .then(
        function(response) {
            alert("¡El mensaje fue enviado correctamente!");
        },
        function(error) {
            alert("Ocurrió un error: " + JSON.stringify(error));
        }
    );
}
