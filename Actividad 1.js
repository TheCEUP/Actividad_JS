const pesos = [35, 42, 56, 61, 48, 52, 58, 39, 43, 63, 38];
let menosDe40 = 0;
let entre40y50 = 0;
let entre50y60 = 0;
let masDe60 = 0;
for (let i = 0; i < pesos.length; i++) {
    if (pesos[i] < 40) {
      menosDe40++;
    } else if (pesos[i] >= 40 && pesos[i] < 50) {
      entre40y50++;
    } else if (pesos[i] >= 50 && pesos[i] < 60) {
      entre50y60++;
    } else {
      masDe60++;
    }
  }
console.log(`Alumnos de menos de 40 kg: ${menosDe40}`);
console.log(`Alumnos entre 40 y 50 kg: ${entre40y50}`);
console.log(`Alumnos entre 50 y 60 kg: ${entre50y60}`);
console.log(`Alumnos de mas de 60 kg: ${masDe60}`);