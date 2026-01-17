//  ?? Creo un array di biciclette specificando nome e peso in kg

const bikes = [
  { nome: "Bianchi Oltre XR4", peso: 6.8 },
  { nome: "Trek Emonda SLR", peso: 6.6 },
  { nome: "Specialized Tarmac SL7", peso: 6.7 },
  { nome: "Pinarello Dogma F", peso: 6.9 },
  { nome: "Cannondale SuperSix EVO", peso: 6.5 },
];

console.table(bikes);

let lighterBikeName = "Bianchi Oltre XR4";
let lighterBikeWeight = 6.8;

for (let i = 1; i < bikes.length; i++) {
  const currentBike = bikes[i];
  console.log("currentBike.peso:", currentBike.peso);

  if (currentBike.peso < lighterBikeWeight) {
    lighterBikeName = currentBike.nome;
    lighterBikeWeight = currentBike.peso;
  }
}

console.log(
  `La bici che pesa meno di tutte è ${lighterBikeName}, peso ${lighterBikeWeight} kg`,
);
