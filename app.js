// ==========================================================
// 1. CONFIGURACIÓN Y ESTRUCTURAS DE DATOS GLOBALES
// ==========================================================

// Definición de las horas de inicio/fin de la jornada y la duración de cada bloque (en minutos).
const JORNADA_INICIO = 8 * 60 + 30; // 8:30 AM en minutos (8*60 + 30)
const JORNADA_FIN = 20 * 60 + 0;   // 20:00 PM en minutos
const BLOQUE_DURACION = 90;        // 90 minutos por bloque (ej. 8:30 a 10:00)

// Almacenamiento de cursos seleccionados para el horario
let horarioSeleccionado = []; 

// Referencias a elementos del DOM
const scheduleTableBody = document.getElementById('schedule-body');
const courseSearchInput = document.getElementById('course-search');
const courseResultsDiv = document.getElementById('course-results');
const sectionSelectionDiv = document.getElementById('section-selection');
const selectedCoursesList = document.getElementById('selected-courses');

// ==========================================================
// 2. UTILIDADES DE TIEMPO
// ==========================================================

/**
 * Convierte una hora en formato "HH:MM" a minutos desde medianoche.
 * @param {string} timeStr - La hora en formato "HH:MM".
 * @returns {number} Minutos desde medianoche.
 */
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

/**
 * Convierte minutos desde medianoche a una hora legible "HH:MM".
 * @param {number} totalMinutes - Minutos desde medianoche.
 * @returns {string} Hora en formato "HH:MM".
 */
function minutesToTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// ==========================================================
// 3. GENERACIÓN DEL HORARIO (Tabla)
// ==========================================================

/**
 * Genera dinámicamente las filas (horas) en la tabla del horario.
 */
function generateScheduleGrid() {
    scheduleTableBody.innerHTML = ''; // Limpia el contenido previo

    for (let time = JORNADA_INICIO; time < JORNADA_FIN; time += BLOQUE_DURACION) {
        const row = document.createElement('tr');
        const startTime = minutesToTime(time);
        const endTime = minutesToTime(time + BLOQUE_DURACION);

        // Celda de la hora (primera columna)
        const timeCell = document.createElement('td');
        timeCell.textContent = `${startTime} - ${endTime}`;
        timeCell.classList.add('time-label');
        row.appendChild(timeCell);

        // Celdas para los días de la semana (Lunes a Viernes)
        const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
        days.forEach(day => {
            const dayCell = document.createElement('td');
            dayCell.dataset.day = day;
            dayCell.dataset.startTime = startTime;
            dayCell.dataset.endTime = endTime;
            row.appendChild(dayCell);
        });

        scheduleTableBody.appendChild(row);
    }
}

// ==========================================================
// 4. LÓGICA DE DETECCIÓN DE TOPES
// ==========================================================

/**
 * Verifica si un nuevo bloque de horario entra en conflicto con algún
 * curso ya seleccionado en el horario.
 * @param {object} nuevoBloque - El objeto de horario a verificar (dia, inicio, fin).
 * @returns {boolean} True si hay conflicto, False si no lo hay.
 */
function checkConflict(nuevoBloque) {
    const inicioNuevo = timeToMinutes(nuevoBloque.inicio);
    const finNuevo = timeToMinutes(nuevoBloque.fin);

    for (const cursoSeleccionado of horarioSeleccionado) {
        for (const bloqueExistente of cursoSeleccionado.horario) {
            if (bloqueExistente.dia === nuevoBloque.dia) {
                const inicioExistente = timeToMinutes(bloqueExistente.inicio);
                const finExistente = timeToMinutes(bloqueExistente.fin);
                
                // Condición de solapamiento:
                // Si el nuevo bloque empieza antes de que el existente termine Y
                // el nuevo bloque termina después de que el existente empiece.
                if (inicioNuevo < finExistente && finNuevo > inicioExistente) {
                    return true; // ¡Conflicto detectado!
                }
            }
        }
    }
    return false;
}

// ==========================================================
// 5. MANEJO DE SELECCIÓN DE CURSOS
// ==========================================================

/**
 * Muestra las secciones de un curso seleccionado.
 * @param {object} curso - El objeto del curso (sigla, nombre, secciones).
 */
function displaySections(curso) {
    sectionSelectionDiv.innerHTML = `<h3>Secciones de ${curso.sigla}:</h3>`;
    curso.secciones.forEach(seccion => {
        const button = document.createElement('button');
        button.textContent = `Sección ${seccion.id}`;
        
        // Deshabilita el botón si esta sección ya fue añadida
        const isAdded = horarioSeleccionado.some(c => c.sigla === curso.sigla && c.seccionId === seccion.id);
        button.disabled = isAdded;

        button.onclick = () => {
            // Verifica si el curso ya está en la lista (si viene de otra sección)
            const indexToRemove = horarioSeleccionado.findIndex(c => c.sigla === curso.sigla);
            if (indexToRemove !== -1) {
                // Si el curso ya estaba, lo quitamos antes de añadir la nueva sección
                removeCourse(curso.sigla, horarioSeleccionado[indexToRemove].seccionId); 
            }
            addCourseToSchedule(curso, seccion);
            // Limpia la selección después de añadir
            courseResultsDiv.innerHTML = '';
            sectionSelectionDiv.innerHTML = '';
            courseSearchInput.value = '';
        };
        sectionSelectionDiv.appendChild(button);
    });
}

/**
 * Añade la sección de un curso al horario y actualiza la vista.
 * @param {object} curso - El objeto del curso.
 * @param {object} seccion - El objeto de la sección a añadir (id, horario).
 */
function addCourseToSchedule(curso, seccion) {
    const courseData = {
        sigla: curso.sigla,
        nombre: curso.nombre,
        seccionId: seccion.id,
        horario: seccion.horario
    };

    // 1. Detección de Conflicto para toda la sección
    const hasConflict = seccion.horario.some(bloque => checkConflict(bloque));

    // 2. Añadir a la lista de seleccionados
    horarioSeleccionado.push(courseData);

    // 3. Pintar en la tabla
    renderSchedule(hasConflict);
    renderSelectedList();
}

/**
 * Elimina un curso del horario y actualiza la vista.
 * @param {string} sigla - Sigla del curso a remover.
 * @param {string} seccionId - ID de la sección a remover.
 */
function removeCourse(sigla, seccionId) {
    horarioSeleccionado = horarioSeleccionado.filter(c => 
        !(c.sigla === sigla && c.seccionId === seccionId)
    );
    // Vuelve a renderizar toda la tabla para limpiar los bloques y revisar posibles nuevos topes
    renderSchedule(false); 
    renderSelectedList();
}

// ==========================================================
// 6. RENDERIZADO Y BÚSQUEDA
// ==========================================================

/**
 * Dibuja los bloques de curso en la tabla de horario.
 * @param {boolean} highlightConflict - Si debe resaltar los bloques en conflicto.
 */
function renderSchedule(highlightConflict) {
    // 1. Limpiar todos los bloques previos
    const allDayCells = scheduleTableBody.querySelectorAll('td:not(.time-label)');
    allDayCells.forEach(cell => cell.innerHTML = '');

    // 2. Iterar sobre todos los cursos seleccionados
    horarioSeleccionado.forEach(curso => {
        // Volver a revisar el conflicto para el renderizado
        const isCourseConflict = curso.horario.some(bloque => checkConflict(bloque));

        curso.horario.forEach(bloque => {
            // Buscamos la celda de la tabla que corresponde al tiempo y día del bloque
            const cell = scheduleTableBody.querySelector(`td[data-day="${bloque.dia}"][data-start-time="${bloque.inicio}"]`);
            
            if (cell) {
                const blockDiv = document.createElement('div');
                blockDiv.classList.add('course-block');
                
                // Si hay conflicto, aplicamos la clase 'conflict'
                if (highlightConflict || isCourseConflict || checkConflict(bloque)) {
                     // El checkConflict aquí revisa si este *bloque* específico tiene conflicto
                    blockDiv.classList.add('conflict');
                }
                
                blockDiv.style.backgroundColor = getCourseColor(curso.sigla); // Asigna un color
                
                blockDiv.innerHTML = `
                    <span style="font-weight: bold;">${curso.sigla}-${curso.seccionId}</span><br>
                    <span>${bloque.tipo} (${bloque.inicio})</span>
                `;
                cell.appendChild(blockDiv);
            }
        });
    });
}

/**
 * Dibuja la lista de cursos seleccionados en el panel lateral.
 */
function renderSelectedList() {
    selectedCoursesList.innerHTML = '';
    horarioSeleccionado.forEach(curso => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${curso.sigla}-${curso.seccionId}</strong>: ${curso.nombre} 
            <button class="remove-btn" data-sigla="${curso.sigla}" data-seccion="${curso.seccionId}">X</button>
        `;
        selectedCoursesList.appendChild(li);
    });

    // Añadir el listener de eliminación
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.onclick = (e) => {
            const sigla = e.target.dataset.sigla;
            const seccionId = e.target.dataset.seccion;
            removeCourse(sigla, seccionId);
        };
    });
}


/**
 * Busca y filtra los cursos basado en la entrada del usuario.
 */
function searchCourses() {
    const query = courseSearchInput.value.toLowerCase();
    courseResultsDiv.innerHTML = '';
    sectionSelectionDiv.innerHTML = ''; // Limpiar secciones al buscar

    if (query.length < 2) return;

    const filtered = datosCursos.filter(curso => 
        curso.sigla.toLowerCase().includes(query) || 
        curso.nombre.toLowerCase().includes(query)
    );

    filtered.forEach(curso => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.textContent = `${curso.sigla}: ${curso.nombre}`;
        resultItem.onclick = () => {
            displaySections(curso);
            // Opcional: Limpiar resultados después de la selección de curso
            // courseResultsDiv.innerHTML = '';
        };
        courseResultsDiv.appendChild(resultItem);
    });
}

// ==========================================================
// 7. FUNCIÓN DE INICIO
// ==========================================================

// Función simple para asignar colores a los cursos
function getCourseColor(sigla) {
    const colors = {
        'INF101': '#4CAF50', // Verde
        'MAT202': '#FF9800', // Naranja
        'INF303': '#2196F3', // Azul claro
        // Añade más colores para otros cursos o usa un hash
    };
    return colors[sigla] || '#9C27B0'; // Morado por defecto
}

/**
 * Inicializa la aplicación: genera la tabla y activa los listeners.
 */
function initApp() {
    generateScheduleGrid();
    courseSearchInput.addEventListener('input', searchCourses);
}

// Inicia la aplicación cuando el script se carga
initApp();
