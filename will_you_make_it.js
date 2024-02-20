const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg*fuelLeft;


console.log(zeroFuel(100, 50, 1));