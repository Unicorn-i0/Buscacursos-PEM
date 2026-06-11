const datosCursos = [
    {
        sigla: "OPM037",
        nombre: "O. TECNOLOGÍAS TRIDIMENSIONALES Y REALIDAD VIRTUAL",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D05" }
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
                cupos: 10,
                horario: [
                    { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
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
                    { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "PEM101",
        nombre: "DESARROLLO DEL PENSAMIENTO NUMÉRICO Y ALGEBRAICO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D32" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B20" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-B32-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM102",
        nombre: "DESARROLLO DEL PENSAMIENTO GEOMÉTRICO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D12" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "AYUDANTÍA", sala: "Casa Central-D04-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM103",
        nombre: "DESARROLLO DEL PENSAMIENTO ANALÍTICO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-D03-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM104",
        nombre: "DESARROLLO DEL PENSAMIENTO ESTADÍSTICO",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            }
        ]
    },
    {
        sigla: "PEM301",
        nombre: "ÁLGEBRA LINEAL",
        secciones: [
            {
                id: "1",
                cupos: 29,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "AYUDANTÍA", sala: "Casa Central-B30-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM302",
        nombre: "GEOMETRÍA ANALÍTICA",
        secciones: [
            {
                id: "1",
                cupos: 29,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B22" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "AYUDANTÍA", sala: "Casa Central-B21-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM303",
        nombre: "CÁLCULO INTEGRAL EN UNA VARIABLE",
        secciones: [
            {
                id: "1",
                cupos: 29,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D38" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "AYUDANTÍA", sala: "Casa Central-D04-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM304",
        nombre: "HISTORIA Y EPISTEMOLOGÍA DE LAS MATEMÁTICAS",
        secciones: [
            {
                id: "1",
                cupos: 28,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D37" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D37" }
                ]
            }
        ]
    },
    {
        sigla: "PEM501",
        nombre: "ÁLGEBRA ABSTRACTA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D27" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D04" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-B21-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM502",
        nombre: "DIDÁCTICA DE LA GEOMETRÍA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            }
        ]
    },
    {
        sigla: "PEM503",
        nombre: "MODELOS PROBABILÍSTICOS DISCRETOS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E40" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "AYUDANTÍA", sala: "Casa Central-D36-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM504",
        nombre: "PROGRAMACIÓN Y ROBÓTICA EDUCATIVA",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "PEM701",
        nombre: "EVALUACIÓN EN EDUCACIÓN MATEMÁTICA",
        secciones: [
            {
                id: "1",
                cupos: 34,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D31" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D39" }
                ]
            }
        ]
    },
    {
        sigla: "PEM702",
        nombre: "DIDÁCTICA DE LOS SISTEMAS NUMÉRICOS",
        secciones: [
            {
                id: "1",
                cupos: 34,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "San Isidro-I11" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D02" }
                ]
            }
        ]
    },
    {
        sigla: "PEM703",
        nombre: "ESTADÍSTICA INFERENCIAL",
        secciones: [
            {
                id: "1",
                cupos: 34,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA", sala: "Casa Central-D33-A" }
                ]
            }
        ]
    },
    {
        sigla: "PEM704",
        nombre: "PRÁCTICA INTERMEDIA II",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D02" }
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
                cupos: 29,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B30" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "PEM901",
        nombre: "DESAFÍOS DEL PROFESORADO DE MATEMÁTICAS: LIDERAZGO Y CONVIVENCIA",
        secciones: [
            {
                id: "1",
                cupos: 20,
                horario: [
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D42" },
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D42" }
                ]
            }
        ]
    },
    {
        sigla: "PEM902",
        nombre: "SEMINARIO DE GRADO I",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-B20" }
                ]
            }
        ]
    },
    {
        sigla: "PEM903",
        nombre: "DISEÑOS DIDÁCTICOS CON APOYO DE TECNOLOGÍAS EDUCATIVAS",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-B21" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-B21" }
                ]
            }
        ]
    },
    {
        sigla: "PEM904",
        nombre: "PRÁCTICA PROFESIONAL I",
        secciones: [
            {
                id: "1",
                cupos: 30,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-TER" }
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
                cupos: 38,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A30" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-B22" }
                ]
            },
            {
                id: "2",
                cupos: 34,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "3",
                cupos: 39,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            }
        ]
    },
    {
        sigla: "EPC006",
        nombre: "DIDÁCTICA GENERAL EN CONTEXTOS DIVERSOS",
        secciones: [
            {
                id: "3",
                cupos: 38,
                horario: [
                    { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
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
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D34" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D34" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D13" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D13" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E72" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D11" },
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D11" }
                ]
            },
            {
                id: "6",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
                ]
            },
            {
                id: "7",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Miércoles", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D21" }
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
                cupos: 37,
                horario: [
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            }
        ]
    },
    {
        sigla: "EPC009",
        nombre: "FUNDAMENTOS DE LAS PRÁCTICAS EVALUATIVAS",
        secciones: [
            {
                id: "1",
                cupos: 36,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            },
            {
                id: "2",
                cupos: 38,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E60" }
                ]
            },
            {
                id: "3",
                cupos: 36,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "4",
                cupos: 39,
                horario: [
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
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
                cupos: 32,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E31" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
                ]
            },
            {
                id: "2",
                cupos: 37,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D24" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D24" }
                ]
            },
            {
                id: "3",
                cupos: 38,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            },
            {
                id: "4",
                cupos: 36,
                horario: [
                    { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D21" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-D11" }
                ]
            },
            {
                id: "5",
                cupos: 38,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
                ]
            },
            {
                id: "6",
                cupos: 40,
                horario: [
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C34" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C34" }
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
                cupos: 18,
                horario: [
                    { dia: "Viernes", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-C30" },
                    { dia: "Viernes", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-C30" }
                ]
            },
            {
                id: "2",
                cupos: 29,
                horario: [
                    { dia: "Martes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "3",
                cupos: 37,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E80" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E80" }
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
                cupos: 39,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D35" },
                    { dia: "Jueves", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "San Isidro-I10" }
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
                cupos: 39,
                horario: [
                    { dia: "Lunes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" },
                    { dia: "Miércoles", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-D36" }
                ]
            }
        ]
    },
    {
        sigla: "EPC016",
        nombre: "METODOLOGÍA DE INVESTIGACIÓN EDUCATIVA",
        secciones: [
            {
                id: "1",
                cupos: 18,
                horario: [
                    { dia: "Jueves", inicio: "18:50", fin: "20:10", tipo: "CÁTEDRA", sala: "Casa Central-B32" },
                    { dia: "Jueves", inicio: "20:20", fin: "21:40", tipo: "CÁTEDRA", sala: "Casa Central-B32" }
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
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "3",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E72" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            },
            {
                id: "5",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            },
            {
                id: "6",
                cupos: 39,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "7",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            },
            {
                id: "8",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "9",
                cupos: 33,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            },
            {
                id: "10",
                cupos: 38,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E70" }
                ]
            },
            {
                id: "11",
                cupos: 40,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            },
            {
                id: "12",
                cupos: 39,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E50" }
                ]
            },
            {
                id: "13",
                cupos: 40,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C23" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C23" }
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
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "2",
                cupos: 40,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            },
            {
                id: "3",
                cupos: 39,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "4",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "5",
                cupos: 38,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            },
            {
                id: "6",
                cupos: 38,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            },
            {
                id: "7",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-A32" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-A32" }
                ]
            },
            {
                id: "8",
                cupos: 40,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A33" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A33" }
                ]
            },
            {
                id: "9",
                cupos: 40,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-A41" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-A41" }
                ]
            }
        ]
    },
    {
        sigla: "EHC014",
        nombre: "E. CIUDADANÍA, PARTICIPACIÓN Y REALIDAD SOCIAL (CFG-PLAN B)",
        secciones: [
            {
                id: "10",
                cupos: 38,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            },
            {
                id: "12",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            },
            {
                id: "13",
                cupos: 37,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D01" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D01" }
                ]
            }
        ]
    },
    {
        sigla: "EHC015",
        nombre: "E. LO ESPIRITUAL EN EL ARTE",
        secciones: [
            {
                id: "1",
                cupos: 38,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            },
            {
                id: "5",
                cupos: 36,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E81" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E81" }
                ]
            }
        ]
    },
    {
        sigla: "EHC022",
        nombre: "E. BIOÉTICA, DEMOCRACIA Y ECOLOGÍA HUMANA",
        secciones: [
            {
                id: "4",
                cupos: 39,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E71" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E71" }
                ]
            }
        ]
    },
    {
        sigla: "EHC024",
        nombre: "E.LA HISTORIA DEL ARTE Y SUS HITOS",
        secciones: [
            {
                id: "6",
                cupos: 31,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA / VIRTUAL", sala: "Casa Central-TER" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA / VIRTUAL", sala: "Casa Central-TER" }
                ]
            }
        ]
    },
    {
        sigla: "EHC027",
        nombre: "E. ARTE, CULTURA Y POLÍTICA",
        secciones: [
            {
                id: "3",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "9",
                cupos: 35,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            }
        ]
    },
    {
        sigla: "EHC036",
        nombre: "E. DERECHOS HUMANOS Y GÉNERO",
        secciones: [
            {
                id: "2",
                cupos: 36,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            },
            {
                id: "7",
                cupos: 33,
                horario: [
                    { dia: "Lunes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "San Isidro-I10" },
                    { dia: "Miércoles", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            }
        ]
    },
    {
        sigla: "EHC037",
        nombre: "E. MEMORIAS, DEMOCRACIAS Y DERECHO HUMANOS. APROXIMACIONES INTERDISCIPLINARIAS",
        secciones: [
            {
                id: "8",
                cupos: 39,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA / VIRTUAL", sala: "Casa Central-TER" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA / VIRTUAL", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "11",
                cupos: 36,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA / VIRTUAL", sala: "Casa Central-TER" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA / VIRTUAL", sala: "Casa Central-TER" }
                ]
            },
            {
                id: "14",
                cupos: 39,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-C31" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-C31" }
                ]
            }
        ]
    },
    {
        sigla: "EHI013",
        nombre: "E. EL RECONOCIMIENTO DEL OTRO. TEOLOGÍA Y SOCIEDAD (CFG-PLAN B)",
        secciones: [
            {
                id: "9",
                cupos: 40,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E72" }
                ]
            }
        ]
    },
    {
        sigla: "EHI014",
        nombre: "E. CONVIVENCIA SOCIAL Y DIGNIDAD HUMANA: REFLEXIONES SOCIALES, ANTROPOLÓGICAS Y TEOLÓGICAS",
        secciones: [
            {
                id: "2",
                cupos: 32,
                horario: [
                    { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E60" },
                    { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E60" }
                ]
            },
            {
                id: "16",
                cupos: 38,
                horario: [
                    { dia: "Sábado", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Casa Central-D10" },
                    { dia: "Sábado", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D10" }
                ]
            }
        ]
    },
    {
        sigla: "EHI024",
        nombre: "E. RELIGIONES, CIUDADANÍA Y ESPACIO PÚBLICO",
        secciones: [
            {
                id: "15",
                cupos: 36,
                horario: [
                    { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            }
        ]
    },
    {
        sigla: "EHI026",
        nombre: "E. MIGRACIÓN Y MOVILIDAD HUMANA: DERECHOS HUMANOS, JUSTICIA Y SOLIDARIDAD.",
        secciones: [
            {
                id: "8",
                cupos: 25,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E52" }
                ]
            },
            {
                id: "12",
                cupos: 38,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
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
                cupos: 32,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E70" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E70" }
                ]
            },
            {
                id: "11",
                cupos: 30,
                horario: [
                    { dia: "Viernes", inicio: "11:30", fin: "12:50", tipo: "CÁTEDRA", sala: "Carmen 350-E72" },
                    { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA", sala: "Carmen 350-E72" }
                ]
            }
        ]
    },
    {
        sigla: "EHI031",
        nombre: "E. EL TRABAJO HUMANO COMO FUENTE DE LA DIGNIDAD DE LA PERSONA HUMANA",
        secciones: [
            {
                id: "3",
                cupos: 39,
                horario: [
                    { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E82" },
                    { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E82" }
                ]
            },
            {
                id: "4",
                cupos: 38,
                horario: [
                    { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E50" }
                ]
            }
        ]
    },
    {
        sigla: "EHI035",
        nombre: "E. CINE Y TEOLOGÍA: APRENDER A VER Y ENTREVER.",
        secciones: [
            {
                id: "1",
                cupos: 26,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E51" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E51" }
                ]
            },
            {
                id: "7",
                cupos: 35,
                horario: [
                    { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Carmen 350-E61" },
                    { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Carmen 350-E61" }
                ]
            }
        ]
    },
    {
        sigla: "EHI036",
        nombre: "E. DERECHOS HUMANOS Y PENSAMIENTO SOCIAL CRISTIANO EN LOS CONTEXTOS ACTUALES.",
        secciones: [
            {
                id: "5",
                cupos: 37,
                horario: [
                    { dia: "Viernes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E62" },
                    { dia: "Viernes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E62" }
                ]
            },
            {
                id: "14",
                cupos: 34,
                horario: [
                    { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA", sala: "Casa Central-D41" },
                    { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA", sala: "Casa Central-D41" }
                ]
            }
        ]
    },
    {
        sigla: "EHI039",
        nombre: "E. BUENOS TRATOS Y CONSTRUCCIÓN DE AMBIENTES SANOS.",
        secciones: [
            {
                id: "6",
                cupos: 34,
                horario: [
                    { dia: "Martes", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Carmen 350-E42" },
                    { dia: "Jueves", inicio: "10:00", fin: "11:20", tipo: "CÁTEDRA", sala: "Casa Central-D31" }
                ]
            },
            {
                id: "13",
                cupos: 31,
                horario: [
                    { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E50" },
                    { dia: "Miércoles", inicio: "08:30", fin: "09:50", tipo: "CÁTEDRA", sala: "Carmen 350-E42" }
                ]
            }
        ]
    }
];
