let n = 3; // número de tarjetas de datos a leer
let estudiantes = []; // arreglo para almacenar los datos de los estudiantes
let sumaMatematicas = 0;
let sumaFisica = 0;
let sumaProgramacion = 0;
let aprobadosMatematicas = 0;
let aprobadosFisica = 0;
let aprobadosProgramacion = 0;
let aplazadosMatematicas = 0;
let aplazadosFisica = 0;
let aplazadosProgramacion = 0;5
let aprobadosTodas = 0;
let aprobadosUnaSola = 0;
let aprobadosDosMaterias = 0;
let notaMaximaMatematicas = 0;
let notaMaximaFisica = 0;
let notaMaximaProgramacion = 0;
for (let i = 0; i < n; i++) {
    let estudiante = {};
    estudiante.cedula = prompt(`Ingrese la cédula del estudiante ${i+1}:`);
    estudiante.nombre = prompt(`Ingrese el nombre del estudiante ${i+1}:`);
    estudiante.notaMatematicas = parseFloat(prompt(`Ingrese la nota de Matemáticas del estudiante ${i+1}:`));
    estudiante.notaFisica = parseFloat(prompt(`Ingrese la nota de Física del estudiante ${i+1}:`));
    estudiante.notaProgramacion = parseFloat(prompt(`Ingrese la nota de Programación del estudiante ${i+1}:`));
    estudiantes.push(estudiante);
  }
  estudiantes.forEach(estudiante => {
    let promedio = (estudiante.notaMatematicas + estudiante.notaFisica + estudiante.notaProgramacion) / 3;
    if (promedio >= 3.0) {
      aprobadosTodas++;
    }
    let aprobadas = 0;
    if (estudiante.notaMatematicas >= 3.0) {
      aprobadosMatematicas++;
      aprobadas++;
    } else {
      aplazadosMatematicas++;
    }
    if (estudiante.notaFisica >= 3.0) {
      aprobadosFisica++;
      aprobadas++;
    } else {
      aplazadosFisica++;
    }
    if (estudiante.notaProgramacion >= 3.0) {
      aprobadosProgramacion++;
      aprobadas++;
    } else {
      aplazadosProgramacion++;
    }
    if (aprobadas === 3) {
      aprobadosTodas++;
    } else if (aprobadas === 1) {
      aprobadosUnaSola++;
    } else if (aprobadas === 2) {
      aprobadosDosMaterias++;
    }
    sumaMatematicas += estudiante.notaMatematicas;
    sumaFisica += estudiante.notaFisica;
    sumaProgramacion += estudiante.notaProgramacion;
    if (estudiante.notaMatematicas > notaMaximaMatematicas) {
      notaMaximaMatematicas = estudiante.notaMatematicas;
    }
    if (estudiante.notaFisica > notaMaximaFisica) {
      notaMaximaFisica = estudiante.notaFisica;
    }
    if (estudiante.notaProgramacion > notaMaximaProgramacion) {
      notaMaximaProgramacion = estudiante.notaProgramacion;
    }
  });
  
  let promedioMatematicas = sumaMatematicas / n;
  let promedioFisica = sumaFisica / n;
  let promedioProgramacion = sumaProgramacion / n;
  console.log(`Promedio de Matemáticas: ${promedioMatematicas.toFixed(2)}`);
console.log(`Promedio de Física: ${promedioFisica.toFixed(2)}`);
console.log(`Promedio de Programación: ${promedioProgramacion.toFixed(2)}`);
console.log(`Número de aprobados en Matemáticas: ${aprobadosMatematicas}`);
console.log(`Número de aprobados en Física: ${aprobadosFisica}`);
console.log(`Número de aprobados en Programación: ${aprobadosProgramacion}`);