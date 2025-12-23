// ==========================================================
// 1. CONFIGURACIÓN Y ESTRUCTURAS DE DATOS GLOBALES
// ==========================================================

// La duración total de un SLOT de tiempo de clase (80 min clase + 10 min pausa)
const BLOQUE_TEORICO_DURACION = 90; 

// La duración del almuerzo (1 hora)
const ALMUERZO_DURACION = 60; 

// Horarios de inicio y fin de la jornada
const JORNADA_INICIO = 8 * 60 + 30; // 8:30 AM en minutos
const JORNADA_FIN = 19 * 60 + 20;   // 19:20 PM en minutos

// Horario específico del almuerzo
const ALMUERZO_INICIO = 14 * 60 + 20; // 14:20 PM
const ALMUERZO_FIN = 15 * 60 + 20;   // 15:20 PM

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
// 3. GENERACIÓN DEL HORARIO (Tabla) - ¡ACTUALIZADO!
// ==========================================================

/**
 * Genera dinámicamente las filas (horas) en la tabla del horario, incluyendo el almuerzo.
 */
function generateScheduleGrid() {
    scheduleTableBody.innerHTML = ''; // Limpia el contenido previo
    let time = JORNADA_INICIO;

    while (time < JORNADA_FIN) {
        let currentDuration = BLOQUE_TEORICO_DURACION;
        let isLunch = false;

        // Comprobación y manejo del almuerzo
        if (time === ALMUERZO_INICIO) {
            currentDuration = ALMUERZO_DURACION; // 60 minutos
            isLunch = true;
        }

        const row = document.createElement('tr');
        const startTime = minutesToTime(time);
        const endTime = minutesToTime(time + currentDuration);

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
            // Usamos la hora de inicio del slot como identificador de la celda
            dayCell.dataset.slotTime = startTime; 
            
            if (isLunch) {
                dayCell.textContent = "ALMUERZO";
                dayCell.classList.add('lunch-break');
            }
            
            row.appendChild(dayCell);
        });

        scheduleTableBody.appendChild(row);
        time += currentDuration; // Avanza al siguiente slot
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

    // 1. Verificar conflicto con el Almuerzo
    if (nuevoBloque.dia !== 'Sábado' && inicioNuevo < ALMUERZO_FIN && finNuevo > ALMUERZO_INICIO) {
        // Un curso se solapa con el horario de almuerzo (14:20 - 15:20)
        return true;
    }

    // 2. Verificar conflicto con otros cursos
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
            // Permite cambiar de sección si ya estaba el curso
            const indexToRemove = horarioSeleccionado.findIndex(c => c.sigla === curso.sigla);
            if (indexToRemove !== -1) {
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
    // Nota: Aunque el checkConflict se hace aquí, se repite en renderSchedule para detectar conflictos con cursos añadidos posteriormente.
    const hasConflict = seccion.horario.some(bloque => checkConflict(bloque));
    
    // Si hay conflicto, podrías mostrar una alerta más explícita aquí
    if (hasConflict) {
        alert(`¡Advertencia! La sección ${seccion.id} de ${curso.sigla} tiene un tope de horario (con el almuerzo o con otro curso). Se añadirá en color rojo.`);
    }

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
 */
function renderSchedule() {
    // 1. Limpiar todos los bloques previos
    const allDayCells = scheduleTableBody.querySelectorAll('td:not(.time-label):not(.lunch-break)');
    allDayCells.forEach(cell => cell.innerHTML = '');

    // 2. Iterar sobre todos los cursos seleccionados
    horarioSeleccionado.forEach(curso => {
        
        curso.horario.forEach(bloque => {
            const inicioBloqueMins = timeToMinutes(bloque.inicio);
            const finBloqueMins = timeToMinutes(bloque.fin);

            // 3. Iterar sobre las celdas de la tabla
            scheduleTableBody.querySelectorAll('td:not(.time-label)').forEach(cell => {
                const cellStartTimeStr = cell.dataset.slotTime;
                
                if (!cellStartTimeStr || cell.dataset.day !== bloque.dia) return;

                const cellStartTimeMins = timeToMinutes(cellStartTimeStr);
                let cellDuration = BLOQUE_TEORICO_DURACION;
                if (cellStartTimeMins === ALMUERZO_INICIO) {
                    cellDuration = ALMUERZO_DURACION;
                }
                const cellEndTimeMins = cellStartTimeMins + cellDuration;

                // Condición de solapamiento entre el curso y la celda de la grilla
                if (inicioBloqueMins < cellEndTimeMins && finBloqueMins > cellStartTimeMins) {
                    
                    // Si el curso cubre una celda entera (o una porción que queremos mostrar)
                    if (!cell.classList.contains('lunch-break')) {
                        const hasConflict = checkConflict(bloque);
                        
                        // Si la celda está vacía, la llenamos con el bloque
                        if (cell.innerHTML === '') {
                            const blockDiv = document.createElement('div');
                            blockDiv.classList.add('course-block');
                            
                            // Aplicar estilo de conflicto
                            if (hasConflict) {
                                blockDiv.classList.add('conflict');
                            }
                            
                            blockDiv.style.backgroundColor = getCourseColor(curso.sigla);
                            
                            blockDiv.innerHTML = `
                                <span style="font-weight: bold;">${curso.sigla}-${curso.seccionId}</span><br>
                                <span>${bloque.tipo}</span>
                            `;
                            cell.appendChild(blockDiv);
                        }
                    }
                }
            });
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
        // Agrega más colores según necesites
    };
    // Devuelve el color específico o un color por defecto
    return colors[sigla] || '#9C27B0'; 
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
