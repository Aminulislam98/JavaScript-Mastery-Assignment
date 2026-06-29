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

// Assignment: The switch Statement

let languageTest = "Mandarin".toLowerCase();

switch (languageTest) {
  case "Bangladesh".toLowerCase():
    console.log("One of the nice language ever!");
    break;
  case "Chinese".toLowerCase():
  case "Mandarin".toLowerCase():
    console.log("MOST number of native speakers!");
    break;
  case "Spanish".toLowerCase():
    console.log("2nd place of number of native speakers.");
    break;
  case "English".toLowerCase():
    console.log("3rd Place.");
    break;
  case "Hindi".toLowerCase():
    console.log("Number 4");
    break;
  case "Arabic".toLowerCase():
    console.log("5th most spoken language");
    break;
  default:
    console.log("Grate Language too :D");
}

// Assignment: The Conditional (Ternary) Operator
country > 30
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

console.log("------------- JavaScript Fundamentals — Part 2 ------------");

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`,
  );
}

// console.log(describeCountry("Bangladesh", 16, "Dhaka"));
// Assignment: Function Declarations vs. Expressions
function percentageOfWorld1(populationYourCountry) {
  const worldPopulation = 7900;
  return (populationYourCountry / worldPopulation) * 100;
}
const output = percentageOfWorld1(1441);
console.log(output.toFixed(2));

// Assignment: Arrow Functions
const percentageOfWorld3 = (pYc) => (pYc / 7900) * 100;
const output1 = percentageOfWorld3(1441);
console.log(output1.toFixed(2));

// Assignment: Functions Calling Other Functions
function describePopulation(country1, population2) {
  const calPopulation = percentageOfWorld3(population2);
  return `${country1} has ${population2} Million people, which is about ${calPopulation.toFixed(2)} of the world`;
}
console.log(describePopulation("Bangladesh", 16));

// Assignment: Introduction to Arrays
const populations = [16, 32, 23, 45];
if (populations.length === 4) {
  console.log("Yes the length is", populations.length);
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// Assignment: Basic Array Operations (Methods)
const neighbors = ["India", "Pakistan", "Nepal", "Srilanka"];
neighbors.push("Utopia");
neighbors.pop();
console.log(neighbors);
if (!neighbors.includes("Germany")) {
  console.log(`Germany not a central european country :D`);
}
neighbors[neighbors.indexOf("Pakistan")] = "United Kingdom";
console.log(neighbors);

// Assignment: Introduction to Objects
const myCountry = {
  country: "Bangladesh",
  population: 16,
  capital: "Dhaka",
  language: "Bengali",
  neighbors: ["India", "Srilanka", "United Kingdom", "Nepal"],
};

// Assignment: Dot vs. Bracket Notation
const outputOfDBN = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}`;
console.log(outputOfDBN);

console.log(myCountry);
myCountry.population = myCountry.population + 2;
console.log(myCountry);
myCountry["population"] = myCountry["population"] - 10;
console.log(myCountry);
console.log(myCountry[country]);
