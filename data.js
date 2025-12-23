const datosCursos = [
  {
    sigla: "INF101",
    nombre: "Introducción a la Programación",
    secciones: [
      {
        id: "S1",
        horario: [
          // Clase dura 80 minutos: 08:30 a 09:50
          { dia: "Lunes", inicio: "08:30", fin: "09:50", tipo: "Cátedra" }, 
          // Ayudantía dura 80 minutos: 16:00 a 17:20
          { dia: "Miércoles", inicio: "16:00", fin: "17:20", tipo: "Ayudantía" } 
        ]
      },
      {
        id: "S2",
        horario: [
          // Clase dura 80 minutos: 10:15 a 11:35
          { dia: "Martes", inicio: "10:15", fin: "11:35", tipo: "Cátedra" }, 
          // Ayudantía dura 80 minutos: 14:30 a 15:50
          { dia: "Jueves", inicio: "14:30", fin: "15:50", tipo: "Ayudantía" }
        ]
      }
    ]
  },
  {
    sigla: "MAT202",
    nombre: "Álgebra Avanzada",
    secciones: [
      {
        id: "S3",
        horario: [
          // Clases duran 80 minutos
          { dia: "Lunes", inicio: "10:15", fin: "11:35", tipo: "Cátedra" }, 
          { dia: "Miércoles", inicio: "10:15", fin: "11:35", tipo: "Cátedra" }
        ]
      },
      {
        id: "S4",
        horario: [
          // Clases duran 80 minutos
          { dia: "Martes", inicio: "08:30", fin: "09:50", tipo: "Cátedra" }, 
          { dia: "Jueves", inicio: "08:30", fin: "09:50", tipo: "Cátedra" }
        ]
      }
    ]
  },
  {
    sigla: "INF303",
    nombre: "Bases de Datos",
    secciones: [
      {
        id: "S1",
        horario: [
          // Clase dura 80 minutos: 14:30 a 15:50
          { dia: "Miércoles", inicio: "14:30", fin: "15:50", tipo: "Cátedra" }, 
          // Ayudantía dura 80 minutos: 10:15 a 11:35
          { dia: "Viernes", inicio: "10:15", fin: "11:35", tipo: "Ayudantía" }
        ]
      }
    ]
  }
];
