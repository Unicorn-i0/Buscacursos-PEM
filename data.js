const datosCursos = [
    {
        sigla: "ADP201",
        nombre: "TEORÍA ORGANIZACIONAL Y GESTIÓN PÚBLICA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D02" }
                ]
            }
        ]
    },
    {
        sigla: "ADP202",
        nombre: "DERECHO PÚBLICO",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "ADP203",
        nombre: "MATEMÁTICAS PARA LA GESTIÓN PÚBLICA II",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D28" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D28" }
                ]
            }
        ]
    },
    {
        sigla: "ADP204",
        nombre: "INTRODUCCÓN A LA CIENCIA POLÍTICA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D22" }
                ]
            }
        ]
    },
    {
        sigla: "ADP205",
        nombre: "PRINCIPIOS DE ECONOMÍA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            }
        ]
    },
    {
        sigla: "CCD001",
        nombre: "E. RECURSOS COMUNICATIVOS PARA LA PRODUCCIÓN DE TEXTOS",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E70" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            },
            {
                id: "6",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E72" }
                ]
            },
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            },
            {
                id: "9",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            },
            {
                id: "10",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            },
            {
                id: "13",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E72" }
                ]
            },
            {
                id: "14",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" }
                ]
            },
            {
                id: "15",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" }
                ]
            },
            {
                id: "16",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" }
                ]
            },
            {
                id: "17",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" }
                ]
            },
            {
                id: "11",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" }
                ]
            },
            {
                id: "12",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" }
                ]
            }
        ]
    },
    {
        sigla: "CCD008",
        nombre: "E. HERRAMIENTAS DIGITALES PARA PROFESIONALES DEL SIGLO XXI",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E41" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "6",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E41" }
                ]
            },
            {
                id: "9",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "10",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            },
            {
                id: "11",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "12",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "13",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "22",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "17",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "18",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "19",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "20",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "21",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "14",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "15",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "16",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" }
                ]
            }
        ]
    },
    {
        sigla: "EHC014",
        nombre: "E. CIUDADANÍA, PARTICIPACIÓN Y REALIDAD SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            },
            {
                id: "20",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            },
            {
                id: "21",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
                ]
            }
        ]
    },
    {
        sigla: "EHC027",
        nombre: "E. ARTE, CULTURA Y POLÍTICA",
        secciones: [
            {
                id: "10",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Internet-ONL" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Internet-ONL" }
                ]
            },
            {
                id: "11",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            },
            {
                id: "12",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            },
            {
                id: "16",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            },
            {
                id: "22",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA7" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA7" }
                ]
            },
            {
                id: "27",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Internet-ONL" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Internet-ONL" }
                ]
            },
            {
                id: "25",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA / VIRTUAL", sala: "Internet-ONL" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA / VIRTUAL", sala: "Internet-ONL" }
                ]
            }
        ]
    },
    {
        sigla: "EHC036",
        nombre: "E. DERECHOS HUMANOS Y GÉNERO",
        secciones: [
            {
                id: "13",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E60" }
                ]
            },
            {
                id: "14",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Internet-ONL" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Internet-ONL" }
                ]
            },
            {
                id: "19",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            }
        ]
    },
    {
        sigla: "EHC037",
        nombre: "E. MEMORIAS, DEMOCRACIAS Y DERECHO HUMANOS. APROXIMACIONES INTERDISCIPLINARIAS",
        secciones: [
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            },
            {
                id: "17",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Internet-ONL" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Internet-ONL" }
                ]
            },
            {
                id: "18",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E60" }
                ]
            },
            {
                id: "23",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" }
                ]
            },
            {
                id: "26",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" }
                ]
            }
        ]
    },
    {
        sigla: "EHC040",
        nombre: "E. DIVERSIDAD, EQUIDAD E INCLUSIÓN EN CLAVE DE DERECHOS HUMANOS Y JUSTICIA SOCIAL",
        secciones: [
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            },
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "9",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            },
            {
                id: "24",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" }
                ]
            }
        ]
    },
    {
        sigla: "EHC054",
        nombre: "E. ECONOMÍA CIRCULAR Y DESARROLLO SOSTENIBLE",
        secciones: [
            {
                id: "6",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            },
            {
                id: "15",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            }
        ]
    },
    {
        sigla: "EHI016",
        nombre: "E. CAMBIO CLIMÁTICO Y ECOLOGÍA INTEGRAL. APORTES PARA EL CUIDADO DE LA CASA COMÚN (CFG-PLAN B)",
        secciones: [
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            },
            {
                id: "20",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" }
                ]
            },
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" }
                ]
            }
        ]
    },
    {
        sigla: "EHI026",
        nombre: "E. MIGRACIÓN Y MOVILIDAD HUMANA: DERECHOS HUMANOS, JUSTICIA Y SOLIDARIDAD.",
        secciones: [
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E72" }
                ]
            },
            {
                id: "9",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "14",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            }
        ]
    },
    {
        sigla: "EHI029",
        nombre: "E. DESARROLLO HUMANO INTEGRAL. JÓVENES Y CULTURA",
        secciones: [
            {
                id: "10",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            },
            {
                id: "11",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "12",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E70" }
                ]
            },
            {
                id: "16",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C30" }
                ]
            }
        ]
    },
    {
        sigla: "EHI037",
        nombre: "E. PENSAMIENTO SOCIAL EN LOS CONTEXTOS ACTUALES.",
        secciones: [
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "6",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E70" }
                ]
            },
            {
                id: "18",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" }
                ]
            },
            {
                id: "23",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" }
                ]
            }
        ]
    },
    {
        sigla: "EHI039",
        nombre: "E. BUENOS TRATOS Y CONSTRUCCIÓN DE AMBIENTES SANOS.",
        secciones: [
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            },
            {
                id: "17",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" }
                ]
            },
            {
                id: "22",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" }
                ]
            }
        ]
    },
    {
        sigla: "EHI053",
        nombre: "E. HUMINAZACIÓN Y BIENESTAR: CIUDADANOS ÍNTEGROS",
        secciones: [
            {
                id: "13",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "19",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF5" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF5" }
                ]
            },
            {
                id: "21",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" }
                ]
            }
        ]
    },
    {
        sigla: "EHI054",
        nombre: "E. ECOSISTEMA VALDOCCO",
        secciones: [
            {
                id: "15",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            }
        ]
    },
    {
        sigla: "OCA017",
        nombre: "O. FUNDAMENTOS DE LA CIBERSEGURIDAD",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            }
        ]
    },
    {
        sigla: "OCA019",
        nombre: "O. ASPECTOS ESPECÍFICOS TRIBUTARIOS",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D28" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D28" }
                ]
            }
        ]
    },
    {
        sigla: "OPT233",
        nombre: "O. AUDITORIA FORENSE",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D35" }
                ]
            }
        ]
    },
    {
        sigla: "RCA001",
        nombre: "PRÁCTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RCA003",
        nombre: "ACTIVIDAD INTEGRADORA DE TITULACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "RCA203",
        nombre: "MATEMÁTICAS II",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-C23-A" }
                ]
            }
        ]
    },
    {
        sigla: "RCA204",
        nombre: "MICROECONOMÍA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-C34-A" }
                ]
            }
        ]
    },
    {
        sigla: "RCA207",
        nombre: "CONTABILIDAD BÁSICA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RCA208",
        nombre: "DERECHO Y EMPRESA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            }
        ]
    },
    {
        sigla: "RCA209",
        nombre: "TALLER TECNOLÓGICO PARA LA CONTABILIDA BÁSICA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            }
        ]
    },
    {
        sigla: "RCA403",
        nombre: "ESTADÍSTICA APLICADA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-B30-A" }
                ]
            }
        ]
    },
    {
        sigla: "RCA404",
        nombre: "DERECHO TRIBUTARIO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "AYUDANTÍA", sala: "Casa Central-D25-A" }
                ]
            }
        ]
    },
    {
        sigla: "RCA407",
        nombre: "CONTABILIDAD SUPERIOR",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-A31-A" }
                ]
            }
        ]
    },
    {
        sigla: "RCA408",
        nombre: "GESTIÓN DE COSTOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "RCA409",
        nombre: "TALLER TECNOLÓGICO PARA LA CONTABILIDAD SUPERIOR",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-LDB" }
                ]
            }
        ]
    },
    {
        sigla: "RCA503",
        nombre: "FINANZAS I",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-B20-A" }
                ]
            }
        ]
    },
    {
        sigla: "RCA601",
        nombre: "INGLÉS I",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            }
        ]
    },
    {
        sigla: "RCA605",
        nombre: "FUNDAMENTOS DE AUDITORIA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            }
        ]
    },
    {
        sigla: "RCA606",
        nombre: "GESTION TRIBUTARIA RENTA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-B20-A" }
                ]
            }
        ]
    },
    {
        sigla: "RCA702",
        nombre: "PREPRARACIÓN Y EVALUACIÓN DE PROYECTOS",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-B20-A" }
                ]
            }
        ]
    },
    {
        sigla: "RCA801",
        nombre: "INGLÉS III",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            }
        ]
    },
    {
        sigla: "RCA806",
        nombre: "PLANIFICACIÓN ESTRATEGICA Y CONTROL DE GESTION",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-D26-A" }
                ]
            }
        ]
    },
    {
        sigla: "RCA807",
        nombre: "TECNOLOGIAS Y SISTEMAS DE INFORMACION",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            }
        ]
    },
    {
        sigla: "RCA808",
        nombre: "AUDITORIA TRIBUTARIA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E41" }
                ]
            }
        ]
    },
    {
        sigla: "ODE082",
        nombre: "O. DERECHO INTERNACIONAL PRIVADO (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
                ]
            }
        ]
    },
    {
        sigla: "ODE083",
        nombre: "O. PSICOLOGÍA FORENSE (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C30" }
                ]
            }
        ]
    },
    {
        sigla: "RDR002",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D22" }
                ]
            },
            {
                id: "3",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D34" }
                ]
            }
        ]
    },
    {
        sigla: "RDR106",
        nombre: "TEORIA POLITICA Y CIUDADANIA DEMOCRATICA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
                ]
            }
        ]
    },
    {
        sigla: "RDR203",
        nombre: "DERECHO CIVIL II",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E30" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E30" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E30" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            }
        ]
    },
    {
        sigla: "RDR204",
        nombre: "DERECHO PROCESAL I",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E70" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            }
        ]
    },
    {
        sigla: "RDR205",
        nombre: "INTRODUCCIÓN AL DERECHO II",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D11" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D13" }
                ]
            }
        ]
    },
    {
        sigla: "RDR305",
        nombre: "FILOSOFÍA DEL DERECHO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D13" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            }
        ]
    },
    {
        sigla: "RDR401",
        nombre: "DERECHO CONSTITUCIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" }
                ]
            }
        ]
    },
    {
        sigla: "RDR402",
        nombre: "DERECHO LABORAL I",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            }
        ]
    },
    {
        sigla: "RDR403",
        nombre: "DERECHO CIVIL IV",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            }
        ]
    },
    {
        sigla: "RDR404",
        nombre: "DERECHO PROCESAL III",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E60" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I09" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I09" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I09" }
                ]
            }
        ]
    },
    {
        sigla: "RDR505",
        nombre: "PRÁCTICA FORENSE",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D24" }
                ]
            },
            {
                id: "2",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "RDR601",
        nombre: "DERECHOS FUNDAMENTALES II",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            }
        ]
    },
    {
        sigla: "RDR602",
        nombre: "DERECHO LABORAL III",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I09" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I09" }
                ]
            }
        ]
    },
    {
        sigla: "RDR603",
        nombre: "DERECHO CIVIL VI",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E72" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I08" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I08" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I08" }
                ]
            }
        ]
    },
    {
        sigla: "RDR604",
        nombre: "DERECHO PROCESAL V",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E70" }
                ]
            }
        ]
    },
    {
        sigla: "RDR605",
        nombre: "DERECHO DE FAMILIA I",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            }
        ]
    },
    {
        sigla: "RDR801",
        nombre: "DERECHO ADMINISTRATIVO II",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
                ]
            }
        ]
    },
    {
        sigla: "RDR802",
        nombre: "DERECHOS HUMANOS",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D33" }
                ]
            },
            {
                id: "2",
                cupos: 35,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" }
                ]
            }
        ]
    },
    {
        sigla: "RDR803",
        nombre: "DERECHO COMERCIAL II",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            }
        ]
    },
    {
        sigla: "RDR804",
        nombre: "DERECHO PENAL II",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E40" }
                ]
            }
        ]
    },
    {
        sigla: "RDR807",
        nombre: "CLINICA JURIDICA Y LITIGACION I",
        secciones: [
            {
                id: "1",
                cupos: 8,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 8,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 8,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 8,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 8,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "6",
                cupos: 8,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RED004",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 16,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RED005",
        nombre: "PRÁCTICA PROFESIONAL II DISCAPACIDAD INTELECTUAL",
        secciones: [
            {
                id: "1",
                cupos: 34,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RED006",
        nombre: "PRÁCTICA PROFESIONAL II DIFICULTADES DE APRENDIZAJE",
        secciones: [
            {
                id: "1",
                cupos: 44,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RED201",
        nombre: "PATOLOGÍA NEUROFISIOLÓGICA",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E30" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E30" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E30" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D03" }
                ]
            }
        ]
    },
    {
        sigla: "RED207",
        nombre: "FAMILIA EDUCACIÓN E INCLUSIÓN",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D32" }
                ]
            }
        ]
    },
    {
        sigla: "RED208",
        nombre: "ESCRITURA ACADÉMICA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D24" }
                ]
            }
        ]
    },
    {
        sigla: "RED209",
        nombre: "DIVERSIDAD E INCLUSIÓN EDUCATIVA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D32" }
                ]
            }
        ]
    },
    {
        sigla: "RED411",
        nombre: "NEUROLINGÜÍSTICA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            }
        ]
    },
    {
        sigla: "RED412",
        nombre: "PROCESOS CONGNITIVOS APLICADOS",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E53" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E53" }
                ]
            }
        ]
    },
    {
        sigla: "RED413",
        nombre: "CURRÍCULO DIVERSIFICADO I",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D02" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            }
        ]
    },
    {
        sigla: "RED414",
        nombre: "LENGUA DE SEÑAS II",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D26" }
                ]
            }
        ]
    },
    {
        sigla: "RED415",
        nombre: "BARRERAS PARA LA COMUNICACIÓN Y EL LENGUAJE",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D27" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" }
                ]
            }
        ]
    },
    {
        sigla: "RED610",
        nombre: "ESTRATEGIAS DIVERSIFICADAS DE APRENDIZAJE",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D27" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            }
        ]
    },
    {
        sigla: "RED611",
        nombre: "ESTRATEGIAS DE ENSEÑANZA DE LA LECTURA Y ESCRITURA EN DISCAPACIDAD INTELECTUAL",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C30" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E60" }
                ]
            },
            {
                id: "3",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D11" }
                ]
            }
        ]
    },
    {
        sigla: "RED612",
        nombre: "ESTRATEGIA DE ENSEÑANZAS DE LAS MATEMATICA EN DISCAPACIDAD INTELECTUAL",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D27" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D23" }
                ]
            },
            {
                id: "3",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D25" }
                ]
            }
        ]
    },
    {
        sigla: "RED613",
        nombre: "ESTRATEGIA DE ENSEÑANZA DE PSICOMOTRICIDAD EN DISCAPACIDAD",
        secciones: [
            {
                id: "1",
                cupos: 37,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-G50" }
                ]
            },
            {
                id: "2",
                cupos: 37,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-G50" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D23" }
                ]
            }
        ]
    },
    {
        sigla: "RED614",
        nombre: "ESTRATEGIA DE ENSEÑANZA EN LAS CIENCIAS EN DISCAPACIDAD INTELECTUAL",
        secciones: [
            {
                id: "1",
                cupos: 37,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D23" }
                ]
            },
            {
                id: "2",
                cupos: 37,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            }
        ]
    },
    {
        sigla: "RED615",
        nombre: "ESTRATEGIAS DE ENSEÑANZA DE LA LECTURA Y ESCRITURA EN DIFICULTADES DE APRENDIZAJE",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D23" }
                ]
            }
        ]
    },
    {
        sigla: "RED616",
        nombre: "ESTRATEGIA DE ENSEÑANZAS DE LAS MATEMATICA EN DIFICULTADES DE APRENDIZAJE",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D31" }
                ]
            }
        ]
    },
    {
        sigla: "RED617",
        nombre: "ESTRATEGIA DE ENSEÑANZA DE PSICOMOTRICIDAD EN DIFICULTADES DE APRENDIZAJE",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-G50" }
                ]
            }
        ]
    },
    {
        sigla: "RED618",
        nombre: "ESTRATEGIA DE ENSEÑANZA EN LAS CIENCIAS EN DIFICULTADES DE APRENDIZAJE",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" }
                ]
            }
        ]
    },
    {
        sigla: "RED802",
        nombre: "EDUCACIÓN EN LA PRIMERA INFANCIA Y APOYO EN CONTEXTOS DIVERSOS",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I11" }
                ]
            },
            {
                id: "3",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D24" }
                ]
            }
        ]
    },
    {
        sigla: "RED803",
        nombre: "EDUCACIÓN ETAPA ESCOLAR Y APOYO EN CONTEXTOS DIVERSOS",
        secciones: [
            {
                id: "1",
                cupos: 42,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" }
                ]
            },
            {
                id: "2",
                cupos: 42,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D41" }
                ]
            }
        ]
    },
    {
        sigla: "RED804",
        nombre: "EDUCACIÓN DE ADULTOS Y APOYO EN CONTEXTOS DIVERSOS",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D41" }
                ]
            },
            {
                id: "3",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E53" }
                ]
            }
        ]
    },
    {
        sigla: "RED806",
        nombre: "ÉTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            }
        ]
    },
    {
        sigla: "RED807",
        nombre: "EDUCACIÓN EMOCIONAL Y CALIDAD DE VIDA EN EDUCACIÓN ESPECIAL",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C30" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C30" }
                ]
            }
        ]
    },
    {
        sigla: "REP005",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "6",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "7",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "REP006",
        nombre: "PRÁCTICA PROFESIONAL: EN LA ESPECIALIZACIÓN Y ACTIVIDAD TITULACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 4,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 12,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 8,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 4,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "REP205",
        nombre: "PSICOLOGIA DEL DESARROLLO Y EL APRENDIZAJE EN LA INFANCIA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            }
        ]
    },
    {
        sigla: "REP206",
        nombre: "INFANCIA Y CULTURA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D24" }
                ]
            }
        ]
    },
    {
        sigla: "REP207",
        nombre: "NEUROEDUCACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            }
        ]
    },
    {
        sigla: "REP208",
        nombre: "DIVERSIDAD E INCLUSIÓN EDUCATIVA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            }
        ]
    },
    {
        sigla: "REP405",
        nombre: "DIDÁCTICA ESPECÍFICA: CORPORALIDAD Y EXPRESIÓN EN EL PÁRVULO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" }
                ]
            }
        ]
    },
    {
        sigla: "REP406",
        nombre: "DESARROLLO DEL LENGUAJE ORAL EN LA INFANCIA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E60" }
                ]
            }
        ]
    },
    {
        sigla: "REP407",
        nombre: "LENGUAJE ARTÍSTICO EN EL PÁRVULO I: EXPRESIÓN MUSICAL",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D33" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            }
        ]
    },
    {
        sigla: "REP601",
        nombre: "TALLER DE INTEGRACIÓN I",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            }
        ]
    },
    {
        sigla: "REP607",
        nombre: "EDUCACIÓN EMOCIONAL EN EL PÁRVULO",
        secciones: [
            {
                id: "1",
                cupos: 24,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D24" }
                ]
            },
            {
                id: "2",
                cupos: 24,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            }
        ]
    },
    {
        sigla: "REP608",
        nombre: "LENGUAJE ARTÍSTICO EN EL PÁRVULO III: LITERACIDAD Y ARTES ESCÉNICAS",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D34" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E40" }
                ]
            }
        ]
    },
    {
        sigla: "REP609",
        nombre: "PLANIFICACIÓN Y EVALUACIÓN PARA EL APRENDIZAJE II",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D02" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E53" }
                ]
            }
        ]
    },
    {
        sigla: "REP610",
        nombre: "DIDÁCTICA ESPECÍFICA: PENSAMIENTO LÓGICO MATEMÁTICO EN EL PÁRVULO",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E53" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E53" }
                ]
            }
        ]
    },
    {
        sigla: "REP611",
        nombre: "DIDÁCTICA ESPECÍFICA: CONTEXTO CULTURAL Y SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A10" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D22" }
                ]
            }
        ]
    },
    {
        sigla: "REP809",
        nombre: "MODELOS PEDAGÓGICOS EN EDUCACIÓN TEMPRANA",
        secciones: [
            {
                id: "1",
                cupos: 32,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C01" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C01" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C01" }
                ]
            }
        ]
    },
    {
        sigla: "REP810",
        nombre: "SALUD Y PATRONES DE CRIANZA EN LA DIADA MADRE-BEBÉ",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D41" }
                ]
            }
        ]
    },
    {
        sigla: "REP811",
        nombre: "ARTE INTEGRADO EN SALA CUNA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            }
        ]
    },
    {
        sigla: "REP812",
        nombre: "ARTE INTEGRADO EN NIVELES MEDIOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D22" }
                ]
            }
        ]
    },
    {
        sigla: "REP813",
        nombre: "FILOSOFÍA PARA LA INFANCIA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            }
        ]
    },
    {
        sigla: "EPC001",
        nombre: "TRANSFORMACIONES SOCIOCULTURALES EN EL ESPACIO EDUCATIVO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            },
            {
                id: "6",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D32" }
                ]
            },
            {
                id: "7",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" }
                ]
            },
            {
                id: "8",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" }
                ]
            }
        ]
    },
    {
        sigla: "EPC007",
        nombre: "APRENDIZAJE Y DESARROLLO DEL PENSAMIENTO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "EPC008",
        nombre: "INVESTIGACION EDUCATIVA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            },
            {
                id: "8",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E60" }
                ]
            },
            {
                id: "6",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" }
                ]
            },
            {
                id: "7",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" }
                ]
            }
        ]
    },
    {
        sigla: "EPC012",
        nombre: "TEORÍA Y DESARROLLO DEL CURRÍCULUM",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E50" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            }
        ]
    },
    {
        sigla: "EPC013",
        nombre: "DISEÑO DEL APRENDIZAJE EN AULAS INCLUSIVAS",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E50" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" }
                ]
            },
            {
                id: "6",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" }
                ]
            }
        ]
    },
    {
        sigla: "EPC014",
        nombre: "EVALUACIÓN COMO APRENDIZAJE",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D37" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D11" }
                ]
            }
        ]
    },
    {
        sigla: "EPC015",
        nombre: "ÉTICA Y PROFESIÓN DOCENTE",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            }
        ]
    },
    {
        sigla: "EPCM03",
        nombre: "LA LABOR DOCENTE EN LA SOCIEDAD DIGITAL",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            }
        ]
    },
    {
        sigla: "OPE009",
        nombre: "O. FITOTERAPIA (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" }
                ]
            }
        ]
    },
    {
        sigla: "OPE010",
        nombre: "O. JARDINERÍA TERAPÉUTICA (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" }
                ]
            }
        ]
    },
    {
        sigla: "OPE011",
        nombre: "O. AUTOCUIDADO, AUTOCONOCIMIENTO Y DESARROLLO PERSONAL",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" }
                ]
            }
        ]
    },
    {
        sigla: "OPE013",
        nombre: "O. CLOWN COMO HERRAMIENTA TERAPÉUTICA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" }
                ]
            }
        ]
    },
    {
        sigla: "OPE015",
        nombre: "O. HUMANIZACIÓN DE LA ATENCIÓN EN SALUD (INTERPROFESIONAL)",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" }
                ]
            }
        ]
    },
    {
        sigla: "REN001",
        nombre: "INTERNADO II",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "REN002",
        nombre: "EXAMEN DE TÍTULO",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "3",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "REN206",
        nombre: "PROCESO DE ENFERMERÍA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LC6" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LC5" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LC6" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LA7" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LD2" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LA1" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LD2" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LC4" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LA6" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LA4" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LA6" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LA1" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LC7" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LA7" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LC3" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LA4" }
                ]
            }
        ]
    },
    {
        sigla: "REN207",
        nombre: "BIOESTADÍSTICA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LP2" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LA7" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LA7" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LP2" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LP2" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LC7" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LP2" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LA0" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LA0" }
                ]
            }
        ]
    },
    {
        sigla: "REN208",
        nombre: "INTEGRADO DE FISIOLOGÍA Y FISIOPATOLOGÍA I",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LA0" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LA0" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LF2" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LF2" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LF2" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LF2" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LA3" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LA3" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LF3" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LF3" }
                ]
            }
        ]
    },
    {
        sigla: "REN209",
        nombre: "BIOQUÍMICA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LD3" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LD3" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LF1" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LF1" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LD2" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LD2" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LC5" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LC5" }
                ]
            }
        ]
    },
    {
        sigla: "REN210",
        nombre: "EDUCACIÓN PARA LA SALUD - SALUD FAMILIAR",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LA2" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LA2" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LA3" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LA3" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LD3" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LD3" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LA4" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LA4" }
                ]
            }
        ]
    },
    {
        sigla: "REN406",
        nombre: "SALUD PÚBLICA Y EPIDEMIOLOGÍA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" }
                ]
            }
        ]
    },
    {
        sigla: "REN409",
        nombre: "GESTIÓN DEL CUIDADO EN EL CURSO DE LA VIDA II",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "REN410",
        nombre: "GESTIÓN DEL CUIDADO EN EL ADULTO I",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS7" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS7" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS7" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS7" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS8" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS8" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS8" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS8" }
                ]
            }
        ]
    },
    {
        sigla: "REN411",
        nombre: "GESTIÓN DEL CUIDADO EN SALUD MENTAL",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LD4" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LD4" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "TALLER", sala: "Lo Cañas-LF3" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "TALLER", sala: "Lo Cañas-LF3" }
                ]
            }
        ]
    },
    {
        sigla: "REN506",
        nombre: "BIOÉTICA Y DERECHO SANITARIO",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" }
                ]
            }
        ]
    },
    {
        sigla: "REN606",
        nombre: "ENFERMERIA EN COMUNIDAD II",
        secciones: [
            {
                id: "1",
                cupos: 38,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 54,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "3",
                cupos: 38,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "REN607",
        nombre: "ENFOQUE DE GENERO EN SALUD",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" }
                ]
            }
        ]
    },
    {
        sigla: "REN608",
        nombre: "CUIDADOS DE ENFERMERIA EN NIÑOS/AS Y ADOLESCENTES II",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "REN609",
        nombre: "GESTION DEL CUIDADO",
        secciones: [
            {
                id: "1",
                cupos: 36,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" }
                ]
            },
            {
                id: "2",
                cupos: 36,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" }
                ]
            },
            {
                id: "3",
                cupos: 36,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" }
                ]
            }
        ]
    },
    {
        sigla: "REN610",
        nombre: "CUIDADOS DE ENFERMERIA EN EL ADULTO I",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "SIMULACIÓN", sala: "Lo Cañas-LS0" }
                ]
            }
        ]
    },
    {
        sigla: "REN806",
        nombre: "SEMINARIO DE ENFERMERIA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" }
                ]
            },
            {
                id: "4",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" }
                ]
            }
        ]
    },
    {
        sigla: "REN807",
        nombre: "CUIDADO FAMILIAR Y ENFERMERIA DOMICILIARIA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" }
                ]
            }
        ]
    },
    {
        sigla: "REN808",
        nombre: "CUIDADOS DE ENFERMERIA EN PERSONAS CON CANCER",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" }
                ]
            }
        ]
    },
    {
        sigla: "REN809",
        nombre: "CUIDADOS DE ENFERMERIA EN PROCESOS DE FIN DE VIDA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" }
                ]
            }
        ]
    },
    {
        sigla: "REN810",
        nombre: "CUIDADOS DE ENFERMERIA EN SITUACIONES DE URGENCIA II",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "OFA033",
        nombre: "O. INFORMATICA EN SALUD Y APROXIMACIÓN A LA TELEPRACTICA (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" }
                ]
            }
        ]
    },
    {
        sigla: "OFA036",
        nombre: "O. FITOTERAPIA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" }
                ]
            }
        ]
    },
    {
        sigla: "RFO004",
        nombre: "PRACTICA PROFESIONAL EN SALUD II",
        secciones: [
            {
                id: "1",
                cupos: 39,
                horario: [
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RFO005",
        nombre: "PRACTICA PROFESIONAL EN EDUCACION II",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RFO006",
        nombre: "TITULO",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" }
                ]
            }
        ]
    },
    {
        sigla: "RFO201",
        nombre: "FONÉTICA Y FONOLOGÍA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" }
                ]
            }
        ]
    },
    {
        sigla: "RFO202",
        nombre: "NEUROMORFOFUNCIÓN",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS3" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS3" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LA4" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "TALLER", sala: "Lo Cañas-LA2" }
                ]
            }
        ]
    },
    {
        sigla: "RFO204",
        nombre: "FISIOLOGÍA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LA2" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "TALLER", sala: "Lo Cañas-LA2" }
                ]
            }
        ]
    },
    {
        sigla: "RFO206",
        nombre: "FÍSICA Y ACÚSTICA PARA LA VOZ Y LA AUDICIÓN",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LS4" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "TALLER", sala: "Lo Cañas-LS4" }
                ]
            }
        ]
    },
    {
        sigla: "RFO207",
        nombre: "PSICOLOGIA EVOLUTIVA Y DESARROLLO PSICOSOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" }
                ]
            }
        ]
    },
    {
        sigla: "RFO406",
        nombre: "FONOESTOMATOLOGIA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" }
                ]
            }
        ]
    },
    {
        sigla: "RFO407",
        nombre: "SALUD MENTAL, PSICOPATOLOGIA Y PSIQUIATRIA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "TALLER", sala: "Lo Cañas-LC7" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LC7" }
                ]
            }
        ]
    },
    {
        sigla: "RFO408",
        nombre: "SEMANTICA Y PRAGMATICA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LD1" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LD0" }
                ]
            }
        ]
    },
    {
        sigla: "RFO409",
        nombre: "NEUROLOGIA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LF6" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LF6" }
                ]
            }
        ]
    },
    {
        sigla: "RFO505",
        nombre: "AUDIOLOGÍA",
        secciones: [
            {
                id: "1",
                cupos: 42,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE6" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE6" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LE6" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LE6" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE6" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LE6" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE6" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-LE7" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-LE7" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-LE7" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-LE7" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-LE7" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-LE7" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-LE7" }
                ]
            }
        ]
    },
    {
        sigla: "RFO601",
        nombre: "TRASTORNOS DEL DESARROLLO DEL LENGUAJE Y DE LA COMUNICACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 36,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE4" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LE4" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LE4" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RFO606",
        nombre: "GERONTOLOGIA Y GERIATRIA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" }
                ]
            }
        ]
    },
    {
        sigla: "RFO607",
        nombre: "ABORDAJE FONOAUDIOLOGICO DE LA VOZ",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE5" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE5" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE5" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LE5" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LE5" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-LE5" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-LE5" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-LE5" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-LE5" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-LE5" }
                ]
            }
        ]
    },
    {
        sigla: "RFO608",
        nombre: "HABLA Y MOTRICIDAD OROFACIAL",
        secciones: [
            {
                id: "1",
                cupos: 42,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE9" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE8" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE8" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RFO805",
        nombre: "GESTIÓN DEL ACTUAR FONOAUDIOLÓGICO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LD0" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LD0" }
                ]
            }
        ]
    },
    {
        sigla: "RFO806",
        nombre: "ABORDAJE FONOAUDIOLOGICO EN LECTOESCRITURA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE4" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE4" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RFO807",
        nombre: "ABORDAJE DE LOS TRASTORNOS DE LA COGNICION, LA COMUNICACION Y EL LENGUAJE EN ADULTOS Y ADULTOS MAYORES",
        secciones: [
            {
                id: "1",
                cupos: 21,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE9" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE8" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE8" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RFO808",
        nombre: "ABORDAJE FONOAUDIOLOGICO EN ALIMENTACION Y DEGLUCION",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE9" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LE9" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CAMPOS CLÍNICOS", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RFO809",
        nombre: "ABORDAJE FONOAUDIOLOGICO EN AUDICION Y EQUILIBRIO",
        secciones: [
            {
                id: "1",
                cupos: 24,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE7" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE7" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LE7" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LE7" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-LE6" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-LE6" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-LE6" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-LE6" }
                ]
            }
        ]
    },
    {
        sigla: "RFO810",
        nombre: "FONOAUDIOLOGIA BASADA EN LA EVIDENCIA",
        secciones: [
            {
                id: "1",
                cupos: 26,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "TALLER", sala: "Lo Cañas-LD0" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "TALLER", sala: "Lo Cañas-LD0" }
                ]
            }
        ]
    },
    {
        sigla: "ICC201",
        nombre: "CÁLCULO I",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E80" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            }
        ]
    },
    {
        sigla: "ICC202",
        nombre: "FUNDAMENTOS DE LA PROGRAMACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-T41-A" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-T41-A" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "TOCORNAL-T3B" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "TOCORNAL-T3B" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-T41-A" }
                ]
            }
        ]
    },
    {
        sigla: "ICC203",
        nombre: "FÍSICA",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T1A" }
                ]
            },
            {
                id: "2",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-T1A" }
                ]
            },
            {
                id: "3",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T1A" }
                ]
            }
        ]
    },
    {
        sigla: "ICC204",
        nombre: "REQUERIMIENTO Y MODELOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-T22" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T22" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T22" }
                ]
            }
        ]
    },
    {
        sigla: "ICC205",
        nombre: "FUNDAMENTOS DE BASE DE DATOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-T22" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T22" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T22" }
                ]
            }
        ]
    },
    {
        sigla: "ICC401",
        nombre: "ECUACIONES DIFERENCIALES",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E42-A" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Carmen 350-E50-A" }
                ]
            }
        ]
    },
    {
        sigla: "ICC402",
        nombre: "PROGRAMACIÓN AVANZADA",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-T22-A" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-T42-A" }
                ]
            },
            {
                id: "3",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-T42-A" }
                ]
            }
        ]
    },
    {
        sigla: "ICC403",
        nombre: "ÓPTICA",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D32" }
                ]
            },
            {
                id: "2",
                cupos: 35,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            }
        ]
    },
    {
        sigla: "ICC404",
        nombre: "TALLER DE INGENIERÍA DE SOFTWARE",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T41" }
                ]
            },
            {
                id: "2",
                cupos: 35,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T41" }
                ]
            }
        ]
    },
    {
        sigla: "ICC405",
        nombre: "ADMINISTRACIÓN DE BASE DE DATOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T42" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T42" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T42" }
                ]
            }
        ]
    },
    {
        sigla: "ICC601",
        nombre: "MATEMÁTICA DISCRETA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D12" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D23" }
                ]
            }
        ]
    },
    {
        sigla: "ICC602",
        nombre: "ADMINISTRACIÓN DE SISTEMAS OPERATIVOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T41" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-T41" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-T41" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T41" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T41" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T41" }
                ]
            }
        ]
    },
    {
        sigla: "ICC603",
        nombre: "INGLÉS I",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D42" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D42" }
                ]
            }
        ]
    },
    {
        sigla: "ICC604",
        nombre: "PRÁCTICA INTERMEDIA",
        secciones: [
            {
                id: "1",
                cupos: 48,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D32" }
                ]
            }
        ]
    },
    {
        sigla: "ICC802",
        nombre: "DESARROLLO DE APLICACIONES MÓVILES II",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "TOCORNAL-T3B" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "TOCORNAL-T3B" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "TOCORNAL-T3B" }
                ]
            }
        ]
    },
    {
        sigla: "ICC803",
        nombre: "ÉTICA Y PROPIEDAD INTELECTUAL",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            }
        ]
    },
    {
        sigla: "ICC804",
        nombre: "HACKING ÉTICO",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T41" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T41" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T41" }
                ]
            }
        ]
    },
    {
        sigla: "ICC805",
        nombre: "INGLÉS III",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            }
        ]
    },
    {
        sigla: "ICC806",
        nombre: "ECONOMÍA Y FINANZAS",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "TOCORNAL-T3B" }
                ]
            }
        ]
    },
    {
        sigla: "OCC001",
        nombre: "O. ESTRUCTURA DE DATOS",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "TOCORNAL-T3B" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "TOCORNAL-T3B" }
                ]
            }
        ]
    },
    {
        sigla: "OCC002",
        nombre: "O. EMPRESA BASE TECNOLÓGICA",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D13" }
                ]
            }
        ]
    },
    {
        sigla: "ICI201",
        nombre: "ÁLGEBRA II",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-C30-A" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-C23-A" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-C33-A" }
                ]
            }
        ]
    },
    {
        sigla: "ICI202",
        nombre: "CÁLCULO I",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E63" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E63" }
                ]
            }
        ]
    },
    {
        sigla: "ICI203",
        nombre: "MECÁNICA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T1A" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T1A" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T1A" }
                ]
            }
        ]
    },
    {
        sigla: "ICI204",
        nombre: "INTRODUCCIÓN A LA PROGRAMACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 38,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "TOCORNAL-T3A" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "TOCORNAL-T3A" }
                ]
            },
            {
                id: "2",
                cupos: 38,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "TOCORNAL-T3A" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "TOCORNAL-T3A" }
                ]
            }
        ]
    },
    {
        sigla: "ICI205",
        nombre: "INGLÉS II",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D42" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D42" }
                ]
            }
        ]
    },
    {
        sigla: "ICI401",
        nombre: "ECUACIONES DIFERENCIALES",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E60-A" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-D22-A" }
                ]
            }
        ]
    },
    {
        sigla: "ICI402",
        nombre: "CÁLCULO III",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "AYUDANTÍA", sala: "Casa Central-D12-A" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-D12-A" }
                ]
            }
        ]
    },
    {
        sigla: "ICI403",
        nombre: "TERMODINÁMICA: ONDAS Y CALOR",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T1A" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T1A" }
                ]
            }
        ]
    },
    {
        sigla: "ICI404",
        nombre: "TALLER DE BASE DE DATOS",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T41" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T41" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-T41" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-T41" }
                ]
            }
        ]
    },
    {
        sigla: "ICI405",
        nombre: "INGLÉS IV",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E70" }
                ]
            }
        ]
    },
    {
        sigla: "ICI601",
        nombre: "PRÁCTICA INTERMEDIA",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T1B" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T1B" }
                ]
            }
        ]
    },
    {
        sigla: "ICI602",
        nombre: "ECONOMETRÍA",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-T42" }
                ]
            }
        ]
    },
    {
        sigla: "ICI603",
        nombre: "ORGANIZACIÓN INDUSTRIAL",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D27" }
                ]
            }
        ]
    },
    {
        sigla: "ICI604",
        nombre: "ADMINISTRACIÓN DE EMPRESAS",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D22" }
                ]
            }
        ]
    },
    {
        sigla: "ICI802",
        nombre: "MACROECONOMÍA",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E63" }
                ]
            }
        ]
    },
    {
        sigla: "ICI803",
        nombre: "GESTIÓN LOGÍSTICA",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D03" }
                ]
            }
        ]
    },
    {
        sigla: "ICI804",
        nombre: "COMUNICACIÓN EFECTIVA PARA LA GESTIÓN",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D12" }
                ]
            }
        ]
    },
    {
        sigla: "ICI805",
        nombre: "FINANZAS",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            }
        ]
    },
    {
        sigla: "ICI806",
        nombre: "INNOVACIÓN Y EMPRENDIMIENTO",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T42" }
                ]
            }
        ]
    },
    {
        sigla: "OCI002",
        nombre: "O. ECONOMÍA CIRCULAR Y SOSTENIBILIDAD: UN NUEVO PARADIGMA PARA EL DESARROLLO PRODUCTIVO",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E30" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E30" }
                ]
            }
        ]
    },
    {
        sigla: "OCI003",
        nombre: "O. ANALÍTICA WEB",
        secciones: [
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-T42" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-T42" }
                ]
            }
        ]
    },
    {
        sigla: "CCD014",
        nombre: "E. LÓGICA Y RAZONAMIENTO MATEMÁTICO PARA EL PENSAMIENTO CRÍTICO Y LA TOMA DE DECISIONES",
        secciones: [
            {
                id: "1",
                cupos: 39,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E80" }
                ]
            },
            {
                id: "2",
                cupos: 39,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            },
            {
                id: "3",
                cupos: 39,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            }
        ]
    },
    {
        sigla: "RIC001",
        nombre: "PRÁCTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RIC002",
        nombre: "JUEGO DE NEGOCIOS",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-T22" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-T22" }
                ]
            }
        ]
    },
    {
        sigla: "RIC203",
        nombre: "MATEMÁTICA PARA LOS NEGOCIOS I",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-C34-A" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-C30-A" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E61-A" }
                ]
            }
        ]
    },
    {
        sigla: "RIC204",
        nombre: "CONTABILIDAD FINANCIERA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            }
        ]
    },
    {
        sigla: "RIC208",
        nombre: "INGLES II",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D32" }
                ]
            },
            {
                id: "2",
                cupos: 35,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D02" }
                ]
            },
            {
                id: "3",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "RIC209",
        nombre: "FUNCIONES GERENCIALES",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D13" }
                ]
            },
            {
                id: "2",
                cupos: 35,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            }
        ]
    },
    {
        sigla: "RIC210",
        nombre: "HERRAMIENTAS DIGITALES AVANZADAS",
        secciones: [
            {
                id: "1",
                cupos: 34,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "2",
                cupos: 34,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "3",
                cupos: 34,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E41" }
                ]
            }
        ]
    },
    {
        sigla: "RIC301",
        nombre: "DERECHO LABORAL",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "RIC407",
        nombre: "GESTIÓN DE PERSONAS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D11" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "RIC408",
        nombre: "ANÁLISIS MICROECONÓMICO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-C31-A" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-C33-A" }
                ]
            }
        ]
    },
    {
        sigla: "RIC409",
        nombre: "ANÁLISIS DE DATOS I",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            }
        ]
    },
    {
        sigla: "RIC410",
        nombre: "ANÁLISIS FINANCIERO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A31" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            }
        ]
    },
    {
        sigla: "RIC602",
        nombre: "MACROECONOMÍA I",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-C31-A" }
                ]
            }
        ]
    },
    {
        sigla: "RIC606",
        nombre: "PRÁCTICA INTERMEDIA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            }
        ]
    },
    {
        sigla: "RIC705",
        nombre: "ECONOMETRÍA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            }
        ]
    },
    {
        sigla: "RIC706",
        nombre: "INVESTIGACIÓN DE MERCADO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-C30-A" }
                ]
            }
        ]
    },
    {
        sigla: "RIC805",
        nombre: "GESTIÓN DE ORGANIZACIONES SOCIALES",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D12" }
                ]
            },
            {
                id: "2",
                cupos: 10,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RIC806",
        nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A31" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-A41-A" }
                ]
            },
            {
                id: "2",
                cupos: 10,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-A31" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-A31" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-A31-A" }
                ]
            }
        ]
    },
    {
        sigla: "RIC807",
        nombre: "GESTION DEL CAMBIO",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            },
            {
                id: "2",
                cupos: 10,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RIC808",
        nombre: "EMPRENDIMIENTO",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "2",
                cupos: 10,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RIC809",
        nombre: "HABILIDADES DIRECTIVAS",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            },
            {
                id: "2",
                cupos: 10,
                horario: [
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            }
        ]
    },
    {
        sigla: "RIC810",
        nombre: "GESTIÓN DE OPERACIONES Y PROCESOS",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "2",
                cupos: 10,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            }
        ]
    },
    {
        sigla: "ICG201",
        nombre: "CÁLCULO I",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-C31-A" }
                ]
            }
        ]
    },
    {
        sigla: "ICG202",
        nombre: "CONTABILIDAD PARA EL CONTROL DE GESTIÓN II",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A31" }
                ]
            }
        ]
    },
    {
        sigla: "ICG203",
        nombre: "GESTIÓN DE PERSONAS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D33" }
                ]
            }
        ]
    },
    {
        sigla: "ICG204",
        nombre: "HERRAMIENTAS ERP PARA LA GESTIÓN",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A31" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A31" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A31" }
                ]
            }
        ]
    },
    {
        sigla: "ICG205",
        nombre: "MICROECONOMÍA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D26" }
                ]
            }
        ]
    },
    {
        sigla: "ICG401",
        nombre: "GESTIÓN FINANCIERA",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D22" }
                ]
            }
        ]
    },
    {
        sigla: "ICG402",
        nombre: "GESTIÓN DE COSTOS",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D25" }
                ]
            }
        ]
    },
    {
        sigla: "ICG403",
        nombre: "AUDITORÍA Y CONTROL INTERNO",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D25" }
                ]
            }
        ]
    },
    {
        sigla: "ICG404",
        nombre: "ESTADÍSTICA DESCRIPTIVA",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A31" }
                ]
            }
        ]
    },
    {
        sigla: "ICG405",
        nombre: "TECNOLOGÍA DE SEGURIDAD II",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A31" }
                ]
            }
        ]
    },
    {
        sigla: "ICG601",
        nombre: "FINANZAS CORPORATIVAS",
        secciones: [
            {
                id: "1",
                cupos: 14,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            }
        ]
    },
    {
        sigla: "ICG602",
        nombre: "AUDITORÍA DE ESTADOS FINANCIEROS",
        secciones: [
            {
                id: "1",
                cupos: 14,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            }
        ]
    },
    {
        sigla: "ICG603",
        nombre: "CONTROL DE GESTIÓN",
        secciones: [
            {
                id: "1",
                cupos: 14,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "ICG604",
        nombre: "BASES DE DATOS",
        secciones: [
            {
                id: "1",
                cupos: 14,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A31" }
                ]
            }
        ]
    },
    {
        sigla: "ICG605",
        nombre: "NORMATIVA TRIBUTARIA I",
        secciones: [
            {
                id: "1",
                cupos: 14,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D27" }
                ]
            }
        ]
    },
    {
        sigla: "ICG801",
        nombre: "INGLÉS II",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "ICG802",
        nombre: "AUDITORÍA DE SISTEMAS Y HACKING",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E41" }
                ]
            }
        ]
    },
    {
        sigla: "ICG803",
        nombre: "ECONOMETRÍA EN MODELOS DE NEGOCIOS",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" }
                ]
            }
        ]
    },
    {
        sigla: "ICG804",
        nombre: "TALLER TECNOLOGÍA DE CLOUD COMPUTING",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D38" }
                ]
            }
        ]
    },
    {
        sigla: "ICG806",
        nombre: "GESTIÓN DE PROYECTOS",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "OCG002",
        nombre: "O. INTELIGENCIA DE NEGOCIOS",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D26" }
                ]
            }
        ]
    },
    {
        sigla: "OPK063",
        nombre: "O. FITOTERAPIA (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" }
                ]
            }
        ]
    },
    {
        sigla: "OPK073",
        nombre: "O. DEPORTE ADAPTADO PARA PERSONAS CON DISCAPACIDAD",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" }
                ]
            }
        ]
    },
    {
        sigla: "OPK076",
        nombre: "O. TECNOLOGÍAS DIGITALES Y DISPOSITIVOS DE BAJO COSTO PARA LA REHABILITACIÓN KINÉSICA BASADA EN EVIDENCIAS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LT2" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LT2" }
                ]
            }
        ]
    },
    {
        sigla: "OPK077",
        nombre: "O. KINESIOLOGÍA DEPORTIVA PARA EL ALTO RENDIMIENTO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" }
                ]
            }
        ]
    },
    {
        sigla: "RKI001",
        nombre: "MÓDULO DE TITULACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI002",
        nombre: "INTERNADO PROFESIONAL IV",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI003",
        nombre: "INTERNADO PROFESIONAL V",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI202",
        nombre: "FÍSICA PARA EL MOVIMIENTO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" }
                ]
            }
        ]
    },
    {
        sigla: "RKI203",
        nombre: "BIOQUÍMICA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS2" }
                ]
            }
        ]
    },
    {
        sigla: "RKI204",
        nombre: "ACTIVIDAD FÍSICA Y AUTOCUIDADO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LD0" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LD0" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LA5" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LA5" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LD2" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LD2" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI206",
        nombre: "MORFOLOGIA II",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS3" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS3" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS3" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS3" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS3" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS3" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" }
                ]
            }
        ]
    },
    {
        sigla: "RKI207",
        nombre: "INGLES TECNICO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" }
                ]
            }
        ]
    },
    {
        sigla: "RKI401",
        nombre: "ANÁLISIS DEL MOVIMIENTO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" }
                ]
            }
        ]
    },
    {
        sigla: "RKI402",
        nombre: "DISFUNCIONES DEL SISTEMA MÚSCULO-ESQUELÉTICO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LF2" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LF2" }
                ]
            }
        ]
    },
    {
        sigla: "RKI406",
        nombre: "DISFUNCION DEL SISTEMA CARDIORRESPIRATORIO Y METABOLICO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LE3" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LE3" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LA5" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LA5" }
                ]
            }
        ]
    },
    {
        sigla: "RKI503",
        nombre: "BIOESTADÍSTICA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" }
                ]
            }
        ]
    },
    {
        sigla: "RKI601",
        nombre: "ESTRATEGIA DE EVALUACIÓN MÚSCULO-ESQUELÉTICA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA3" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD3" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI604",
        nombre: "ERGONOMÍA Y SALUD OCUPACIONAL",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" }
                ]
            },
            {
                id: "6",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" }
                ]
            }
        ]
    },
    {
        sigla: "RKI606",
        nombre: "ESTRATEGIAS DE EVALUACION PARA NEURORREHABILITACION",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LC4" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LC4" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LA5" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LA5" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI607",
        nombre: "ESTRATEGIAS DE EVALUACION CARDIORRESPIRATORIAS",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "3",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI608",
        nombre: "BASES DE LA INTERVENCION KINESICA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA0" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LE3" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LE3" }
                ]
            }
        ]
    },
    {
        sigla: "RKI802",
        nombre: "INTERVENCIÓN KINESIOLÓGICA EN NEUROREHABILITACIÓN II",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI806",
        nombre: "INTERVENCION KINESIOLOGICA MUSCULO ESQUELETICA II",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LGT" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "LABORATORIO", sala: "Lo Cañas-LS6" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "PRACTICA", sala: "Lo Cañas-TRN" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "PRACTICA", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI807",
        nombre: "INTERVENCION KINESIOLOGICA CARDIORRESPIRATORIA II",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" }
                ]
            },
            {
                id: "3",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD1" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS5" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "SIMULACIÓN", sala: "Lo Cañas-TRN" }
                ]
            }
        ]
    },
    {
        sigla: "RKI808",
        nombre: "ESPECIALIDADES KINESICAS",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD2" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" }
                ]
            }
        ]
    },
    {
        sigla: "RKI809",
        nombre: "PROYECTOS DE INTERVENCION COMUNITARIA II",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" }
                ]
            }
        ]
    },
    {
        sigla: "NYD201",
        nombre: "BIOQUÍMICA NUTRICIONAL",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS4" }
                ]
            }
        ]
    },
    {
        sigla: "NYD202",
        nombre: "ANATOMÍA Y FISIOLOGÍA HUMANA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" }
                ]
            }
        ]
    },
    {
        sigla: "NYD203",
        nombre: "PSICOLOGÍA Y SALUD",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LC7" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LC7" }
                ]
            }
        ]
    },
    {
        sigla: "NYD204",
        nombre: "CIENCIAS DE LOS ALIMENTOS",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LN1" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "LABORATORIO", sala: "Lo Cañas-LN1" }
                ]
            }
        ]
    },
    {
        sigla: "NYD205",
        nombre: "INGLÉS PARA CIENCIAS DE LA SALUD",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" }
                ]
            }
        ]
    },
    {
        sigla: "OAM023",
        nombre: "O. CREACIÓN Y COMPOSICIÓN MUSICAL",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I05" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I05" }
                ]
            }
        ]
    },
    {
        sigla: "OAV023",
        nombre: "O. ARQUITECTURA Y DISEÑO",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I12" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I12" }
                ]
            }
        ]
    },
    {
        sigla: "RAM206",
        nombre: "PRÁCTICA CORAL I",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I06" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I06" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I06" }
                ]
            }
        ]
    },
    {
        sigla: "RAM208",
        nombre: "HISTORIA DE LA MÚSICA II",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I04" }
                ]
            }
        ]
    },
    {
        sigla: "RAM209",
        nombre: "LECTURA Y ESCRITURA MUSICAL II",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I06" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I06" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I06" }
                ]
            }
        ]
    },
    {
        sigla: "RAM210",
        nombre: "PIANO FUNCIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I05" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I05" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I05" }
                ]
            }
        ]
    },
    {
        sigla: "RAM211",
        nombre: "FLAUTA DULCE FUNCIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I04" }
                ]
            }
        ]
    },
    {
        sigla: "RAM408",
        nombre: "GUITARRA FUNCIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I04" }
                ]
            }
        ]
    },
    {
        sigla: "RAM605",
        nombre: "TEORÍA Y LENGUAJE MUSICAL VI",
        secciones: [
            {
                id: "1",
                cupos: 5,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I08" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I08" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I08" }
                ]
            }
        ]
    },
    {
        sigla: "RAM606",
        nombre: "MÚSICA Y DANZAS DE LATINOAMÉRICA",
        secciones: [
            {
                id: "1",
                cupos: 5,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I08" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I08" }
                ]
            }
        ]
    },
    {
        sigla: "RAM607",
        nombre: "DIDÁCTICA DE LA MÚSICA I",
        secciones: [
            {
                id: "1",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I08" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I08" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I08" }
                ]
            }
        ]
    },
    {
        sigla: "RAM608",
        nombre: "ENSAMBLE INSTRUMENTAL ESCOLAR II",
        secciones: [
            {
                id: "1",
                cupos: 6,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I06" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I06" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I06" }
                ]
            }
        ]
    },
    {
        sigla: "RAM806",
        nombre: "PRÁCTICA DE CONJUNTO II",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I04" }
                ]
            }
        ]
    },
    {
        sigla: "RAM807",
        nombre: "DIDÁCTICA DE LA MÚSICA III",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I04" }
                ]
            }
        ]
    },
    {
        sigla: "RAV206",
        nombre: "PINTURA I",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I01" }
                ]
            }
        ]
    },
    {
        sigla: "RAV208",
        nombre: "ESCULTURA I",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I2E" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I2E" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I2E" }
                ]
            }
        ]
    },
    {
        sigla: "RAV209",
        nombre: "HISTORIA Y TEORÍA DEL ARTE II",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I08" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I08" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I08" }
                ]
            }
        ]
    },
    {
        sigla: "RAV210",
        nombre: "FOTOGRAFÍA ANALÓGICA",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I2F" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I2F" }
                ]
            }
        ]
    },
    {
        sigla: "RAV211",
        nombre: "DIBUJO II",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I01" }
                ]
            }
        ]
    },
    {
        sigla: "RAV407",
        nombre: "GRABADO I",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I2G" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I2G" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I2G" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I2G" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I2G" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I2G" }
                ]
            }
        ]
    },
    {
        sigla: "RAV605",
        nombre: "TALLER CREATIVO INTEGRAL I",
        secciones: [
            {
                id: "1",
                cupos: 18,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I01" }
                ]
            }
        ]
    },
    {
        sigla: "RAV606",
        nombre: "MUSEO Y EDUCACIÓN ARTÍSTICA II",
        secciones: [
            {
                id: "1",
                cupos: 18,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I11" }
                ]
            }
        ]
    },
    {
        sigla: "RAV607",
        nombre: "DIDÁCTICA DE LAS ARTES VISUALES I",
        secciones: [
            {
                id: "1",
                cupos: 18,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I10" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I10" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I10" }
                ]
            }
        ]
    },
    {
        sigla: "RAV608",
        nombre: "PROBLEMÁTICAS DEL ARTE CHILENO",
        secciones: [
            {
                id: "1",
                cupos: 18,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I11" }
                ]
            }
        ]
    },
    {
        sigla: "RAV806",
        nombre: "TALLER CREATIVO INTEGRAL III",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I01" }
                ]
            }
        ]
    },
    {
        sigla: "RAV807",
        nombre: "DIDÁCTICA DE LAS ARTES VISUALES III",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-AUD" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-AUD" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-AUD" }
                ]
            }
        ]
    },
    {
        sigla: "RPA001",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPA002",
        nombre: "PRÁCTICA PROFESIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 6,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 6,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPA402",
        nombre: "PRÁCTICA INICIAL",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I09" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I09" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I09" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I07" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I07" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I07" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I12" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I12" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I12" }
                ]
            }
        ]
    },
    {
        sigla: "RPA702",
        nombre: "PATRIMONIO Y EDUCACIÓN ARTÍSTICA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I12" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I12" }
                ]
            }
        ]
    },
    {
        sigla: "RPA801",
        nombre: "PROYECTOS ARTÍSTICO-EDUCATIVOS",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I07" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I07" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I07" }
                ]
            }
        ]
    },
    {
        sigla: "RPA802",
        nombre: "IMAGINARIOS INFANTILES Y CULTURA JUVENIL",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I11" }
                ]
            }
        ]
    },
    {
        sigla: "OPB079",
        nombre: "O. APRENDIZAJE + SERVICIO PARA UNA DOCENCIA CON SENTIDO (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E30" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E30" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E30" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            }
        ]
    },
    {
        sigla: "RPB003",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPB004",
        nombre: "PRÁCTICA PROFESIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPB205",
        nombre: "IDENTIDAD PROFESIONAL EN EDUCACION BASICA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            }
        ]
    },
    {
        sigla: "RPB209",
        nombre: "APRENDIZAJE DE PATRONES Y ÁLGEBRA Y SU DIDÁCTICA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D24" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            }
        ]
    },
    {
        sigla: "RPB210",
        nombre: "LECTURA LITERARIA PARA LA EDUCACIÓN BÁSICA Y SU DIDÁCTICA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            }
        ]
    },
    {
        sigla: "RPB211",
        nombre: "DIVERSIDAD E INCLUSIÓN EDUCATIVA",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D13" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            }
        ]
    },
    {
        sigla: "RPB407",
        nombre: "MEDIO AMBIENTE NATURAL Y SU DIDÁCTICA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E80" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Lunes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "RPB408",
        nombre: "APRENDIZAJE DE DATOS Y PROBABILIDADES Y SU DIDÁCTICA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "RPB409",
        nombre: "COMUNICACIÓN ORAL Y SU DIDÁCTICA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "RPB410",
        nombre: "HISTORIA Y GEOGRAFÍA DE CHILE Y SU DIDÁCTICA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D02" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "RPB612",
        nombre: "CONOCIMIENTO PEDAGÓGICO DEL CONTENIDO EN ARTES VISUALES",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D03" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            }
        ]
    },
    {
        sigla: "RPB613",
        nombre: "CONOCIMIENTO PEDAGÓGICO DEL CONTENIDO EN ARTES MUSICALES",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-AUD" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-AUD" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            }
        ]
    },
    {
        sigla: "RPB614",
        nombre: "CONOCIMIENTO PEDAGÓGICO DEL CONTENIDO EN EDUCACION FISICA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-G50" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-G50" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-G50" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-G50" }
                ]
            }
        ]
    },
    {
        sigla: "RPB615",
        nombre: "CONOCIMIENTO PEDAGÓGICO DEL CONTENIDO EN TECNOLOGÍA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            }
        ]
    },
    {
        sigla: "RPB616",
        nombre: "PRÁCTICA INTERMEDIA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Miércoles", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPB703",
        nombre: "DIDÁCTICA DE LA LECTURA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D32" }
                ]
            }
        ]
    },
    {
        sigla: "RPB707",
        nombre: "QUÍMICA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            }
        ]
    },
    {
        sigla: "RPB709",
        nombre: "GEOGRAFÍA DE CHILE PARA ENSEÑANZA BÁSICA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            }
        ]
    },
    {
        sigla: "RPB801",
        nombre: "ÉTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D33" }
                ]
            }
        ]
    },
    {
        sigla: "RPB811",
        nombre: "LITERATURA INFANTIL II",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D05" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D32" }
                ]
            }
        ]
    },
    {
        sigla: "RPB812",
        nombre: "GEOMETRÍA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D38" }
                ]
            }
        ]
    },
    {
        sigla: "RPB813",
        nombre: "TALLER DE DIDÁCTICA II: LENGUAJE ALGEBRAICO",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            }
        ]
    },
    {
        sigla: "RPB814",
        nombre: "DIDÁCTICA DE LAS CIENCIAS NATURALES I",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            }
        ]
    },
    {
        sigla: "RPB815",
        nombre: "CIENCIAS SOCIALES",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            }
        ]
    },
    {
        sigla: "OPC091",
        nombre: "O. ENSEÑANA RESPONSIVA PARA AULAS INTERCULTURALES Y MULTILINGÜES",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" }
                ]
            }
        ]
    },
    {
        sigla: "OPC092",
        nombre: "O. ESCRITURA DE MUJERES LATINOAMERICANAS A TRAVÉS DE SUS PRINCIPALES TÓPICOS",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            }
        ]
    },
    {
        sigla: "RPC010",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPC011",
        nombre: "PRACTICA IV",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "RPC205",
        nombre: "MORFOFONOLOGÍA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D31" }
                ]
            }
        ]
    },
    {
        sigla: "RPC206",
        nombre: "DESARROLLO DE HABILIDADES COMUNICATIVAS II",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D24" }
                ]
            }
        ]
    },
    {
        sigla: "RPC207",
        nombre: "LITERATURA MUNDIAL: MODERNA I",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            }
        ]
    },
    {
        sigla: "RPC401",
        nombre: "MORFOSINTAXIS II",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C01" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C01" }
                ]
            }
        ]
    },
    {
        sigla: "RPC405",
        nombre: "PROCESO DE COMPRENSIÓN Y PRODUCCIÓN LINGÜÍSTICA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" }
                ]
            }
        ]
    },
    {
        sigla: "RPC406",
        nombre: "PRÁCTICA INICIAL",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" }
                ]
            }
        ]
    },
    {
        sigla: "RPC407",
        nombre: "LITERATURA MUNDIAL: CONTEMPORÁNEA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" }
                ]
            }
        ]
    },
    {
        sigla: "RPC501",
        nombre: "LINGÜÍSTICA GENERAL",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D27" }
                ]
            }
        ]
    },
    {
        sigla: "RPC601",
        nombre: "LINGÜÍSTICA DEL TEXTO",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D25" }
                ]
            }
        ]
    },
    {
        sigla: "RPC602",
        nombre: "TIPOLOGÍAS TEXTUALES Y GÉNEROS DISCURSIVOS",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "RPC603",
        nombre: "LITERATURA LATINOAMERICANA CONTEMPORÁNEA",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "RPC604",
        nombre: "PRÁCTICA II",
        secciones: [
            {
                id: "1",
                cupos: 16,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RPC801",
        nombre: "ANÁLISIS DEL DISCURSO",
        secciones: [
            {
                id: "1",
                cupos: 41,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C30" }
                ]
            }
        ]
    },
    {
        sigla: "RPC803",
        nombre: "DIDÁCTICA DE LA LITERATURA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D25" }
                ]
            }
        ]
    },
    {
        sigla: "RPC804",
        nombre: "DIDÁCTICA DE LA LENGUA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D25" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            }
        ]
    },
    {
        sigla: "RPC805",
        nombre: "LITERATURA CHILENA CONTEMPORÁNEA",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D42" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A10" }
                ]
            }
        ]
    },
    {
        sigla: "RPC903",
        nombre: "PRÁCTICA III",
        secciones: [
            {
                id: "1",
                cupos: 5,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "END201",
        nombre: "NEUROCIENCIA APLICADA AL DEPORTE Y EL ENTRENAMIENTO",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" }
                ]
            }
        ]
    },
    {
        sigla: "END202",
        nombre: "ENTRENAMIENTO EN DEPORTES COLECTIVOS I (FÚTBOL)",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" }
                ]
            }
        ]
    },
    {
        sigla: "END203",
        nombre: "TEORÍA Y FUNDAMENTOS DEL DEPORTE",
        secciones: [
            {
                id: "1",
                cupos: 35,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF5" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" }
                ]
            }
        ]
    },
    {
        sigla: "END204",
        nombre: "PRÁCTICA I",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" }
                ]
            }
        ]
    },
    {
        sigla: "END205",
        nombre: "EDUCACIÓN DEL RITMO, FITNESS Y WELLNESS",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" }
                ]
            }
        ]
    },
    {
        sigla: "OEF043",
        nombre: "O. EVALUACIÓN Y CONTROL DEL PROCESO DE ENTRENAMIENTO (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" }
                ]
            }
        ]
    },
    {
        sigla: "OEF044",
        nombre: "O. ACTIVIDADES OUTDOORS FÍSICO-DEPORTIVAS Y RECREATIVAS (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC3" }
                ]
            }
        ]
    },
    {
        sigla: "OEF116",
        nombre: "O. ACTIVIDADES ACUÁTICAS DEL PÁRVULO (LINEA DE PARVULO NIVEL 900)",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD4" }
                ]
            }
        ]
    },
    {
        sigla: "REF001",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "REF003",
        nombre: "PRÁCTICA PROFESIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 12,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 12,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "REF201",
        nombre: "ATLETISMO",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-PLC" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-PLC" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-PLC" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-PLC" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-PLC" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-PLC" }
                ]
            }
        ]
    },
    {
        sigla: "REF202",
        nombre: "HANDBOL",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" }
                ]
            }
        ]
    },
    {
        sigla: "REF204",
        nombre: "NEUROANATOMIA APLICADA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC2" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LS1" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LS3" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" }
                ]
            }
        ]
    },
    {
        sigla: "REF205",
        nombre: "TALLER DE PRIMEROS AUXILIOS APLICADO",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" }
                ]
            }
        ]
    },
    {
        sigla: "REF401",
        nombre: "FÚTBOL",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" }
                ]
            },
            {
                id: "3",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" }
                ]
            },
            {
                id: "4",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-CLC" }
                ]
            }
        ]
    },
    {
        sigla: "REF402",
        nombre: "DESARROLLO Y APRENDIZAJE MOTRIZ",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF1" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-CS1" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" }
                ]
            },
            {
                id: "3",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC6" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-CS2" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-CS2" }
                ]
            }
        ]
    },
    {
        sigla: "REF405",
        nombre: "FISIOLOGÍA APLICADA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" }
                ]
            },
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" }
                ]
            }
        ]
    },
    {
        sigla: "REF406",
        nombre: "PRÁCTICA INICIAL",
        secciones: [
            {
                id: "1",
                cupos: 17,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA6" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LF5" }
                ]
            },
            {
                id: "2",
                cupos: 17,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" }
                ]
            },
            {
                id: "3",
                cupos: 17,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" }
                ]
            },
            {
                id: "4",
                cupos: 17,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA7" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA7" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA7" }
                ]
            },
            {
                id: "5",
                cupos: 17,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LF3" }
                ]
            },
            {
                id: "6",
                cupos: 17,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" }
                ]
            }
        ]
    },
    {
        sigla: "REF601",
        nombre: "PSICOLOGÍA DE LA ACTIVIDAD FÍSICA Y EL DEPORTE",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" }
                ]
            }
        ]
    },
    {
        sigla: "REF602",
        nombre: "BÁSQUETBOL",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" }
                ]
            },
            {
                id: "3",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LCG" }
                ]
            }
        ]
    },
    {
        sigla: "REF606",
        nombre: "RESPUESTA EDUCATIVA PARA LA DIVERSIDAD",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC4" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" }
                ]
            }
        ]
    },
    {
        sigla: "REF607",
        nombre: "DIDÁCTICA DE LA EDUCACIÓN FÍSICA I",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" }
                ]
            }
        ]
    },
    {
        sigla: "REF608",
        nombre: "PRÁCTICA DE LOS DEPORTES",
        secciones: [
            {
                id: "1",
                cupos: 14,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 14,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA1" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 14,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 14,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA7" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 14,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "REF609",
        nombre: "TALLER DE PRIMEROS AUXILIOS APLICADO",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA5" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA2" }
                ]
            }
        ]
    },
    {
        sigla: "REF801",
        nombre: "ÉTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA4" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" }
                ]
            }
        ]
    },
    {
        sigla: "REF806",
        nombre: "TALLER DE APTITUD FISICA Y CONDICIÓN SALUDABLE",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LC5" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF5" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LT2" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" }
                ]
            }
        ]
    },
    {
        sigla: "REF807",
        nombre: "EVALUACIÓN DE LA EDUCACIÓN FÍSICA PARA LA ENSEÑANZA BÁSICA Y MEDIA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LT1" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LT1" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LD0" }
                ]
            }
        ]
    },
    {
        sigla: "REF808",
        nombre: "DANZAS FOLCLÓRICAS",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LA7" }
                ]
            },
            {
                id: "3",
                cupos: 20,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LA8" }
                ]
            }
        ]
    },
    {
        sigla: "RPF002",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 5,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPF602",
        nombre: "TEOLOGÍA NATURAL",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            }
        ]
    },
    {
        sigla: "RPF603",
        nombre: "DIDÁCTICA DE LA ESPECIALIDAD I",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RPF604",
        nombre: "SEMINARIO DE ÉTICA",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" }
                ]
            }
        ]
    },
    {
        sigla: "RPF605",
        nombre: "SEMINARIO FILOSOFIA DE LAS CIENCIAS",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D05" }
                ]
            }
        ]
    },
    {
        sigla: "RPF801",
        nombre: "FILOSOFÍA LATINOAMERICANA",
        secciones: [
            {
                id: "1",
                cupos: 5,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RPF802",
        nombre: "FILOSOFÍA CHILENA",
        secciones: [
            {
                id: "1",
                cupos: 5,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RPF804",
        nombre: "PRÁCTICA PROFESIONAL I",
        secciones: [
            {
                id: "1",
                cupos: 5,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPF806",
        nombre: "SEMINARIO DE ETICA APLICADA",
        secciones: [
            {
                id: "1",
                cupos: 5,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RPF807",
        nombre: "SEMINARIO DE TEXTO",
        secciones: [
            {
                id: "1",
                cupos: 5,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            }
        ]
    },
    {
        sigla: "OPH079",
        nombre: "O. ESPACIO EDUCATIVO DIVERSO EN EL MARCO DE LA NECESIDADES EDUCATIVAS ESPECIALES (SRR)",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D37" }
                ]
            }
        ]
    },
    {
        sigla: "OPH080",
        nombre: "O. ECONOMÍA Y EDUCACIÓN FINANCIERA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            }
        ]
    },
    {
        sigla: "RPH003",
        nombre: "PRÁCTICA IV",
        secciones: [
            {
                id: "1",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 3,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPH004",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 4,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 3,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPH205",
        nombre: "HISTORIA INDIGENA EN AMERICA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D23" }
                ]
            }
        ]
    },
    {
        sigla: "RPH206",
        nombre: "MUNDO ANTIGUO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            }
        ]
    },
    {
        sigla: "RPH207",
        nombre: "GÉNERO Y FEMINISMO EN CONTEXTOS EDUCATIVOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            }
        ]
    },
    {
        sigla: "RPH401",
        nombre: "GEOGRAFÍA HUMANA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            }
        ]
    },
    {
        sigla: "RPH402",
        nombre: "MUNDO MODERNO",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            }
        ]
    },
    {
        sigla: "RPH407",
        nombre: "GEOGRAFÍA URBANA Y RURAL",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A10" }
                ]
            }
        ]
    },
    {
        sigla: "RPH408",
        nombre: "PRÁCTICA INICIAL",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" }
                ]
            }
        ]
    },
    {
        sigla: "RPH503",
        nombre: "HISTORIA DE AMÉRICA COLONIAL",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" }
                ]
            }
        ]
    },
    {
        sigla: "RPH605",
        nombre: "GEOGRAFIA DE CHILE",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D38" }
                ]
            }
        ]
    },
    {
        sigla: "RPH606",
        nombre: "HISTORIA DE AMERICA S. XIX",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            }
        ]
    },
    {
        sigla: "RPH607",
        nombre: "MUNDO ACTUAL",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D38" }
                ]
            }
        ]
    },
    {
        sigla: "RPH608",
        nombre: "PRACTICA II",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPH609",
        nombre: "FORMACION CIUDADANA PARA CONTEXTOS ESCOLARES",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" }
                ]
            }
        ]
    },
    {
        sigla: "RPH801",
        nombre: "DIDÁCTICA DE LA HISTORIA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A10" }
                ]
            }
        ]
    },
    {
        sigla: "RPH802",
        nombre: "HISTORIA DE CHILE SIGLOS XX - XXI",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            }
        ]
    },
    {
        sigla: "RPH803",
        nombre: "HISTORIA DE AMÉRICA SIGLOS XX - XXI",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D28" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D28" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D28" }
                ]
            }
        ]
    },
    {
        sigla: "RPH806",
        nombre: "PROBLEMAS SOCIOAMBIENTALES",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A10" }
                ]
            }
        ]
    },
    {
        sigla: "RPH906",
        nombre: "PRACTICA III",
        secciones: [
            {
                id: "1",
                cupos: 2,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "OPI051",
        nombre: "O. EDUCACIÓN DIFERENCIAL, INCLUSIÓN Y DUA EN EL AULA DE INGLÉS (SRR)",
        secciones: [
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D22" }
                ]
            }
        ]
    },
    {
        sigla: "OPI056",
        nombre: "O. ESTRATEGIAS DE GAMIFICACIÓN Y ENFOQUE PEDAGÓGICO BASADO EN JUEGOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D34" }
                ]
            }
        ]
    },
    {
        sigla: "RPI001",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 4,
                horario: [
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 4,
                horario: [
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 4,
                horario: [
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 4,
                horario: [
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 4,
                horario: [
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "6",
                cupos: 4,
                horario: [
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPI002",
        nombre: "PRÁCTICA PROFESIONAL II: ENSEÑANZA MEDIA",
        secciones: [
            {
                id: "1",
                cupos: 8,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D25" }
                ]
            },
            {
                id: "2",
                cupos: 8,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            },
            {
                id: "3",
                cupos: 8,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RPI601",
        nombre: "INGLÉS VI",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D11" }
                ]
            }
        ]
    },
    {
        sigla: "RPI603",
        nombre: "COMPOSICIÓN DE TEXTOS EN INGLÉS III",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E53" }
                ]
            }
        ]
    },
    {
        sigla: "RPI604",
        nombre: "METODOLOGÍA DE LA ENSEÑANZA DEL INGLÉS PARA NIÑOS",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E40" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" }
                ]
            }
        ]
    },
    {
        sigla: "RPI606",
        nombre: "GRAMÁTICA APLICADA VI",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            }
        ]
    },
    {
        sigla: "RPI803",
        nombre: "COMPOSICIÓN DE TEXTOS EN INGLÉS IV",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E53" }
                ]
            }
        ]
    },
    {
        sigla: "RPI805",
        nombre: "INGLÉS VIII",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D24" }
                ]
            }
        ]
    },
    {
        sigla: "RPI806",
        nombre: "GRAMÁTICA APLICADA VIII",
        secciones: [
            {
                id: "1",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D12" }
                ]
            }
        ]
    },
    {
        sigla: "RPI808",
        nombre: "PRACTICA II: ENSEÑANZA DE INGLÉS EN CONTEXTOS DIVERSOS",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I07" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I07" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I07" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I09" }
                ]
            },
            {
                id: "2",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "RPI904",
        nombre: "PRÁCTICA PROFESIONAL I: ENSEÑANZA BÁSICA",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "PEM001",
        nombre: "SEMINARIO DE GRADO II",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "PEM002",
        nombre: "PRÁCTICA PROFESIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "PEM201",
        nombre: "ÁLGEBRA",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D39-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM202",
        nombre: "GEOMETRÍA EUCLIDIANA",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-D39-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM203",
        nombre: "CÁLCULO DIFERENCIAL EN UNA VARIABLE",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-D28-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM204",
        nombre: "COMPUTACIÓN Y PENSAMIENTO ALGORÍTMICO",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A31" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A31" }
                ]
            }
        ]
    },
    {
        sigla: "PEM401",
        nombre: "FUNDAMENTOS DE LA DIDÁCTICA DE LAS MATEMÁTICAS",
        secciones: [
            {
                id: "1",
                cupos: 1,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E63" }
                ]
            }
        ]
    },
    {
        sigla: "PEM402",
        nombre: "GEOMETRÍAS NO EUCLIDIANAS",
        secciones: [
            {
                id: "1",
                cupos: 1,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D42" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D42" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-D42-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM403",
        nombre: "CÁLCULO DIFERENCIAL E INTEGRAL MULTIVARIABLE",
        secciones: [
            {
                id: "1",
                cupos: 8,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "AYUDANTÍA", sala: "Carmen 340-SC6-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM404",
        nombre: "PRÁCTICA INICIAL",
        secciones: [
            {
                id: "1",
                cupos: 6,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D38" }
                ]
            }
        ]
    },
    {
        sigla: "PEM601",
        nombre: "DIDÁCTICA DEL ÁLGEBRA",
        secciones: [
            {
                id: "1",
                cupos: 13,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D22" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-LDB" }
                ]
            }
        ]
    },
    {
        sigla: "PEM602",
        nombre: "SISTEMA NUMÉRICOS",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D38" }
                ]
            }
        ]
    },
    {
        sigla: "PEM603",
        nombre: "MODELOS PROBABILÍSTICOS CONTINUOS",
        secciones: [
            {
                id: "1",
                cupos: 6,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-C31-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM604",
        nombre: "PRÁCTICA INTERMEDIA I",
        secciones: [
            {
                id: "1",
                cupos: 11,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D05" }
                ]
            }
        ]
    },
    {
        sigla: "PEM801",
        nombre: "DESAFÍOS DEL PROFESORADO DE MATEMÁTICAS: DIVERSIDAD E INCLUSIÓN",
        secciones: [
            {
                id: "1",
                cupos: 19,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            }
        ]
    },
    {
        sigla: "PEM802",
        nombre: "DIDÁCTICA DEL CÁLCULO",
        secciones: [
            {
                id: "1",
                cupos: 16,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            }
        ]
    },
    {
        sigla: "PEM803",
        nombre: "DIDÁCTICA DE LA ESTADÍSTICA Y LAS PROBABILIDADES",
        secciones: [
            {
                id: "1",
                cupos: 19,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "PEM804",
        nombre: "PENSAMIENTO COMPUTACIONAL EN LA MODELACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 19,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-LDB" }
                ]
            }
        ]
    },
    {
        sigla: "RPM004",
        nombre: "SEMINARIO DE GRADO II",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPM005",
        nombre: "PRÁCTICA PROFESIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RTP201",
        nombre: "EVALUACIÓN PARA LOS APRENDIZAJES TÉCNICOS",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            }
        ]
    },
    {
        sigla: "RTP202",
        nombre: "AMBIENTES DE APRENDIZAJE Y CULTURA ESCOLAR JUVENIL",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            }
        ]
    },
    {
        sigla: "RTP203",
        nombre: "INGLÉS TÉCNICO",
        secciones: [
            {
                id: "1",
                cupos: 34,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            }
        ]
    },
    {
        sigla: "RTP401",
        nombre: "ÉTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            }
        ]
    },
    {
        sigla: "RTP404",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RTP405",
        nombre: "PRACTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPR002",
        nombre: "PRÁCTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPR003",
        nombre: "SEMINARIO DE TITULO Y EXAMEN DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            }
        ]
    },
    {
        sigla: "OPP170",
        nombre: "O. PSICOTERAPIA BREVE",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            }
        ]
    },
    {
        sigla: "OPP225",
        nombre: "O. PRIMEROS AUXILIOS PSICOLÓGICOS E INTERVENCIÓN EN EMERGENCIA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" }
                ]
            }
        ]
    },
    {
        sigla: "OPP244",
        nombre: "O. ENFOQUES ACTUALES SOBRE BIENESTAR ORGANIZACIONAL Y SU ABORDAJE EN EL CONTEXTO DE LA PSICOLOGÍA DEL TRABAJO",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            }
        ]
    },
    {
        sigla: "OPP245",
        nombre: "O. SEXUALIDAD, AFECTIVIDAD Y GÉNERO: INTERVENCIÓN PSICOLÓGICA PARTICIPATIVA Y BASADA EN DERECHOS EN CONTEXTOS ESCOLARES Y COMUNITARIOS",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            }
        ]
    },
    {
        sigla: "OPP246",
        nombre: "O. TRAUMA Y GÉNERO",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E60" }
                ]
            }
        ]
    },
    {
        sigla: "OPP247",
        nombre: "O. APLICACIONES DE LA PSICOLOGÍA DEL APRENDIZAJE EN EL DISEÑO DE ACTIVIDADES EDUCACIONALES",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C01" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C01" }
                ]
            }
        ]
    },
    {
        sigla: "OPP248",
        nombre: "O. CAPACITACIÓN Y DESARROLLO EN EL CONTEXTO ORGANIZACIONAL",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            }
        ]
    },
    {
        sigla: "OPP249",
        nombre: "O. NEUROCIENCIA COGNITIVA Y EVALUACIÓN DE PROCESOS COGNITIVOS",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E80" }
                ]
            }
        ]
    },
    {
        sigla: "RPS001",
        nombre: "PRÁCTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "6",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "9",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPS002",
        nombre: "TALLER DE ÉTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C01" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C01" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C01" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C01" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C01" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C01" }
                ]
            },
            {
                id: "4",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D38" }
                ]
            },
            {
                id: "5",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I10" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I10" }
                ]
            },
            {
                id: "6",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D35" }
                ]
            },
            {
                id: "7",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D34" }
                ]
            },
            {
                id: "8",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D03" }
                ]
            },
            {
                id: "9",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            }
        ]
    },
    {
        sigla: "RPS201",
        nombre: "CICLO VITAL I",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E50-A" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E61-A" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E81-A" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-D10-A" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-C34-A" }
                ]
            },
            {
                id: "6",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E72-A" }
                ]
            },
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-C35-A" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Carmen 350-E51-A" }
                ]
            }
        ]
    },
    {
        sigla: "RPS203",
        nombre: "NEUROCIENCIAS",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E72-A" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E62-A" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D11-A" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E70-A" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Carmen 350-E70-A" }
                ]
            },
            {
                id: "6",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D10-A" }
                ]
            },
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Carmen 340-SSH-A" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E80-A" }
                ]
            }
        ]
    },
    {
        sigla: "RPS205",
        nombre: "SOCIOLOGÍA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D11" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D11" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "6",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            },
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I10" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I10" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E50" }
                ]
            }
        ]
    },
    {
        sigla: "RPS206",
        nombre: "PSICOLOGÍA SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-C34-A" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D41-A" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Carmen 350-E50-A" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D41-A" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-D41-A" }
                ]
            },
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D41-A" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "San Isidro-I10" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "San Isidro-I10" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "San Isidro-I10-A" }
                ]
            }
        ]
    },
    {
        sigla: "RPS207",
        nombre: "TALLER DE ELABORACIÓN DE PROYECTOS EN PSICOLOGÍA",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SC5" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" }
                ]
            },
            {
                id: "4",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            },
            {
                id: "5",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            },
            {
                id: "6",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D05" }
                ]
            },
            {
                id: "7",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            },
            {
                id: "8",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            },
            {
                id: "9",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            },
            {
                id: "10",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            },
            {
                id: "11",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D05" }
                ]
            },
            {
                id: "12",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D05" }
                ]
            },
            {
                id: "13",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" }
                ]
            },
            {
                id: "14",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            },
            {
                id: "15",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            },
            {
                id: "16",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            },
            {
                id: "17",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" }
                ]
            },
            {
                id: "18",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" }
                ]
            },
            {
                id: "19",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D38" }
                ]
            }
        ]
    },
    {
        sigla: "RPS401",
        nombre: "TALLER DE RELACIONES HUMANAS II",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            },
            {
                id: "4",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D37" }
                ]
            },
            {
                id: "5",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            },
            {
                id: "6",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E63" }
                ]
            },
            {
                id: "7",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            },
            {
                id: "8",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D35" }
                ]
            },
            {
                id: "9",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" }
                ]
            },
            {
                id: "10",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D28" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D28" }
                ]
            },
            {
                id: "11",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" }
                ]
            },
            {
                id: "12",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" }
                ]
            }
        ]
    },
    {
        sigla: "RPS403",
        nombre: "PRÁCTICA TEMPRANA",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A10" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "6",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "7",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "8",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "9",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "10",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "11",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "12",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "13",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RPS404",
        nombre: "PSICOLOGÍA DE LA PERSONALIDAD",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E62-A" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D21-A" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Carmen 350-E72-A" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Carmen 350-E71-A" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 350-E72-A" }
                ]
            }
        ]
    },
    {
        sigla: "RPS405",
        nombre: "METODOLOGÍAS DE INVESTIGACIÓN CUANTITATIVAS",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-D01-A" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D11-A" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-C34-A" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E41" },
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-D21-A" }
                ]
            }
        ]
    },
    {
        sigla: "RPS601",
        nombre: "PSICOLOGÍA DEL TRABAJO",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D01-A" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-D41-A" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-C32-A" }
                ]
            }
        ]
    },
    {
        sigla: "RPS602",
        nombre: "PSICOLOGÍA HUMANISTA EXISTENCIAL",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C35" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C35" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C30" }
                ]
            }
        ]
    },
    {
        sigla: "RPS603",
        nombre: "PSICOLOGÍA SISTÉMICA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D13" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            }
        ]
    },
    {
        sigla: "RPS604",
        nombre: "PSIQUIATRÍA",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-D13-A" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Carmen 350-E82-A" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "AYUDANTÍA", sala: "Casa Central-D10-A" }
                ]
            }
        ]
    },
    {
        sigla: "RPS605",
        nombre: "TALLER PSICODIAGNÓSTICO Y TÉCNICAS DE EVALUACIÓN DE LA PERSONALIDAD",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D37" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
                ]
            },
            {
                id: "4",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            },
            {
                id: "5",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D04" }
                ]
            },
            {
                id: "6",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I01" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I01" }
                ]
            },
            {
                id: "7",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D03" }
                ]
            },
            {
                id: "8",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            },
            {
                id: "9",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A30" }
                ]
            }
        ]
    },
    {
        sigla: "RPS606",
        nombre: "TALLER TÉCNICAS DE EVALUACIÓN INFANTIL",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D39" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-D39-A" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA", sala: "Casa Central-D02-A" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC8" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 340-SC8-A" }
                ]
            },
            {
                id: "4",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D02-A" }
                ]
            },
            {
                id: "5",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D28" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D28" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D28-A" }
                ]
            },
            {
                id: "6",
                cupos: 15,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I04" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "San Isidro-I04-A" }
                ]
            },
            {
                id: "7",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-B21-A" }
                ]
            },
            {
                id: "8",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D37-A" }
                ]
            },
            {
                id: "9",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SC7" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Carmen 340-SC7-A" }
                ]
            }
        ]
    },
    {
        sigla: "RPS804",
        nombre: "SEMINARIO DE GRADO",
        secciones: [
            {
                id: "1",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "6",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "7",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "8",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "9",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "10",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "11",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "12",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "13",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "14",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "15",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "16",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "17",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "18",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "19",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "20",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "21",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "22",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "23",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "24",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "25",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "26",
                cupos: 45,
                horario: [
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "OPS102",
        nombre: "O. DEMOCRACIA, GOBIERNO Y OPINIÓN PÚBLICA",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SC6" }
                ]
            }
        ]
    },
    {
        sigla: "RSO001",
        nombre: "PRÁCTICA PROFESIONAL",
        secciones: [
            {
                id: "1",
                cupos: 9,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RSO403",
        nombre: "PARTICIPACIÓN, SOCIEDAD CIVIL Y CIUDADANÍA",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D37" }
                ]
            }
        ]
    },
    {
        sigla: "RSO406",
        nombre: "INVESTIGACION SOCIAL II: ANALISIS CUALITATIVOS",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-LDB-A" }
                ]
            }
        ]
    },
    {
        sigla: "RSO407",
        nombre: "ESTADISTICA II: INFERENCIAL",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "AYUDANTÍA", sala: "Casa Central-LDB-A" }
                ]
            }
        ]
    },
    {
        sigla: "RSO408",
        nombre: "INVESTIGACION SOCIAL III: DISEÑOS CUANTITATIVOS",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-LDB" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-LDB-A" }
                ]
            }
        ]
    },
    {
        sigla: "RSO409",
        nombre: "SOCIOLOGÍA LATINOAMERICANA",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D05" }
                ]
            }
        ]
    },
    {
        sigla: "RSO602",
        nombre: "SOCIOLOGÍA DE LA CULTURA",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D05" }
                ]
            }
        ]
    },
    {
        sigla: "RSO606",
        nombre: "SOCIOLOGÍA DE LOS PROCESOS ORGANIZACIONALES",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "RSO607",
        nombre: "PRACTICA TEMPRANA",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RSO608",
        nombre: "SOCIOLOGÍA DE LA COMUNICACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D37" }
                ]
            }
        ]
    },
    {
        sigla: "RSO609",
        nombre: "ESTADO, GOBIERNO Y POLÍTICAS PÚBLICAS",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D05" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D37" }
                ]
            }
        ]
    },
    {
        sigla: "RSO805",
        nombre: "TALLER III: EDUCACIÓN",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            }
        ]
    },
    {
        sigla: "RSO807",
        nombre: "SEMINARIO DE GRADO I",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RSO808",
        nombre: "EVALUACIÓN DE PROGRAMAS",
        secciones: [
            {
                id: "1",
                cupos: 10,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            }
        ]
    },
    {
        sigla: "TOC201",
        nombre: "CIENCIAS Y EPISTEMOLOGÍA DE LA OCUPACIÓN HUMANA",
        secciones: [
            {
                id: "1",
                cupos: 26,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF4" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LF4" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LF4" }
                ]
            },
            {
                id: "2",
                cupos: 26,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LF6" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "TALLER", sala: "Lo Cañas-LF6" }
                ]
            }
        ]
    },
    {
        sigla: "TOC202",
        nombre: "FISIOLOGÍA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Lo Cañas-LF2" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "TALLER", sala: "Lo Cañas-LF2" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "TALLER", sala: "Lo Cañas-LF2" }
                ]
            }
        ]
    },
    {
        sigla: "TOC203",
        nombre: "MORFOLOGÍA Y ANATOMÍA II",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF5" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Lo Cañas-LF5" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "LABORATORIO", sala: "Lo Cañas-LS1" }
                ]
            }
        ]
    },
    {
        sigla: "TOC204",
        nombre: "ESTADÍSTICA EN SALUD",
        secciones: [
            {
                id: "1",
                cupos: 26,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LC7" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LC7" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LC7" }
                ]
            },
            {
                id: "2",
                cupos: 26,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF5" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LF5" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LF5" }
                ]
            }
        ]
    },
    {
        sigla: "TOC205",
        nombre: "INTRODUCCIÓN A LA SALUD MENTAL",
        secciones: [
            {
                id: "1",
                cupos: 26,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF6" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LF6" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LF6" }
                ]
            },
            {
                id: "2",
                cupos: 26,
                horario: [
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Lo Cañas-LF5" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "TALLER", sala: "Lo Cañas-LF5" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "TALLER", sala: "Lo Cañas-LF5" }
                ]
            }
        ]
    },
    {
        sigla: "OTS195",
        nombre: "O. LA VIOLENCIA Y EL MALTRATO DE LA NIÑEZ Y ADOLESCENCIA DESDE LA INTERVENCIÓN EN TRABAJO SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D33" }
                ]
            }
        ]
    },
    {
        sigla: "OTS201",
        nombre: "O. TRABAJO SOCIAL CLÍNICO",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D03" }
                ]
            }
        ]
    },
    {
        sigla: "OTS202",
        nombre: "O. TRABAJO SOCIAL Y ANÁLISIS SOCIOTERRITORIAL: INTERVENCIÓN EN PROBLEMAS SOCIALES COMPLEJO",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            }
        ]
    },
    {
        sigla: "RTS005",
        nombre: "PRÁCTICA PROFESIONAL II",
        secciones: [
            {
                id: "1",
                cupos: 4,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 4,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 4,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 4,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 4,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "6",
                cupos: 4,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "7",
                cupos: 4,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "8",
                cupos: 13,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "9",
                cupos: 13,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "10",
                cupos: 13,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RTS201",
        nombre: "FUNDAMENTOS TEÓRICOS Y METODOLÓGICOS DE LA INTERVENCIÓN SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E80" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
                ]
            },
            {
                id: "3",
                cupos: 14,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            }
        ]
    },
    {
        sigla: "RTS203",
        nombre: "ECONOMÍA Y SOCIEDAD",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D02" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D02" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
                ]
            },
            {
                id: "3",
                cupos: 16,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            }
        ]
    },
    {
        sigla: "RTS204",
        nombre: "EPISTEMOLOGÍA DE LAS CIENCIAS SOCIALES",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I12" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I12" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I12" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Miércoles", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            }
        ]
    },
    {
        sigla: "RTS206",
        nombre: "TALLER DE HABILIDADES RELACIONALES PARA LA INTERVENCIÓN SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E80" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D37" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D34" }
                ]
            },
            {
                id: "4",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D26" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D26" }
                ]
            },
            {
                id: "5",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" }
                ]
            },
            {
                id: "6",
                cupos: 15,
                horario: [
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            }
        ]
    },
    {
        sigla: "RTS305",
        nombre: "CONSTITUCIÓN PSICOLÓGICA DEL SUJETO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E30" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E30" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D23" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D23" }
                ]
            },
            {
                id: "3",
                cupos: 29,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C33" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C33" }
                ]
            }
        ]
    },
    {
        sigla: "RTS401",
        nombre: "TRABAJO SOCIAL CON GRUPOS Y COMUNIDADES",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E53" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E53" }
                ]
            },
            {
                id: "3",
                cupos: 11,
                horario: [
                    { dia: "Lunes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Jueves", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "RTS402",
        nombre: "TRABAJO SOCIAL Y ACCIÓN COLECTIVA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D33" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D35" }
                ]
            },
            {
                id: "3",
                cupos: 17,
                horario: [
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            }
        ]
    },
    {
        sigla: "RTS403",
        nombre: "POBREZA EN LA SOCIEDAD CONTEMPORÁNEA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            },
            {
                id: "3",
                cupos: 10,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "RTS404",
        nombre: "TEORÍAS SOCIOLÓGICAS II",
        secciones: [
            {
                id: "1",
                cupos: 25,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            },
            {
                id: "2",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            },
            {
                id: "3",
                cupos: 13,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "RTS407",
        nombre: "GESTIÓN Y EVALUACIÓN DE LA INTERVENCIÓN SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D31" }
                ]
            },
            {
                id: "3",
                cupos: 10,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "RTS408",
        nombre: "TALLER DE HERRAMIENTAS PARA LA INTERVENCIÓN SOCIAL CON GRUPOS Y COMUNIDADES",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" }
                ]
            },
            {
                id: "2",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D28" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D28" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D28" }
                ]
            },
            {
                id: "3",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D03" }
                ]
            },
            {
                id: "4",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Miércoles", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
                ]
            },
            {
                id: "5",
                cupos: 15,
                horario: [
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Miércoles", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            }
        ]
    },
    {
        sigla: "RTS503",
        nombre: "CONSTRUCCIÓN DE CONOCIMIENTO PARA LA INTERVENCIÓN SOCIAL:APROXIMACIÓN CUANTITATIVA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D42" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D42" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D42" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D33" }
                ]
            },
            {
                id: "3",
                cupos: 16,
                horario: [
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "RTS602",
        nombre: "CONSTRUCCIÓN DE CONOCIMIENTO PARA LA INTERVENCIÓN SOCIAL:SISTEMATIZACIÓN E INVESTIGACIÓN/ACCIÓN",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D33" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C01" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C01" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C01" }
                ]
            },
            {
                id: "3",
                cupos: 23,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C32" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C32" }
                ]
            }
        ]
    },
    {
        sigla: "RTS604",
        nombre: "PRÁCTICA DE INTERVENCIÓN SOCIAL II",
        secciones: [
            {
                id: "1",
                cupos: 8,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 8,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 8,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 8,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 8,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "6",
                cupos: 8,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "7",
                cupos: 8,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "8",
                cupos: 1,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "9",
                cupos: 1,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "10",
                cupos: 1,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "11",
                cupos: 1,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RTS802",
        nombre: "SALUD MENTAL",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D03" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 340-SSH" }
                ]
            },
            {
                id: "3",
                cupos: 12,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            }
        ]
    },
    {
        sigla: "RTS803",
        nombre: "DEBATES CONTEMPORÁNEOS EN INTERVENCIÓN SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E63" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E63" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D33" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D33" }
                ]
            },
            {
                id: "3",
                cupos: 4,
                horario: [
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            }
        ]
    },
    {
        sigla: "RTS804",
        nombre: "TRABAJO FINAL DE GRADUACIÓN II",
        secciones: [
            {
                id: "1",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "2",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "3",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "4",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "5",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "6",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "7",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "8",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "9",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "10",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "11",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "12",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "13",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "14",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "15",
                cupos: 6,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "16",
                cupos: 4,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "17",
                cupos: 4,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "18",
                cupos: 4,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "19",
                cupos: 4,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "20",
                cupos: 4,
                horario: [
                    { dia: "Martes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Martes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Viernes", inicio: "21:50", fin: "22:30", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" },
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "RTS805",
        nombre: "TRABAJO SOCIAL Y GÉNERO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            },
            {
                id: "2",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D03" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D03" }
                ]
            },
            {
                id: "3",
                cupos: 5,
                horario: [
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B31" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B31" }
                ]
            }
        ]
    },
    {
        sigla: "OTS181",
        nombre: "O. GERONTOLOGÍA Y TRABAJO SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Lunes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Lunes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            }
        ]
    },
    {
        sigla: "OTS197",
        nombre: "O. PERITAJE SOCIAL",
        secciones: [
            {
                id: "1",
                cupos: 15,
                horario: [
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B30" }
                ]
            }
        ]
    }
];
