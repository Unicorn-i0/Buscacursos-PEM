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

        // Celdas para los días de la semana (Lunes a Sábado)
        const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']; 
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
// 5. MANEJO DE SELECCIÓN DE CURSOS - ¡FIX DEL BUG DE AGRUPACIÓN!
// ==========================================================

function formatScheduleSummary(horario) {
    return horario.map(bloque => 
        `${bloque.dia}: ${bloque.inicio}-${bloque.fin} (${bloque.tipo})`
    ).join(' | ');
}

function displaySections(curso) {
    sectionSelectionDiv.innerHTML = `<h3>Secciones de ${curso.sigla} - ${curso.nombre}:</h3>`;
    
    curso.secciones.forEach(seccion => {
        
        const sectionContainer = document.createElement('div');
        sectionContainer.classList.add('section-option');

        const button = document.createElement('button');
        button.textContent = `Sección ${seccion.id}`;
        button.classList.add('section-btn');
        
        const isAdded = horarioSeleccionado.some(c => c.sigla === curso.sigla && c.seccionId === seccion.id);
        button.disabled = isAdded;
        if (isAdded) {
            button.textContent += " (Seleccionada)";
        }

        const scheduleSummary = formatScheduleSummary(seccion.horario);
        const summarySpan = document.createElement('span');
        summarySpan.classList.add('schedule-summary');
        summarySpan.textContent = scheduleSummary;


        // --- LÓGICA DE PREVISUALIZACIÓN (HOVER) ---
        
        const removePreview = () => {
            renderSchedule(); 
        };

        const previewSchedule = () => {
            // Paso 1: Limpiamos y redibujamos el horario seleccionado como base.
            renderSchedule(); 
            
            // Paso 2: Aplicar estilos y contenido de PREVIEW.
            const hasConflict = seccion.horario.some(bloque => checkConflict({ ...bloque, sigla: curso.sigla, seccionId: seccion.id }));
            
            seccion.horario.forEach(bloque => {
                const slotStartTime = findSlotTime(bloque.inicio);
                if (!slotStartTime) return;

                const cell = scheduleTableBody.querySelector(
                    `td[data-day="${bloque.dia}"][data-slot-time="${slotStartTime}"]`
                );
                
                if (cell && !cell.classList.contains('lunch-break')) {
                    
                    cell.innerHTML = ''; // Limpia el contenido antes de dibujar la preview.
                    
                    cell.classList.add('preview-block');
                    cell.style.backgroundColor = getCourseColor(curso.sigla);
                    cell.style.borderColor = getCourseColor(curso.sigla);
                    
                    if (hasConflict) {
                        cell.classList.add('preview-conflict');
                    }
                    
                    // AÑADIDO: Incluye la hora real de la clase (inicio-fin) para evitar el bug de agrupación.
                    cell.innerHTML = `
                        <span style="font-weight: bold;">${curso.sigla}-${seccion.id}</span><br>
                        <span>${bloque.tipo}</span>
                        <small>${bloque.inicio}-${bloque.fin}</small> 
                    `;
                }
            });
        };
        
        // Eventos de previsualización
        if (!isAdded) {
            sectionContainer.addEventListener('mouseenter', previewSchedule);
            sectionContainer.addEventListener('mouseleave', removePreview);
            
            sectionContainer.addEventListener('click', (e) => {
                if (!e.target.classList.contains('section-btn')) {
                    removePreview(); 
                    previewSchedule(); 
                }
            });
        }
        
        // Lógica de añadir (click en el botón)
        button.onclick = () => {
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
// 6. RENDERIZADO Y BÚSQUEDA - ¡FIX DEL BUG DE AGRUPACIÓN!
// ==========================================================

/**
 * Dibuja los bloques de curso en la tabla de horario.
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
                
                // AÑADIDO: Incluye la hora real de la clase (inicio-fin) en el render final.
                blockDiv.innerHTML = `
                    <span style="font-weight: bold;">${curso.sigla}-${curso.seccionId}</span><br>
                    <span>${bloque.tipo}</span>
                    <small>${bloque.inicio}-${bloque.fin}</small> 
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
    renderSchedule(); 
    
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
        'INF101': '#4CAF50', 'MAT202': '#FF9800', 'INF303': '#2196F3', 
        'PEM101': '#673AB7', 'EHI036': '#00BCD4', 'INF305': '#FF5722',
        'OPM037': '#E91E63', 'PEM001': '#8BC34A', 'PEM002': '#FFC107', 
        'PEM102': '#03A9F4', 'PEM103': '#CDDC39', 'EHI018': '#9C27B0', 
        'EHI021': '#009688', 'EHI022': '#607D8B', 'EHI030': '#795548', 
        'EHI031': '#F44336', 'EHI035': '#4CAF50', 'EHI037': '#FF9800', 
        'EHI038': '#2196F3', 'EHI039': '#673AB7', 'INF301': '#FF5722', 
        'INF401': '#00BCD4', 'INF403': '#9E9E9E', 'INF405': '#607D8B', 
    };
    return colors[sigla] || '#9C27B0'; 
}

function initApp() {
    generateScheduleGrid();
    courseSearchInput.addEventListener('input', searchCourses);
}

// Inicia la aplicación cuando el script se carga
initApp();
