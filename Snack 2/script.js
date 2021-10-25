const arrayTeam = [
  {
    name: "Chelsea",
    points: "0",
    fouls: "0"
  },
  {
    name: "Liverpool",
    points: "0",
    fouls: "0"
  },
  {
    name: "Manchester",
    points: "0",
    fouls: "0"
  },
  {
    name: "Real Madrid",
    points: "0",
    fouls: "0"
  }
];


function generateRandom(numeroMin, numeroMax) {
  return Math.floor(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);
};


function generateFouls(arrayTeam) {
  for (let i = 0; i < arrayTeam.length; i++) {
    const singleTeam = arrayTeam[i];
    
    singleTeam.fouls = generateRandom(60, 200);
  }
};
generateFouls(arrayTeam);



function newArrayTeam(arrayTeam) {
  const arrayFoulsTeam = [];
  
  for (let i = 0; i < arrayTeam.length; i++) {
    const singleTeam = arrayTeam[i];
    
    // Destructuring
    const {name, fouls} = singleTeam;
    const nameFoulsTeam = {name, fouls};

    arrayFoulsTeam.push(nameFoulsTeam);
    
    console.log(`Squadra: ${name}, Falli: ${fouls}`);
  }

  console.log("Array completo",arrayFoulsTeam);
};
newArrayTeam(arrayTeam);

