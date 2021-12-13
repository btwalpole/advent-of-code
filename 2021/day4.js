const fs = require("fs");
let exampleNumsDrawn = [
  7,
  4,
  9,
  5,
  11,
  17,
  23,
  2,
  0,
  14,
  21,
  24,
  10,
  16,
  13,
  6,
  15,
  25,
  12,
  22,
  18,
  20,
  8,
  19,
  3,
  26,
  1,
];
let miniNumsDrawn = [
  28,
  82,
  77,
  88,
  95,
  55,
  62,
  21,
  99,
  14,
  31,
  88,
  71,
  23,
  63,
  52,
  46,
  54,
  74,
  29,
  69,
  59,
];

let bigNumsDrawn = [
  28,
  82,
  77,
  88,
  95,
  55,
  62,
  21,
  99,
  14,
  30,
  9,
  97,
  92,
  94,
  3,
  60,
  22,
  18,
  86,
  78,
  71,
  61,
  43,
  79,
  33,
  65,
  81,
  26,
  49,
  47,
  51,
  0,
  89,
  57,
  75,
  42,
  35,
  80,
  1,
  46,
  83,
  39,
  53,
  40,
  36,
  54,
  70,
  76,
  38,
  50,
  23,
  67,
  2,
  20,
  87,
  37,
  66,
  84,
  24,
  98,
  4,
  7,
  12,
  44,
  10,
  29,
  5,
  48,
  59,
  32,
  41,
  90,
  17,
  56,
  85,
  96,
  93,
  27,
  74,
  45,
  25,
  15,
  6,
  69,
  16,
  19,
  8,
  31,
  13,
  64,
  63,
  34,
  73,
  58,
  91,
  11,
  68,
  72,
  52,
];

//sync read file as per https://nodejs.dev/learn/reading-files-with-nodejs
let allCards;
try {
  const data = fs.readFileSync("day4input.txt", "utf8");
  allCards = data;
} catch (err) {
  console.error(err);
}

//Getting data in right format
allCards = allCards.split("\n");

for (let i = 0; i < allCards.length; i++) {
  allCards[i] = allCards[i].trimStart().split(" ");
  allCards[i] = allCards[i].filter((value) => value != "");
}

allCards = allCards.filter((value) => value.length > 0);

for (let i = 0; i < allCards.length; i++) {
  allCards[i] = [
    allCards[i],
    allCards[i + 1],
    allCards[i + 2],
    allCards[i + 3],
    allCards[i + 4],
  ];
  allCards.splice(i + 1, 4);
}
console.log(allCards);

//Data formatted correctly now.

//part 1
/*

function playBingo(numbersDrawn) {
  //Now cross off the drawn numbers
  for (let a = 0; a < numbersDrawn.length; a++) {
    console.log("current drawn number: ", numbersDrawn[a]);
    for (let i = 0; i < allCards.length; i++) {
      //array[i]
      for (let j = 0; j < 5; j++) {
        //array[i][j] iterate over array rows
        for (let k = 0; k < 5; k++) {
          //iterate over array values of given row
          //console.log("array value: ", allCards[i][j][k]);
          //console.log("num drawn:", miniNumsDrawn[a]);
          //check for a match
          if (parseInt(allCards[i][j][k]) === numbersDrawn[a]) {
            console.log("match! Value in array = ", numbersDrawn[a]);
            allCards[i][j][k] = "X";
          }
        }
      }
      //once done checking a card for matches - thats when we need to check that board for complete rows and columns
      //check for complete rows
      for (let j = 0; j < 5; j++) {
        //array[i][j] iterate over array rows
        if (
          allCards[i][j][0] === allCards[i][j][1] &&
          allCards[i][j][0] === allCards[i][j][2] &&
          allCards[i][j][0] === allCards[i][j][3] &&
          allCards[i][j][0] === allCards[i][j][4]
        ) {
          console.log(
            "full row found at drawn number: " +
              numbersDrawn[a] +
              " at card i: " +
              i
          );
          return [numbersDrawn[a], i];
        }
      }
      //check for complete columns
      for (let m = 0; m < 5; m++) {
        //array[i][j] iterate over array columns
        if (
          allCards[i][0][m] === allCards[i][1][m] &&
          allCards[i][0][m] === allCards[i][2][m] &&
          allCards[i][0][m] === allCards[i][3][m] &&
          allCards[i][0][m] === allCards[i][4][m]
        ) {
          console.log(
            "full column found at drawn number: " +
              numbersDrawn[a] +
              " at card i: " +
              i
          );
          return [numbersDrawn[a], i];
        }
      }
    }
  }
}

let [numDrawnAtBingo, bingoIndex] = playBingo(bigNumsDrawn);

console.log(
  "numDrawnAtBingo: " + numDrawnAtBingo + ", bingoIndex: " + bingoIndex
);

//now sum the unmatched values on the winning board
function sumUnmatchedValues(bingoIndex) {
  let sum = 0;
  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < 5; k++) {
      if (allCards[bingoIndex][j][k] != "X") {
        sum += parseInt(allCards[bingoIndex][j][k]);
      }
    }
  }
  return sum;
}
let sum = sumUnmatchedValues(bingoIndex);

console.log("sum of unmatched: ", sum);
console.log("product: ", sum * numDrawnAtBingo);
*/

//part 2 Figure out which board will win last. Once it wins, what would its final score be?

// as we go, keep track of which boards have already got a match, add their indices to an array? Wait until this array has length of
//total  length - 1?

function playBingo(numbersDrawn) {
  let matchedIndices = [];

  //Now cross off the drawn numbers
  for (let a = 0; a < numbersDrawn.length; a++) {
    console.log("current drawn number: ", numbersDrawn[a]);
    console.log("matched indices length: ", matchedIndices.length);

    for (let i = 0; i < allCards.length; i++) {
      //array[i]
      for (let j = 0; j < 5; j++) {
        //array[i][j] iterate over array rows
        for (let k = 0; k < 5; k++) {
          //iterate over array values of given row
          //check for a match
          if (parseInt(allCards[i][j][k]) === numbersDrawn[a]) {
            console.log(
              "match! Value in array: " +
                i +
                " for drawn number: " +
                numbersDrawn[a]
            );
            allCards[i][j][k] = "X";
          }
        }
      }
      //once done checking a card for matches - thats when we need to check that board for complete rows and columns
      if (!matchedIndices.includes(i)) {
        console.log(i + " not yet completed, checking for completeness");
        //check for complete rows
        for (let j = 0; j < 5; j++) {
          //array[i][j] iterate over array rows
          if (
            allCards[i][j][0] === allCards[i][j][1] &&
            allCards[i][j][0] === allCards[i][j][2] &&
            allCards[i][j][0] === allCards[i][j][3] &&
            allCards[i][j][0] === allCards[i][j][4]
          ) {
            console.log(
              "full row found at drawn number: " +
                numbersDrawn[a] +
                " at card i: " +
                i
            );
            matchedIndices.push(i);
            if (matchedIndices.length === allCards.length) {
              console.log("last board just filled");
              return [numbersDrawn[a], i];
            }
          }
        }
      }
      if (!matchedIndices.includes(i)) {
        //check for complete columns
        for (let m = 0; m < 5; m++) {
          //array[i][j] iterate over array columns
          if (
            allCards[i][0][m] === allCards[i][1][m] &&
            allCards[i][0][m] === allCards[i][2][m] &&
            allCards[i][0][m] === allCards[i][3][m] &&
            allCards[i][0][m] === allCards[i][4][m]
          ) {
            console.log(
              "full column found at drawn number: " +
                numbersDrawn[a] +
                " at card i: " +
                i
            );
            matchedIndices.push(i);
            if (matchedIndices.length === allCards.length) {
              console.log("last board just filled");
              return [numbersDrawn[a], i];
            }
          }
        }
      }
    }
    console.log("Array: ", allCards);
  }
}

let [numDrawnAtBingo, bingoIndex] = playBingo(bigNumsDrawn);

console.log(
  "numDrawnAtBingo: " + numDrawnAtBingo + ", bingoIndex: " + bingoIndex
);

//now sum the unmatched values on the winning board
function sumUnmatchedValues(bingoIndex) {
  let sum = 0;
  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < 5; k++) {
      if (allCards[bingoIndex][j][k] != "X") {
        sum += parseInt(allCards[bingoIndex][j][k]);
      }
    }
  }
  return sum;
}
let sum = sumUnmatchedValues(bingoIndex);

console.log("sum of unmatched: ", sum);
console.log("product: ", sum * numDrawnAtBingo);
console.log("final board: ", allCards[bingoIndex]);
