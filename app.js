// ==========================================================
// 1. CONFIGURACIÓN Y ESTRUCTURAS DE DATOS GLOBALES
// ==========================================================

// Duración del almuerzo (60 minutos)
const ALMUERZO_DURACION = 60; 

// Horario específico del almuerzo
const ALMUERZO_INICIO = 14 * 60 + 20; // 14:20 PM
const ALMUERZO_FIN = 15 * 60 + 20;   // 15:20 PM

// Definición de los slots de tiempo fijos de la tabla (90 min o ajustados por almuerzo)
// Estos slots representan las filas de la tabla.
const TIME_SLOTS = [
    { start: "08:30", end: "10:00" }, // Slot de 90 min
    { start: "10:00", end: "11:30" }, // Slot de 90 min
    { start: "11:30", end: "13:00" }, // Slot de 90 min
    { start: "13:00", end: "14:20" }, // Slot de 80 min (Ajustado antes del almuerzo)
    { start: "14:20", end: "15:20", isLunch: true }, // ALMUERZO (60 min)
    { start: "15:20", end: "16:50" }, // Slot de 90 min
    { start: "16:50", end: "18:20" }, // Slot de 90 min
    { start: "18:20", end: "19:50" }, // Slot de 90 min
];

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

/**
 * Busca el tiempo de inicio de slot de la grilla (ej. "10:00") para un bloque de curso (ej. "10:15").
 * ESTA ES LA CLAVE PARA RESOLVER EL ERROR DE DESFASE HORARIO.
 * @param {string} courseStartTimeStr - Hora de inicio real del curso.
 * @returns {string|null} Hora de inicio del slot de la grilla que lo contiene.
 */
function findSlotTime(courseStartTimeStr) {
    const courseStartTimeMins = timeToMinutes(courseStartTimeStr);
    
    // Iterar sobre los slots definidos
    for (const slot of TIME_SLOTS) {
        const slotStartTimeMins = timeToMinutes(slot.start);
        const slotEndTimeMins = timeToMinutes(slot.end);
        
        // Verifica si la hora de inicio del curso está contenida dentro del rango del slot.
        // Ej: Curso a 10:15 debe caer en el slot 10:00 - 11:30.
        // Si el curso empieza exactamente a la hora del slot (ej. 10:00), el chequeo lo incluye.
        if (courseStartTimeMins >= slotStartTimeMins && courseStartTimeMins < slotEndTimeMins) {
            return slot.start;
        }
    }
    // Caso especial para cursos que empiezan exactamente donde termina un slot (y no cae en el siguiente)
    for (const slot of TIME_SLOTS) {
        if (courseStartTimeStr === slot.end) {
            return slot.start; // O el siguiente slot si existiera, pero con el check anterior no es necesario
        }
    }
    return null; 
}


// ==========================================================
// 3. GENERACIÓN DEL HORARIO (Tabla) - ¡ACTUALIZADO!
// ==========================================================

/**
 * Genera dinámicamente las filas (horas) en la tabla del horario, usando los slots fijos.
 */
function generateScheduleGrid() {
    scheduleTableBody.innerHTML = ''; // Limpia el contenido previo

    TIME_SLOTS.forEach(slot => {
        const row = document.createElement('tr');
        const startTime = slot.start;
        const endTime = slot.end;

        // Celda de la hora (primera columna)
        const timeCell = document.createElement('td');
        timeCell.textContent = `${startTime} - ${endTime}`;
        timeCell.classList.add('time-label');
        row.appendChild(timeCell);

        // Celdas para los días de la semana (Lunes a Sábado)
        const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        days.forEach(day => {
            const dayCell = document.createElement('td');
            dayCell.dataset.day = day;
            // Usamos la hora de inicio del slot como identificador de la celda
            dayCell.dataset.slotTime = startTime; 
            
            if (slot.isLunch) {
                dayCell.textContent = "ALMUERZO";
                dayCell.classList.add('lunch-break');
            }
            
            row.appendChild(dayCell);
        });

        scheduleTableBody.appendChild(row);
    });
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

    // 1. Verificar conflicto con el Almuerzo (solo aplica Lunes a Viernes)
    if (nuevoBloque.dia !== 'Sábado' && inicioNuevo < ALMUERZO_FIN && finNuevo > ALMUERZO_INICIO) {
        // Un curso se solapa con el horario de almuerzo (14:20 - 15:20)
        return true;
    }

    // 2. Verificar conflicto con otros cursos
    for (const cursoSeleccionado of horarioSeleccionado) {
        // Excluir el curso que se está chequeando contra sí mismo si se está re-renderizando
        if (cursoSeleccionado.sigla === nuevoBloque.sigla && cursoSeleccionado.seccionId === nuevoBloque.seccionId) {
            continue; 
        }

        for (const bloqueExistente of cursoSeleccionado.horario) {
            if (bloqueExistente.dia === nuevoBloque.dia) {
                const inicioExistente = timeToMinutes(bloqueExistente.inicio);
                const finExistente = timeToMinutes(bloqueExistente.fin);
                
                // Condición de solapamiento:
                if (inicioNuevo < finExistente && finNuevo > inicioExistente) {
                    return true; // ¡Conflicto detectado!
                }
            }
        }
    }
    return false;
}

// ==========================================================
// 5. MANEJO DE SELECCIÓN DE CURSOS (Sin cambios)
// ==========================================================

function displaySections(curso) {
    sectionSelectionDiv.innerHTML = `<h3>Secciones de ${curso.sigla}:</h3>`;
    curso.secciones.forEach(seccion => {
        const button = document.createElement('button');
        button.textContent = `Sección ${seccion.id}`;
        
        const isAdded = horarioSeleccionado.some(c => c.sigla === curso.sigla && c.seccionId === seccion.id);
        button.disabled = isAdded;

        button.onclick = () => {
            const indexToRemove = horarioSeleccionado.findIndex(c => c.sigla === curso.sigla);
            if (indexToRemove !== -1) {
                removeCourse(curso.sigla, horarioSeleccionado[indexToRemove].seccionId); 
            }
            addCourseToSchedule(curso, seccion);
            
            courseResultsDiv.innerHTML = '';
            sectionSelectionDiv.innerHTML = '';
            courseSearchInput.value = '';
        };
        sectionSelectionDiv.appendChild(button);
    });
}

function addCourseToSchedule(curso, seccion) {
    const courseData = {
        sigla: curso.sigla,
        nombre: curso.nombre,
        seccionId: seccion.id,
        horario: seccion.horario
    };

    const hasConflict = seccion.horario.some(bloque => checkConflict({ ...bloque, sigla: curso.sigla, seccionId: seccion.id }));
    
    if (hasConflict) {
        // Mostrar la alerta solo cuando se añade
        alert(`¡Advertencia! La sección ${seccion.id} de ${curso.sigla} tiene un tope de horario (con el almuerzo o con otro curso). Se añadirá en color rojo.`);
    }

    horarioSeleccionado.push(courseData);

    renderSchedule(); // El renderizado se encarga de pintar el conflicto
    renderSelectedList();
}

function removeCourse(sigla, seccionId) {
    horarioSeleccionado = horarioSeleccionado.filter(c => 
        !(c.sigla === sigla && c.seccionId === seccionId)
    );
    renderSchedule(); 
    renderSelectedList();
}

// ==========================================================
// 6. RENDERIZADO Y BÚSQUEDA - ¡ACTUALIZADO!
// ==========================================================

/**
 * Dibuja los bloques de curso en la tabla de horario, usando la nueva lógica de mapeo de slots.
 */
function renderSchedule() {
    // 1. Limpiar todos los bloques previos
    const allDayCells = scheduleTableBody.querySelectorAll('td:not(.time-label):not(.lunch-break)');
    allDayCells.forEach(cell => cell.innerHTML = '');

    // 2. Iterar sobre todos los cursos seleccionados
    horarioSeleccionado.forEach(curso => {
        
        curso.horario.forEach(bloque => {
            // Se debe pasar la sigla/sección para excluirse del chequeo de conflicto
            const fullBloque = { ...bloque, sigla: curso.sigla, seccionId: curso.seccionId };
            const hasConflict = checkConflict(fullBloque);

            // 3. Mapear la hora real de inicio del curso al slot de la grilla
            const slotStartTime = findSlotTime(bloque.inicio);
            
            if (!slotStartTime) {
                // Este curso no cabe en ningún slot definido (ej. es un horario muy inusual)
                return;
            }

            // 4. Usar el slot de la grilla mapeado para encontrar la celda
            const cell = scheduleTableBody.querySelector(
                `td[data-day="${bloque.dia}"][data-slot-time="${slotStartTime}"]`
            );
            
            if (cell && !cell.classList.contains('lunch-break')) {
                // 5. Dibujar el bloque en la celda
                const blockDiv = document.createElement('div');
                blockDiv.classList.add('course-block');
                
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
        });
    });
}

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

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.onclick = (e) => {
            const sigla = e.target.dataset.sigla;
            const seccionId = e.target.dataset.seccion;
            removeCourse(sigla, seccionId);
        };
    });
}


function searchCourses() {
    const query = courseSearchInput.value.toLowerCase();
    courseResultsDiv.innerHTML = '';
    sectionSelectionDiv.innerHTML = ''; 

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

function getCourseColor(sigla) {
    const colors = {
        'INF101': '#4CAF50', 
        'MAT202': '#FF9800', 
        'INF303': '#2196F3', 
        'PEM101': '#673AB7', // Morado
        'EHI036': '#00BCD4', // Cyan
        'INF305': '#FF5722', // Rojo/Naranja
        // ... Agrega más colores
    };
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
