"use strict";
// Assignment: Values and Variables
const country = "Bangladesh";
const continent = "Asia";
let population = 16;
console.log("Country Name:", country);
console.log("Continent:", continent);
// console.log("Population:", population);

// Assignment: Data Types
const isIsland = false;
let language = "Bengali";

console.log(
  typeof country,
  typeof continent,
  typeof population,
  typeof isIsland,
  typeof language,
);

// 1 If your country split in half, and each half would contain half the population, then how many people would live in each half?
const halfPopulation = population / 2;

// 2 Increase the population of your country by 1 and log the result to the console.
population += 1;
console.log(population);

// 3 Finland has a population of 6 million. Does your country have more people than Finland?

let finlandPopulation = 3;

finlandPopulation > population
  ? console.log("Finland has more population than My country!")
  : console.log("My country has got more population than Finland :D");

//   The average population of a country is 33 million people. Does you country have less people than the average country?

let averagePopulation = 33;
averagePopulation > population ? console.log("No") : console.log("Yes");

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

const summeryMyCountry = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(summeryMyCountry);

// Taking Decisions: if / else Statements;
if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${averagePopulation - population} million below average`,
  );
}

// Assignment Equality Operators: == vs. ===
const numNeighbor = Number();
// prompt("How many neighbor countries does your country have ?"),
if (numNeighbor == 1) {
  console.log("Only 1 border!");
} else if (numNeighbor > 1) {
  console.log("More than one border.");
} else {
  console.log("No borders");
}

// Assignment: Logical Operators

if (language == "Bengali" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria `);
}
