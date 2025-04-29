// scripts.js

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const compania = document.getElementById('compania').value.trim(); // optional
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validation flags
    let isValid = true;

    // Nombre validation
    if (nombre === '') {
        showError('nombre', 'El nombre es obligatorio');
        isValid = false;
    }

    // Apellido validation
    if (apellido === '') {
        showError('apellido', 'El apellido es obligatorio');
        isValid = false;
    }

    // Correo validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo === '' || !emailPattern.test(correo)) {
        showError('correo', 'Correo válido obligatorio');
        isValid = false;
    }

    // Teléfono validation
    const phonePattern = /^[0-9]{10}$/;
    if (telefono === '' || !phonePattern.test(telefono)) {
        showError('telefono', 'Número de teléfono válido obligatorio (10 dígitos)');
        isValid = false;
    }

    // Asunto validation
    if (asunto === '') {
        showError('asunto', 'El asunto es obligatorio');
        isValid = false;
    }

    // Mensaje validation
    if (mensaje === '') {
        showError('mensaje', 'El mensaje es obligatorio');
        isValid = false;
    }

    // If form is valid
    if (isValid) {
        alert('¡Formulario enviado con éxito!');
        // Here you can add code to send it via AJAX
    }
});

// Helper function to show error messages dynamically
function showError(fieldId, message) {
    let field = document.getElementById(fieldId);
    let error = field.parentElement.querySelector('.error-message');
    
    if (!error) {
        error = document.createElement('div');
        error.classList.add('error-message');
        field.parentElement.appendChild(error);
    }
    
    error.textContent = message;
    error.style.display = 'block';
}
