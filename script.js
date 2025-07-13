const btn1Inicio = document.getElementById('idboton1Inicio');

// Simular alerta de notificación
function mostrarAlerta() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        alert(`¡Hola ${usuario.nombre}! Tienes una nueva alerta sobre el clima en tu zona: ${usuario.ubicacion}. Revisa las recomendaciones en tu cuenta.`);
    }
}
setInterval(mostrarAlerta, 480000);

btn1Inicio.addEventListener("click", function() {
    
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!usuario) {
        window.location.href = "registro.html";
        alert("Tienes que registrarte primero");
    } 
    else {
        window.location.href = "mapaInteractivo.html";
    }
    
});