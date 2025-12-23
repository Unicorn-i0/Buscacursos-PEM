const datosCursos = [
  {
    sigla: "OPM037",
    nombre: "O. TECNOLOGÍAS TRIDIMENSIONALES Y REALIDAD VIRTUAL",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
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
        horario: [
          { dia: "Sábado", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
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
        horario: [
          { dia: "Sábado", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" }
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
        horario: [
          { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "AYUDANTÍA" }
        ]
      }
    ]
  },
  {
    sigla: "PEM102",
    nombre: "DESARROLLO DEL PENSAMIENTO GEOMÉTRICO Y ESTADÍSTICO",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "10:15", fin: "11:35", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Martes", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA" }
        ]
      }
    ]
  },
  {
    sigla: "PEM103",
    nombre: "DESARROLLO DEL PENSAMIENTO MATEMÁTICO: INTRODUCCIÓN AL CÁLCULO",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA" }
        ]
      }
    ]
  },
  {
    sigla: "EHI018",
    nombre: "E. CONOCIMIENTO DE SÍ Y VÍNCULOS SALUDABLES EN LA COMUNIDAD EDUCATIVA",
    secciones: [
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      }
    ]
  },
  {
    sigla: "EHI021",
    nombre: "E. MUJERES EN LA HISTORIA: IDENTIDAD, CULTURA Y POLÍTICA",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "4",
        horario: [
          { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      }
    ]
  },
  {
    sigla: "EHI022",
    nombre: "E. EL BUEN VIVIR Y EL CUIDADO DE LA CREACIÓN",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "4",
        horario: [
          { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      }
    ]
  },
  {
    sigla: "EHI030",
    nombre: "E. CUIDADO DEL CUERPO Y ESPIRITUALIDAD.",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "4",
        horario: [
          { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      }
    ]
  },
  {
    sigla: "EHI031",
    nombre: "E. EL TRABAJO HUMANO COMO FUENTE DE LA DIGNIDAD DE LA PERSONA HUMANA",
    secciones: [
      {
        id: "4",
        horario: [
          { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
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
        horario: [
          { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "7",
        horario: [
          { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      }
    ]
  },
  {
    sigla: "EHI036",
    nombre: "E. DERECHOS HUMANOS Y PENSAMIENTO SOCIAL CRISTIANO EN LOS CONTEXTOS DE CRISIS.",
    secciones: [
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "4",
        horario: [
          { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "7",
        horario: [
          { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      }
    ]
  },
  {
    sigla: "EHI037",
    nombre: "E. ECOLOGÍA: VISIÓN CRISTIANA Y DESAFÍOS CONTEMPORÁNEOS.",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Lunes", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      }
    ]
  },
  {
    sigla: "EHI038",
    nombre: "E. CONCIENCIA AMBIENTAL, CIENCIA Y FE.",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      }
    ]
  },
  {
    sigla: "EHI039",
    nombre: "E. PERSONA Y VOCACIÓN: EL DESCUBRIMIENTO DE SÍ MISMO Y DE UN PROYECTO DE VIDA.",
    secciones: [
      {
        id: "2",
        horario: [
          { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "4",
        horario: [
          { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      },
      {
        id: "5",
        horario: [
          { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "14:30", fin: "15:50", tipo: "CÁTEDRA" }
        ]
      }
    ]
  },
  {
    sigla: "INF301",
    nombre: "ANÁLISIS DE SISTEMAS DE INFORMACIÓN",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "10:15", fin: "11:35", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA" }
        ]
      }
    ]
  },
  {
    sigla: "INF303",
    nombre: "BASE DE DATOS",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "10:15", fin: "11:35", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "10:15", fin: "11:35", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "4",
        horario: [
          { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "14:30", fin: "15:50", tipo: "AYUDANTÍA" }
        ]
      }
    ]
  },
  {
    sigla: "INF305",
    nombre: "FUNDAMENTOS DE SISTEMAS OPERATIVOS",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA" }
        ]
      }
    ]
  },
  {
    sigla: "INF401",
    nombre: "INGENIERÍA DE SOFTWARE",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "AYUDANTÍA" }
        ]
      }
    ]
  },
  {
    sigla: "INF403",
    nombre: "REDES DE COMUNICACIONES",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "16:50", fin: "18:10", tipo: "AYUDANTÍA" }
        ]
      }
    ]
  },
  {
    sigla: "INF405",
    nombre: "COMPUTACIÓN MÓVIL Y UBIQUA",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "14:30", fin: "15:50", tipo: "AYUDANTÍA" }
        ]
      }
    ]
  },
  {
    sigla: "MAT202",
    nombre: "ÁLGEBRA AVANZADA",
    secciones: [
      {
        id: "1",
        horario: [
          { dia: "Lunes", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "2",
        horario: [
          { dia: "Martes", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "10:15", fin: "11:35", tipo: "CÁTEDRA" },
          { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "3",
        horario: [
          { dia: "Lunes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "4",
        horario: [
          { dia: "Martes", inicio: "13:00", fin: "14:20", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "15:20", fin: "16:40", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "5",
        horario: [
          { dia: "Lunes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Miércoles", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Viernes", inicio: "10:15", fin: "11:35", tipo: "AYUDANTÍA" }
        ]
      },
      {
        id: "6",
        horario: [
          { dia: "Martes", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          { dia: "Jueves", inicio: "16:50", fin: "18:10", tipo: "CÁTEDRA" },
          // Nota: El horario 11:45-13:05 no es un bloque común, se incluirá tal cual.
          { dia: "Viernes", inicio: "11:45", fin: "13:05", tipo: "AYUDANTÍA" } 
        ]
      }
    ]
  }
];
