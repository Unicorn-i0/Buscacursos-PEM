// ==========================================================
// 1. CONFIGURACIÓN Y ESTRUCTURAS DE DATOS GLOBALES
// ==========================================================

// Duración del almuerzo (60 minutos)
const ALMUERZO_DURACION = 60; 

// Horario específico del almuerzo
const ALMUERZO_INICIO = 14 * 60 + 20; // 14:20 PM
const ALMUERZO_FIN = 15 * 60 + 20;   // 15:20 PM

// Definición de los slots de tiempo fijos de la tabla (90 min o ajustados por almuerzo)
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

function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

function findSlotTime(courseStartTimeStr) {
    const courseStartTimeMins = timeToMinutes(courseStartTimeStr);
    
    for (const slot of TIME_SLOTS) {
        const slotStartTimeMins = timeToMinutes(slot.start);
        const slotEndTimeMins = timeToMinutes(slot.end);
        
        if (courseStartTimeMins >= slotStartTimeMins && courseStartTimeMins < slotEndTimeMins) {
            return slot.start;
        }
    }
    return null; 
}


// ==========================================================
// 3. GENERACIÓN DEL HORARIO (Tabla)
// ==========================================================

function generateScheduleGrid() {
    scheduleTableBody.innerHTML = ''; 

    TIME_SLOTS.forEach(slot => {
        const row = document.createElement('tr');
        const startTime = slot.start;
        const endTime = slot.end;

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

function checkConflict(nuevoBloque) {
    const inicioNuevo = timeToMinutes(nuevoBloque.inicio);
    const finNuevo = timeToMinutes(nuevoBloque.fin);

    if (nuevoBloque.dia !== 'Sábado' && inicioNuevo < ALMUERZO_FIN && finNuevo > ALMUERZO_INICIO) {
        return true;
    }

    for (const cursoSeleccionado of horarioSeleccionado) {
        // Excluir el curso que se está chequeando contra sí mismo
        if (cursoSeleccionado.sigla === nuevoBloque.sigla && cursoSeleccionado.seccionId === nuevoBloque.seccionId) {
            continue; 
        }

        for (const bloqueExistente of cursoSeleccionado.horario) {
            if (bloqueExistente.dia === nuevoBloque.dia) {
                const inicioExistente = timeToMinutes(bloqueExistente.inicio);
                const finExistente = timeToMinutes(bloqueExistente.fin);
                
                if (inicioNuevo < finExistente && finNuevo > inicioExistente) {
                    return true; 
                }
            }
        }
    }
    return false;
}

// ==========================================================
// 5. MANEJO DE SELECCIÓN DE CURSOS - ¡ACTUALIZADO PARA HOVER!
// ==========================================================

function formatScheduleSummary(horario) {
    return horario.map(bloque => 
        `${bloque.dia}: ${bloque.inicio}-${bloque.fin} (${bloque.tipo})`
    ).join(' | ');
}
/**
 * Genera una cadena de texto legible que resume el horario de una sección.
 */
function formatScheduleSummary(horario) {
    // Ejemplo: "Jueves: 8:30-9:50 (CÁTEDRA) | Viernes: 10:00-11:20 (AYUDANTÍA)"
    return horario.map(bloque => 
        `${bloque.dia}: ${bloque.inicio}-${bloque.fin} (${bloque.tipo})`
    ).join(' | ');
}

/**
 * Muestra las secciones de un curso y añade listeners de previsualización.
 */
function displaySections(curso) {
    sectionSelectionDiv.innerHTML = `<h3>Secciones de ${curso.sigla} - ${curso.nombre}:</h3>`;
    
    curso.secciones.forEach(seccion => {
        
        const sectionContainer = document.createElement('div');
        sectionContainer.classList.add('section-option'); // <--- CLAVE PARA EL CSS

        // 1. Botón de selección
        const button = document.createElement('button');
        button.textContent = `Sección ${seccion.id}`;
        button.classList.add('section-btn');
        
        const isAdded = horarioSeleccionado.some(c => c.sigla === curso.sigla && c.seccionId === seccion.id);
        button.disabled = isAdded;
        if (isAdded) {
            button.textContent += " (Seleccionada)";
        }

        // 2. Resumen del horario
        const scheduleSummary = formatScheduleSummary(seccion.horario);
        const summarySpan = document.createElement('span');
        summarySpan.classList.add('schedule-summary'); // <--- CLAVE PARA EL CSS
        summarySpan.textContent = scheduleSummary;
        
        // ... (El resto de la lógica de hover y el click del botón es la misma) ...
        
        // Eventos de previsualización (manteniendo la lógica del hover)
        // ... (resto de la lógica del hover)

        // Lógica de añadir (click en el botón)
        button.onclick = () => {
            // ... (resto de la lógica del botón)
        };
        
        sectionContainer.appendChild(button);
        sectionContainer.appendChild(summarySpan); // <--- INSERCIÓN DEL RESUMEN
        sectionSelectionDiv.appendChild(sectionContainer);
    });
}
// ... (El resto de app.js)
2. 🎨 styles.css (Asegurando la Visibilidad)
El problema es casi seguro la falta de estilos o estilos insuficientes. Asegúrate de que las siguientes reglas CSS estén presentes y correctas en tu archivo styles.css.

Si ya tenías estas reglas, verifica que no estén siendo sobreescritas por otro estilo. Si no las tenías, agrégalas al final del archivo:

CSS

/* --- Estilos para mostrar el horario antes de seleccionar --- */

/* Contenedor principal para alinear el botón y el texto */
.section-option {
    display: flex; /* Utiliza Flexbox para alineación */
    align-items: center; /* Centra verticalmente */
    margin-bottom: 8px;
    padding: 5px 0;
    border-bottom: 1px dashed #eee;
    background-color: #ffffff; /* Fondo claro */
    transition: background-color 0.2s;
}

.section-option:hover {
    background-color: #f0f0ff; /* Efecto suave al pasar el ratón */
}

/* Estilo del botón de selección */
.section-btn {
    margin-right: 15px; 
    padding: 8px 15px;
    background-color: #2196F3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    flex-shrink: 0; /* Evita que el botón se achique si el texto es muy largo */
}

.section-btn:hover:not(:disabled) {
    background-color: #1a7fc5;
}

.section-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

/* Estilo del texto del horario (el que no se veía) */
.schedule-summary {
    font-size: 0.95em; /* Asegura un tamaño legible */
    color: #333; /* Color oscuro para contraste */
    background-color: #f9f9f9;
    padding: 5px 10px;
    border-left: 3px solid #673AB7; /* Un borde de color para destacarlo */
    flex-grow: 1; /* Permite que ocupe el espacio restante */
    word-break: break-word; /* Para manejar textos largos */
}
/**
 * Muestra las secciones de un curso y añade listeners de previsualización.
 */
function displaySections(curso) {
    sectionSelectionDiv.innerHTML = `<h3>Secciones de ${curso.sigla} - ${curso.nombre}:</h3>`;
    
    curso.secciones.forEach(seccion => {
        
        const sectionContainer = document.createElement('div');
        sectionContainer.classList.add('section-option');

        // 1. Botón de selección
        const button = document.createElement('button');
        button.textContent = `Sección ${seccion.id}`;
        button.classList.add('section-btn');
        
        const isAdded = horarioSeleccionado.some(c => c.sigla === curso.sigla && c.seccionId === seccion.id);
        button.disabled = isAdded;
        if (isAdded) {
            button.textContent += " (Seleccionada)";
        }

        // 2. Resumen del horario
        const scheduleSummary = formatScheduleSummary(seccion.horario);
        const summarySpan = document.createElement('span');
        summarySpan.classList.add('schedule-summary');
        summarySpan.textContent = scheduleSummary;
        
        // --- LÓGICA DE PREVISUALIZACIÓN (HOVER) ---
        
        // Función para aplicar el estilo de previsualización
        const previewSchedule = () => {
            // Eliminar cualquier previsualización anterior
            removePreview(); 
            
            // Re-chequear el conflicto para previsualización
            const hasConflict = seccion.horario.some(bloque => checkConflict({ ...bloque, sigla: curso.sigla, seccionId: seccion.id }));
            
            seccion.horario.forEach(bloque => {
                const slotStartTime = findSlotTime(bloque.inicio);
                if (!slotStartTime) return;

                const cell = scheduleTableBody.querySelector(
                    `td[data-day="${bloque.dia}"][data-slot-time="${slotStartTime}"]`
                );
                
                if (cell && !cell.classList.contains('lunch-break')) {
                    cell.classList.add('preview-block');
                    cell.style.backgroundColor = getCourseColor(curso.sigla);
                    cell.style.borderColor = getCourseColor(curso.sigla);
                    
                    if (hasConflict) {
                        cell.classList.add('preview-conflict');
                    }
                    
                    cell.innerHTML = `
                        <span style="font-weight: bold;">${curso.sigla}-${seccion.id}</span><br>
                        <span>${bloque.tipo}</span>
                    `;
                }
            });
        };
        
        // Función para limpiar el estilo de previsualización
        const removePreview = () => {
             scheduleTableBody.querySelectorAll('.preview-block').forEach(cell => {
                // Limpiar estilos y contenido, y volver a renderizar el horario seleccionado
                cell.classList.remove('preview-block', 'preview-conflict');
                cell.style.backgroundColor = '';
                cell.style.borderColor = '#ddd'; 
                renderSchedule(); // Redibuja el horario final para limpiar
            });
        };

        // Eventos de previsualización
        if (!isAdded) {
            sectionContainer.addEventListener('mouseenter', previewSchedule);
            sectionContainer.addEventListener('mouseleave', removePreview);
            
            // También útil para dispositivos táctiles
            sectionContainer.addEventListener('click', (e) => {
                if (!e.target.classList.contains('section-btn')) {
                    removePreview(); // Limpia si ya hay preview
                    previewSchedule(); // Y aplica la nueva
                }
            });
        }
        
        // Lógica de añadir (click en el botón)
        button.onclick = () => {
            // Antes de añadir, asegúrate de remover cualquier previsualización
            removePreview(); 
            
            const indexToRemove = horarioSeleccionado.findIndex(c => c.sigla === curso.sigla);
            if (indexToRemove !== -1) {
                removeCourse(curso.sigla, horarioSeleccionado[indexToRemove].seccionId); 
            }
            addCourseToSchedule(curso, seccion);
            
            courseResultsDiv.innerHTML = '';
            sectionSelectionDiv.innerHTML = '';
            courseSearchInput.value = '';
        };
        
        sectionContainer.appendChild(button);
        sectionContainer.appendChild(summarySpan);
        sectionSelectionDiv.appendChild(sectionContainer);
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
        alert(`¡Advertencia! La sección ${seccion.id} de ${curso.sigla} tiene un tope de horario (con el almuerzo o con otro curso). Se añadirá en color rojo.`);
    }

    horarioSeleccionado.push(courseData);

    renderSchedule(); 
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
// 6. RENDERIZADO Y BÚSQUEDA
// ==========================================================

/**
 * Dibuja los bloques de curso en la tabla de horario.
 * Importante: Esta función también limpia los estilos de previsualización
 * que pudieran haber quedado en las celdas al re-renderizar.
 */
function renderSchedule() {
    // 1. Limpiar todos los bloques previos y estilos de previsualización
    const allDayCells = scheduleTableBody.querySelectorAll('td:not(.time-label):not(.lunch-break)');
    allDayCells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('preview-block', 'preview-conflict');
        cell.style.backgroundColor = '';
        cell.style.borderColor = '#ddd'; 
    });

    // 2. Iterar sobre todos los cursos seleccionados
    horarioSeleccionado.forEach(curso => {
        
        curso.horario.forEach(bloque => {
            const fullBloque = { ...bloque, sigla: curso.sigla, seccionId: curso.seccionId };
            const hasConflict = checkConflict(fullBloque);

            const slotStartTime = findSlotTime(bloque.inicio);
            if (!slotStartTime) return;

            const cell = scheduleTableBody.querySelector(
                `td[data-day="${bloque.dia}"][data-slot-time="${slotStartTime}"]`
            );
            
            if (cell && !cell.classList.contains('lunch-break')) {
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

// ... (El resto de funciones como renderSelectedList y searchCourses son iguales)

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
        'PEM101': '#673AB7', 
        'EHI036': '#00BCD4', 
        'INF305': '#FF5722',
        'OPM037': '#E91E63', // Rosa
        'PEM001': '#8BC34A', // Verde Lima
        'PEM002': '#FFC107', // Amarillo Ámbar
        'PEM102': '#03A9F4', // Azul Claro
        'PEM103': '#CDDC39', // Lima
        'EHI018': '#9C27B0', // Púrpura
        'EHI021': '#009688', // Teal
        'EHI022': '#607D8B', // Gris Azulado
        'EHI030': '#795548', // Marrón
        'EHI031': '#F44336', // Rojo
        'EHI035': '#4CAF50', // Verde
        'EHI037': '#FF9800', // Naranja
        'EHI038': '#2196F3', // Azul
        'EHI039': '#673AB7', // Morado
        'INF301': '#FF5722', // Naranja Oscuro
        'INF401': '#00BCD4', // Cyan
        'INF403': '#9E9E9E', // Gris
        'INF405': '#607D8B', // Gris Azulado
    };
    return colors[sigla] || '#9C27B0'; 
}

function initApp() {
    generateScheduleGrid();
    courseSearchInput.addEventListener('input', searchCourses);
}

// Inicia la aplicación cuando el script se carga
initApp();
