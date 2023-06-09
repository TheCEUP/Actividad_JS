let montoInicial = 0; // El monto inicial se ingresa en enero, en este caso se asume que es 0
let ingresoMensual = 250; // cada mes se ingresan $250
let interesMensual = 0.0125; // el interés mensual es del 1.25%
let meses = 12; // se calcula el interés a fin de año, es decir, en 12 meses
let saldoTotal = montoInicial;
for (let i = 1; i <= meses; i++) {
    saldoTotal += ingresoMensual;
    saldoTotal += saldoTotal * interesMensual;
  }
  console.log(`El saldo total al final de los ${meses} meses es de $${saldoTotal.toFixed(2)}.`);