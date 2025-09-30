// La "detección automática" se simula manteniendo una lista centralizada de tus archivos.
// Solo necesitas añadir el nombre del nuevo archivo HTML a este array.
const presentationFiles = [
    // La ruta es 'exposiciones/' + nombre_del_archivo
    "Exposiciones/vaper_tussy_presentation.html",
    "Exposiciones/carbono-amorfo.html",
    "Exposiciones/deep_learning_introduccion.html",
    "Exposiciones/ciberseguridad_moviles.html",
    "Exposiciones/proximamente.html",
    // **AQUÍ DEBES AÑADIR LOS NOMBRES DE TUS FUTURAS EXPOSICIONES**
];

const menuContainer = document.getElementById('menu-container');

/**
 * Función para generar un título limpio y legible a partir del nombre del archivo.
 * Ejemplo: "carbono-amorfo.html" -> "Carbono Amorfo"
 */
function formatTitle(filename) {
    // 1. Extrae solo el nombre del archivo sin la ruta de la carpeta
    let baseName = filename.split('/').pop();
    // 2. Quita la extensión ".html"
    let title = baseName.replace(/\.html/i, '');
    // 3. Reemplaza guiones bajos (_) y guiones (-) por espacios
    title = title.replace(/_|-/g, ' ');
    // 4. Capitaliza la primera letra de cada palabra para un mejor look (ej. "carbono amorfo" -> "Carbono Amorfo")
    title = title.split(' ').map(word => {
        if (!word) return ''; // Manejar espacios extra
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    return title;
}


// Genera los botones en el HTML
presentationFiles.forEach(fileUrl => {
    // Genera el texto del botón usando la función optimizada
    const title = formatTitle(fileUrl);
    
    // Crea la estructura de la tarjeta (card) con Bootstrap
    const colDiv = document.createElement('div');
    colDiv.className = 'col-12 col-sm-6 col-md-4'; // Hace la tarjeta responsiva

    const card = document.createElement('div');
    card.className = 'card shadow-sm h-100 presentation-card'; // Clase personalizada para estilo hover

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column align-items-center justify-content-center text-center';

    const h5 = document.createElement('h5');
    h5.className = 'card-title text-dark';
    h5.textContent = title;

    const button = document.createElement('a');
    button.href = fileUrl; // ¡Redirección automática a la URL del archivo!
    button.className = 'btn btn-primary mt-3 w-75';
    button.textContent = 'Ver Exposición';

    // Ensambla la tarjeta
    cardBody.appendChild(h5);
    cardBody.appendChild(button);
    card.appendChild(cardBody);
    colDiv.appendChild(card);
    
    // Añade la tarjeta al contenedor principal
    menuContainer.appendChild(colDiv);
});