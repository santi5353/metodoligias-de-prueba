document.addEventListener("DOMContentLoaded", function () {
    // Obtener la referencia al contenedor de emergencias
    const emergenciasContainer = document.getElementById("emergenciasContainer");
  
    // Simulación de datos (puedes obtener estos datos del servidor en una aplicación real)
    const datosRegistrados = [
      { tipoEmergencia: "Incendio", ubicacion: "Latitud: 40, Longitud: -73" },
      { tipoEmergencia: "Inundación", ubicacion: "Latitud: 35, Longitud: -80" },
      // Agrega más datos según sea necesario
    ];
  
    // Mostrar las emergencias en el contenedor
    mostrarEmergencias(datosRegistrados);
  
    // Función para mostrar las emergencias en el contenedor
    function mostrarEmergencias(emergencias) {
      // Limpiar el contenido actual del contenedor
      emergenciasContainer.innerHTML = "";
  
      // Iterar sobre las emergencias y agregarlas al contenedor
      emergencias.forEach((emergencia) => {
        const emergenciaElement = document.createElement("div");
        emergenciaElement.classList.add("card", "m-3", "p-3");
  
        const tipoEmergenciaElement = document.createElement("h5");
        tipoEmergenciaElement.textContent = `Tipo de Emergencia: ${emergencia.tipoEmergencia}`;
  
        const ubicacionElement = document.createElement("p");
        ubicacionElement.textContent = `Ubicación: ${emergencia.ubicacion}`;
  
        emergenciaElement.appendChild(tipoEmergenciaElement);
        emergenciaElement.appendChild(ubicacionElement);
  
        emergenciasContainer.appendChild(emergenciaElement);
      });
    }
  });
  