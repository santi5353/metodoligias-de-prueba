document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const btnRegistrar = document.getElementById("btnRegistrar");
  
    btnRegistrar.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Obtener los datos del formulario
      const tipoEmergencia = document.getElementById("tipoEmergencia").value;
      const ubicacion = document.getElementById("ubicacion").value;
  
      // Validar que ambos campos estén completados
      if (!tipoEmergencia) {
        mostrarAlertaError("Debes seleccionar el tipo de emergencia.");
      } else if (!ubicacion) {
        mostrarAlertaError("Debes ingresar la ubicación.");
      } else {
        // Mostrar una alerta con los datos registrados
        mostrarAlertaRegistro(tipoEmergencia, ubicacion);
      }
    });
  
    // Función para mostrar una alerta SweetAlert con los datos registrados
    function mostrarAlertaRegistro(tipoEmergencia, ubicacion) {
      const mensaje = `Se ha registrado una emergencia de tipo "${tipoEmergencia}" en la ubicación "${ubicacion}".`;
  
      Swal.fire({
        title: "Registro Exitoso",
        text: mensaje,
        icon: "success",
      });
  
      // Guardar los datos en una variable (puedes enviarlos al servidor aquí)
      const datosRegistrados = {
        tipoEmergencia: tipoEmergencia,
        ubicacion: ubicacion,
      };
  
      console.log("Datos registrados:", datosRegistrados);
    }
  
    // Función para mostrar una alerta de error
    function mostrarAlertaError(mensaje) {
      Swal.fire({
        title: "Error",
        text: mensaje,
        icon: "error",
      });
    }
  });
  
  // Exportar funciones para las pruebas
 // export { mostrarAlertaRegistro, mostrarAlertaError };
  