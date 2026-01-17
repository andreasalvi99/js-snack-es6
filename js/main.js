//  ?? Creo un array di biciclette specificando nome e peso in kg

const bikes = [
  { nome: "Bianchi Oltre XR4", peso: 6.8 },
  { nome: "Trek Emonda SLR", peso: 6.6 },
  { nome: "Specialized Tarmac SL7", peso: 6.7 },
  { nome: "Pinarello Dogma F", peso: 6.9 },
  { nome: "Cannondale SuperSix EVO", peso: 6.5 },
];

console.table("bikes:", bikes);

for (let i = 0; i < bikes.length; i++) {
  const currentBike = bikes[i];
  console.log("currentBike:", currentBike);

  if (currentBike.peso < bikes.peso) {
    console.log(currentBike);
  }
}
