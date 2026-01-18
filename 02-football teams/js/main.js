//  ?? Creo un array di squadre di calcio, ognuna parte con 0 punti e 0 falli a favore

const teams = [
  { name: "Juventus", points: 0, fouls: 0 },
  { name: "Inter", points: 0, fouls: 0 },
  { name: "Milan", points: 0, fouls: 0 },
  { name: "Napoli", points: 0, fouls: 0 },
  { name: "Roma", points: 0, fouls: 0 },
  { name: "Lazio", points: 0, fouls: 0 },
  { name: "Atalanta", points: 0, fouls: 0 },
  { name: "Fiorentina", points: 0, fouls: 0 },
  { name: "Torino", points: 0, fouls: 0 },
  { name: "Bologna", points: 0, fouls: 0 },
  { name: "Udinese", points: 0, fouls: 0 },
  { name: "Sassuolo", points: 0, fouls: 0 },
  { name: "Genoa", points: 0, fouls: 0 },
  { name: "Cagliari", points: 0, fouls: 0 },
  { name: "Verona", points: 0, fouls: 0 },
];

console.table(teams);

//  ?? Scrivo una funzione per generare numeri random per i falli subiti

const generateRandomFouls = () => Math.floor(Math.random() * 20) + 1;

//  ?? Scrivo una funzione per generare numeri random per i punti fatti

const generateRandomPoints = () => Math.floor(Math.random() * 50) + 15;

// ?? Utilizzo le funzioni in un ciclo per assegnare a ogni squadra punti e falli

for (const team of teams) {
  team.points = generateRandomPoints();
  team.fouls = generateRandomFouls();
}
console.table(teams);

// ?? Genero un nuovo array che contenga solamente nomi e falli

const teamsCompressed = [];

for (const team of teams) {
  console.log(team);

  const newObject = {
    name: team.name,
    fouls: team.fouls,
  };

  teamsCompressed.push(newObject);
}

console.table(teamsCompressed);
