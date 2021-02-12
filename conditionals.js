
const temperature = 50;

if (temperature < 0 && temperature > -40) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15 && temperature > 0) { 
  console.log("Short sleeves won't cut it!");
} else if (temperature < -40 || temperature > 40) {
  console.log("Actually maybe let's not go outside");
} else {
console.log("Short sleeves are fine.");
}

