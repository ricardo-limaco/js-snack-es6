const arrayBikes = [
  {
    name: "Mountain bike",
    weight: 20
  },
  {
    name: "City bike",
    weight: 25
  },
  {
    name: "Bici da corsa",
    weight: 10
  },
  {
    name: "E-bike",
    weight: 30
  }
];




let lightweight = arrayBikes[0];

for (let i = 0; i < arrayBikes.length; i++) {
  const singleBike = arrayBikes[i];

  // Destructuring
  const {name} = singleBike;
  const {weight} = singleBike;
  console.log("Info bici:",name, weight); // Prova info bici

  if (weight < lightweight.weight) {
    lightweight = singleBike;
  }

}

console.log(`Bici più leggera: ${lightweight.name} ${lightweight.weight}Kg`)