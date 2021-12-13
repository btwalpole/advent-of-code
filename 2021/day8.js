//https://zonito.medium.com/seven-segment-search-day-8-advent-of-code-2021-21e5bc965005 


//convert input into array of strings
//split('|')
//then split(' )
//then we should have array of outputs

//what are the unique lenghts? 3, 2... not 5, 

//loop over output arrays, if length != unique length then increment sum

const fs = require("fs");

//sync read file as per https://nodejs.dev/learn/reading-files-with-nodejs
let input;
try {
  const data = fs.readFileSync("day8input.txt", "utf8");
  input = data;
} catch (err) {
  console.error(err);
}
/*
//Getting data in right format
console.log(input);
input = input.split("\n");
console.log(input);
input = input.map(entry => {
  //find index of '|' and remove all before it?
  const indexOfDelim = entry.indexOf('|');
  entry = entry.slice(indexOfDelim+1).trimStart().split(' ')
  return entry
})
console.log(input);

/*
input = input.filter(entry => !entry.includes('|')) 
console.log(input);
input = input.map(entry => {
    entry = entry.split(' ')
    return entry
}*/

/*
console.log(input);
input = input.map(entry => {
    return (
        entry.map(value => value.length)
    )
})
console.log(input);
*/
/*
//the digits 1, 4, 7, and 8 each use a unique number of segments,
//corresponding segment lengths: 2(1), 4(4), 3(7), 7(8)
let sum = 0;
for(let i=0; i<input.length; i++) {
  for(let j=0; j<4; j++) {
    if(input[i][j] === 2 || input[i][j] === 4 || input[i][j] === 3 || input[i][j] === 7) {
      sum = sum +1;
    }
  }
}

//console.log('sum: ', sum)
//input = input.map(entry => )

///part 2

//https://zonito.medium.com/seven-segment-search-day-8-advent-of-code-2021-21e5bc965005 


//number 0 1 2 3 4 5 6 7 8 9
//length 6 2 5 5 4 5 6 3 7 6 

//for lengths 2 4 3 7 we know the number
//for length 5 it could be 2, 3, 5 - - if we can find two of these then we know the third
//for length 6 it could be 0, 6, 9 - - if we can find two of these then we know the third


//acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf
//  8     2/3/5 2/3/5  0/6/9  7  0/6/9  0/6/9  4   0/6/9   1 | 2/5    3     2/5   2/5 

//so here we know 1 is ab
/*
 ....
.    a/b
.    a/b
 ....
.    a/b
.    a/b
 ....
*/
//we also know that the only letter 6 does not contain is the top right in the one, i.e. the 6 cannot contain both a and b here
//so from cagedb, cefabd, and cdfgeb - we know that cdfgeb is 6!
//acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf
//  8     2/3/5 2/3/5  0/6/9  7  0/6/9   6    4   0/6/9   1 | 2/5    3     2/5   2/5 
//now we need one of zero or 9 from cagedb, cefabd. Then we compare 6 and zero - only zero has both letters frmo 1 (ab) o 
/*
For the 5-segement numbers:

    3 is the only one that includes all of 1

    5 is the one that doesn't but is included in 9

    2 is left

And for the 6-segment numbers

    6 is the only one that does not contain 1

    9 is the one containing both 1 and 4

    0 is left
    */

//Getting data in right format
console.log(input);
input = input.split("\n");
console.log(input);
input = input.map(entry => {
  //find index of '|' and remove all before it?
  //const indexOfDelim = entry.indexOf('|');
  //entry = entry.slice(indexOfDelim+1).trimStart().split(' ')
  entry = entry.split('|').map(value => value.trim().split(' '))
  return entry
})
console.log(input);

//number 0 1 2 3 4 5 6 7 8 9
//length 6 2 5 5 4 5 6 3 7 6 

//CHANGE THIS TOP LOOP I TO INPUT.LENGTH
for(let i =0; i<input.length; i++) {
  for(let j =0; j<2; j++) {
    for(let k =0; k<input[i][j].length; k++) {
      //console.log('i: ' + i + ', j: ' + j + ', k: ', k)
      let length = input[i][j][k].length
      input[i][j][k] = {'string': input[i][j][k], 'length': length, 'number': 10}
      switch (input[i][j][k].length) {
        case 2:
          input[i][j][k].number = 1
          break;
        case 4:
          input[i][j][k].number = 4
          break;
        case 3:
          input[i][j][k].number = 7
          break;
        case 7:
          input[i][j][k].number = 8
          break;
      }
    }
  }
}

let totalSum = 0

//CHANGE THIS TOP LOOP I TO INPUT.LENGTH
for(let i =0; i<input.length; i++) {
  let oneString;
  let fourString;
  let fourDiffString;
  let outputNumInt = 0

  for(let j =0; j<2; j++) {
    for(let k =0; k<input[i][j].length; k++) { //define strings we need
      if(input[i][j][k].number === 1) {
        oneString = input[i][j][k].string
      }
      if(input[i][j][k].number === 4) {
        fourString = input[i][j][k].string

      } 
    }

    for(let k =0; k<input[i][j].length; k++) { //get numebrs
      //get 2/3 6 length numnbers
      if(input[i][j][k].string.length === 6) {
        if(!input[i][j][k].string.includes(oneString.charAt(0)) || !input[i][j][k].string.includes(oneString.charAt(1)) ) {
          input[i][j][k].number = 6
        }
        if(input[i][j][k].string.includes(fourString.charAt(0)) && input[i][j][k].string.includes(fourString.charAt(1)) && input[i][j][k].string.includes(fourString.charAt(2)) && input[i][j][k].string.includes(fourString.charAt(3)) ){
          input[i][j][k].number = 9
        }
      }
      //get 2/3 5 length numbers
      if(input[i][j][k].string.length === 5) {
        fourDiffString = fourString.replace(oneString.charAt(0), '').replace(oneString.charAt(1), '')
        if(input[i][j][k].string.includes(oneString.charAt(0)) && input[i][j][k].string.includes(oneString.charAt(1)) ) {
          input[i][j][k].number = 3
        }
        if(input[i][j][k].string.includes(fourDiffString.charAt(0)) && input[i][j][k].string.includes(fourDiffString.charAt(1)) ) {
          input[i][j][k].number = 5
        }
      }

    }
    for(let k =0; k<input[i][j].length; k++) { //get numebrs
      //get last 6 length numnbers
      if(input[i][j][k].string.length === 6 && input[i][j][k].number === 10) {
        input[i][j][k].number = 0
      }
      if(input[i][j][k].string.length === 5 && input[i][j][k].number === 10) {
        input[i][j][k].number = 2
      }
    }
    if(j === 1) {
      let outputNumString = ''
      for(let k =0; k<input[i][j].length; k++) { 
        outputNumString = outputNumString + input[i][j][k].number.toString()
      }
      outputNumInt = parseInt(outputNumString)
    }
  }

  totalSum = totalSum + outputNumInt
}
console.log('totalSum: ', totalSum)

// used logic from here https://www.reddit.com/r/adventofcode/comments/rbvpui/2021_day_8_part_2_my_logic_on_paper_i_used_python/
//1076427 is too high
//1027422