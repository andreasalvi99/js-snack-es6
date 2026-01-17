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

function generateRandomFouls() {
  const randomFouls = Math.floor(Math.random() * 20) + 1;
  return randomFouls;
}

//  ?? Scrivo una funzione per generare numeri random per i punti fatti

function generateRandomPoints() {
  const randomPoints = Math.floor(Math.random() * 50) + 15;
  return randomPoints;
}

// ?? Utilizzo le funzioni in un ciclo per assegnare a ogni squadra punti e falli

for (let i = 0; i < teams.length; i++) {
  const currentTeam = teams[i];
  currentTeam.points = generateRandomPoints();
  currentTeam.fouls = generateRandomFouls();
}
console.table(teams);

// ?? Genero un nuovo array che contenga solamente nomi e falli

const teamsCompressed = [];

for (let i = 0; i < teams.length; i++) {
  const currentTeam = teams[i];
  console.log(currentTeam);

  const newObject = {
    name: currentTeam.name,
    fouls: currentTeam.fouls,
  };

  teamsCompressed.push(newObject);
}

console.table(teamsCompressed);
