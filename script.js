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
  describe: function () {
    let result = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}`;
    return result;
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
  },
};

// Assignment: Dot vs. Bracket Notation
const outputOfDBN = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}`;
console.log(outputOfDBN);

console.log(myCountry);
myCountry.population = myCountry.population + 2;
console.log(myCountry);
myCountry["population"] = myCountry["population"] - 10;
console.log(myCountry);
// console.log(myCountry[country]);

// Assignment: Object Methods
const as = myCountry.describe();
console.log(as);
myCountry.checkIsland();
console.log(myCountry);

// Assignment: Iteration: The for Loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting....`);
}

// Assignment: Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const prr = percentageOfWorld1(populations[i]);
  percentages2.push(prr);
}
console.log(percentages2);

// Assignment: Looping Backwards and Loops in Loops
const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  const firstN = listOfNeighbors[i];
  if (firstN.length > 1) {
    for (let fi = 0; fi < firstN.length; fi++) {
      console.log(`Neighbor: ${firstN[fi]}`);
    }
  } else {
    console.log(`Neighbor: ${listOfNeighbors[i]}`);
  }
}

// Assignment: The while Loop

const percentages3 = [];
let i = 0;

while (i < populations.length) {
  percentages3.push(percentageOfWorld1(i));
  i++;
}
console.log(percentages3);

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// assignment: 1.1
const [first, second] = books;
console.log(first, second);

// assignment: 1.2
const [, , third] = books;
console.log(third);

// assignment: 1.3
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];
const [rating, ratingsCount] = ratings;
console.log(rating, ratingsCount);

// assignment: 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRating = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRating);

// Assignment: 2.1
const { title, author, ISBN } = first;
console.log(title, author, ISBN);

// Assignment: 2.2
const tags = first.keywords;
console.log(tags);

// Assignment: 2.3
const { language: language1, programmingLanguage = "unknown" } = books[6];
console.log(language1, programmingLanguage);

// Assignment: 2.4
let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);

console.log(bookTitle, bookAuthor);

// Assignment: 2.5
const {
  thirdParty: {
    goodreads: { rating: rating2 },
  },
} = books[0];
console.log(rating2);

// Assignment: 2.6
const printBookInfo = function ({ title, author, year = "unknown" }) {
  return `${title} by ${author}, ${year}`;
};
console.log(
  printBookInfo({
    title: "Algorithms",
    author: "Robert Sedgewick",
    year: "2011",
  }),
);
const newLocal = "Robert Sedgewick";
console.log(printBookInfo({ title: "Algorithms", author: newLocal }));

// Assignment: 3.1
const booksAuthors = [...first.author, ...second.author];
console.log(booksAuthors);

// The Spread Operator 3.2
const spellWord = function (str) {
  console.log(...str);
};

spellWord("JavaScript");

// Assignment: Rest Pattern and Parameters 4.1
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

// Assignment: Rest Pattern and Parameters 4.3
const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

// Assignment: Rest Pattern and Parameters 5.1
const hasExamplesInJava = function (book) {
  return book.programmingLanguage === "Java" || "No data available";
};

console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[1]));

// Assignment: Rest Pattern and Parameters 5.2

for (const { title, onlineContent } of books) {
  onlineContent && console.log(`${title} provides online content`);
}

// The Nullish Coalescing Operator (??) 6.1

for (const { title, onlineContent } of books) {
  onlineContent ??
    console.log(`${title} provides no data about its online content`);
}

// Assignment Logical Assignments Operators 7.1
for (const [i, book] of books.entries()) {
  book.edition ??= 1;
}
console.log(books[5].edition);
console.log(books[6].edition);

// Looping Arrays: The for-of Loop 8.1
let pageSum = 0;
for (const { pages } of books) {
  pageSum += pages;
}
console.log(pageSum);

// Looping Arrays: The for-of Loop 8.2
const allAuthors = [];
for (const { author } of books) {
  if (typeof author !== "string") {
    for (const eachAuthor of author) {
      allAuthors.push(eachAuthor);
    }
  } else {
    allAuthors.push(author);
  }
}
console.log(allAuthors);

// Looping Arrays: The for-of Loop 8.3
for (const [i, eachAuthor] of allAuthors.entries()) {
  console.log(`${i + 1} ${eachAuthor}`);
}
// Assignment: Enhanced Object Literals 9.1
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

// Assignment: Enhanced Object Literals 9.2
const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};

// Assignment: Optional Chaining (?.) 10.1
const getFirstKeyword = function (book) {
  // console.log(book?.keywords?.[0]);
};
getFirstKeyword(books[10]);

// Assignment: Looping Objects: Object Keys, Values and Entries 11.1
const entries = [];

console.log("__________________________AB_________________________");

for (const b of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([b]);
}
// console.log(entries);

// Assignment: Looping Objects: Object Keys, Values and Entries 11.2
for (const [index, value] of Object.entries(
  books[0].thirdParty.goodreads,
).entries()) {
  entries[index].push(value);
}
console.log(entries);

//  Assignment: Looping Objects: Object Keys, Values and Entries 12.1
const entries2 = Object.entries(books[0].thirdParty.goodreads);

// Assignment: sets 12.1
// const allKeywords = [];
// for (const { keywords } of books) {
//   for (const keyword of keywords) {
//     console.log(keyword);
//     allKeywords.push(keyword);
//   }
// }
// console.log(allKeywords);

const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

// Assignment: Looping Objects: Object Keys, Values and Entries 12.2
const uniqueKeywords = new Set(allKeywords);

// Assignment: Looping Objects: Object Keys, Values and Entries 12.3
console.log(uniqueKeywords);
uniqueKeywords.add("coding");
uniqueKeywords.add("science");

console.log(uniqueKeywords);
// Assignment: Looping Objects: Object Keys, Values and Entries 12.4
uniqueKeywords.delete("business");
console.log(uniqueKeywords);

// Assignment: Looping Objects: Object Keys, Values and Entries 12.5
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// Assignment: Looping Objects: Object Keys, Values and Entries 12.6
uniqueKeywords.clear();
console.log(uniqueKeywords);

// Assignment: Maps: Fundamentals 13.1
const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);

// Assignment: Maps: Fundamentals 13.2

bookMap.set("pages", 464);
console.log(bookMap);

// Assignment: Maps: Fundamentals 13.3

console.log(bookMap.get("title"), "by", bookMap.get("author"));

// Assignment: Maps: Fundamentals 13.4
console.log(bookMap.size);

// Assignment: Maps: Fundamentals 13.5

if (bookMap.has("author")) {
  console.log("The author of the book is known");
}

// Maps: Iteration 14.1
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

// Maps: Iteration 14.2
for (const [key, value] of firstBookMap) {
  if (typeof value === "number") {
    console.log(value);
  }
}

// Assignment: Working with Strings - Part 1: 15.1
console.log(books[0].ISBN[6]);
console.log(books[0].ISBN[4]);
console.log(books[0].ISBN[9]);
console.log(books[0].ISBN[8]);

// Assignment: Working with Strings - Part 1: 15.2
const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";
console.log(quote.indexOf("chess"));

// Assignment: Working with Strings - Part 1: 15.3
console.log(quote.slice(-6));
console.log(quote.slice(quote.lastIndexOf(" ") + 1));

// Assignment: Working with Strings - Part 1: 15.4
const isContributor = function (authorName) {
  if (authorName.includes("Contributor")) {
    return true;
  }
  return false;
};
console.log(isContributor("Julie Sussman (Contributor)"));
console.log(isContributor("Robert Sedgewick"));

// Assignment: Working with Strings - Part 2: 16.1
const normalizeAuthorName = function (authorName) {
  authorName = authorName.trim();
  const firstName = authorName.slice(0, authorName.indexOf(" "));
  let lastName = "";
  if (authorName.indexOf(" ") === authorName.lastIndexOf(" ")) {
    lastName = authorName.slice(authorName.indexOf(" ") + 1, authorName.length);
  } else {
    lastName = authorName.slice(
      authorName.indexOf(" ") + 1,
      authorName.lastIndexOf(" "),
    );
  }
  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  return capitalizedFirstName + " " + capitalizedLastName;
};
console.log(normalizeAuthorName("  JuliE sussMan (Contributor)"));

// Assignment: Working with Strings - Part 2: 16.2
const newBookTitle = books[1].title.replace("Programs", "Software");
console.log(newBookTitle);

// Assignment: Working with Strings - Part 2: 16.3
const logBookTheme = function (title) {
  if (title.startsWith("computer")) {
    console.log("This book is about computers");
  } else if (title.startsWith("computer") || title.startsWith(structures)) {
    console.log("This book is about algorithms and data structures");
  } else if (title.endsWith("system") || title.endsWith("systems")) {
    console.log(
      "This book is about some systems, but definitely not about operating systems",
    );
  }
};
logBookTheme("computer is most important");

// Assignment: Working with Strings - Part 3 17.1
const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

const logBookCategories = function (bookCategories) {
  const book = bookCategories.split(";");
  for (const b of book) {
    console.log(b.trim());
  }
};

logBookCategories(bookCategories);
