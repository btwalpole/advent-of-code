const fs = require("fs");

//sync read file as per https://nodejs.dev/learn/reading-files-with-nodejs
let input;
try {
  const data = fs.readFileSync("day5input.txt", "utf8");
  input = data;
} catch (err) {
  console.error(err);
}

//Getting data in right format
//console.log(input);
input = input.split("\n");
for (let i = 0; i < input.length; i++) {
  input[i] = input[i].replace("->", "").split(" ");
  input[i] = input[i].filter((value) => value.length > 0);
  for (let j = 0; j < input[i].length; j++) {
    input[i][j] = input[i][j].split(",");
  }
  input[i] = input[i][0].concat(input[i][1]);
}

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    input[i][j] = parseInt(input[i][j]);
  }
}

//console.log('input before int conversion: ', input)

console.log("converted to ints: ", input);

//console.log('last value of ints: ', input[input.length-1])

//part 1 For now, only consider horizontal and vertical lines: lines where either x1 = x2 or y1 = y2.

/* removing this for part 2
for (let i = 0; i < input.length; i++) {
  if (input[i][0] != input[i][2] && input[i][1] != input[i][3]) {
    input.splice(i, 1);
    i--;
  }
}
*/
//from each pair of coords, generate the points in between
//generate verticals array and horiz array

//0,0 -> 8,8      8,0 -> 0,8       6,4 -> 2,0,   9,7 -> 7,9
let verticals = input.filter((points) => {
  if (points[0] === points[2]) {
    return points;
  }
});

let horizontals = input.filter((points) => {
  if (points[1] === points[3]) {
    return points;
  } else {
    return null;
  }
});

console.log('calcing diags:')
let diagonals = input.filter((points) => {
  if ((points[0] !== points[2]) && (points[1] !== points[3])) {
    return points;
  } else {
    return null;
  }
});

console.log('diagonals: ', diagonals)
//console.log('verticals: ', verticals)
//console.log('horizontals: ', horizontals)


//console.log('input.length: ', input.length)
//console.log('horizontals.length + verticals.length + diagonals.length: ', horizontals.length + verticals.length + diagonals.length)

//console.log('vert start & end coords: ', verticals.length)
//console.log('horiz start & end coords: ', horizontals.length)

//console.log('verticals ', verticals)


//create vert coords array
let vertCoords = [];

for (let i = 0; i < verticals.length; i++) {
  let ydiff = verticals[i][1] - verticals[i][3];
  if (ydiff < 0) {
    for (let a = 0; a <= Math.abs(ydiff); a++) {
      vertCoords.push([verticals[i][0], verticals[i][1] + a]);
    }
  }
  if (ydiff > 0) {
    for (let a = 0; a <= ydiff; a++) {
      vertCoords.push([verticals[i][0], verticals[i][1] - a]);
    }
  }
}

//create horiz coords array
let horizCoords = [];
//input: horiz:  [ [ 0, 9, 5, 9 ], [ 9, 4, 3, 4 ], [ 0, 9, 2, 9 ], [ 3, 4, 1, 4 ] ]
for (let i = 0; i < horizontals.length; i++) {
  let xdiff = horizontals[i][0] - horizontals[i][2];
  if (xdiff < 0) {
    for (let a = 0; a <= Math.abs(xdiff); a++) {
      horizCoords.push([horizontals[i][0] + a, horizontals[i][1]]);
    }
  }
  if (xdiff > 0) {
    for (let a = 0; a <= xdiff; a++) {
      horizCoords.push([horizontals[i][0] - a, horizontals[i][1]]);
    }
  }
}

//create diag coords array

let diagCoords = [];
//  [ 8, 0, 0, 8 ], [ 6, 4, 2, 0 ], [ 0, 0, 8, 8 ], [ 5, 5, 8, 2 ] ]
for (let i = 0; i < diagonals.length; i++) {
  let xdiff = diagonals[i][0] - diagonals[i][2];
  let ydiff = diagonals[i][1] - diagonals[i][3];
  let xCoords = []
  let yCoords = []

  if (xdiff < 0) {
    for (let a = 0; a <= Math.abs(xdiff); a++) {
      xCoords.push(diagonals[i][0] + a)
    }
  } else {
    for (let a = 0; a <= Math.abs(xdiff); a++) {
      xCoords.push(diagonals[i][0] - a)
    }
  }

  if (ydiff < 0) {
    for (let a = 0; a <= Math.abs(xdiff); a++) {
      yCoords.push(diagonals[i][1] + a)
    }
  } else {
    for (let a = 0; a <= Math.abs(xdiff); a++) {
      yCoords.push(diagonals[i][1] - a)
    }
  }

  //console.log('i: ', i)
  for(let j=0; j<xCoords.length; j++) {
    //console.log('adding xCoords[' + j + '], yCoords[' + j + '] = ' + xCoords[j] + ', ' + yCoords[j])
    diagCoords.push([xCoords[j], yCoords[j]])
  }
}

//console.log("vertCoords length: ", vertCoords.length);
//console.log("horizCoords length: ", horizCoords.length);
//console.log('diagCoords length: ', diagCoords.length)
//console.log('diagCoords: ', diagCoords)

let allCoords = vertCoords.concat(horizCoords);
allCoords = allCoords.concat(diagCoords)
//console.log("all coords: ", allCoords);

//track duplicate points
// At how many points do at least two lines overlap? Don't need total number of duplications, just the num
//of points where there are duplicates
/*
let duplicates = [];

for (let i = 0; i < allCoords.length; i++) {
  let currentX = allCoords[i][0];
  let currentY = allCoords[i][1];

  for (let j = 0; j < allCoords.length; j++) {
    if (i != j) {
      if (allCoords[j][0] === currentX && allCoords[j][1] === currentY) {
        if (duplicates.length === 0) {
          duplicates.push({ x: currentX, y: currentY, count: 1 });
        } else {
          //checking if the duplicate found already has already been seen
          let dupFound = false;
          for (let p = 0; p < duplicates.length; p++) {
            if (duplicates[p].x === currentX && duplicates[p].y === currentY) {
              duplicates[p].count = duplicates[p].count + 1;
              dupFound = true;
            }
          }
          if (dupFound === false) {
            duplicates.push({ x: currentX, y: currentY, count: 1 });
          }
        }
      }
    }
  }
}

console.log("duplicates: ", duplicates);
console.log('duplicates.length: ', duplicates.length)
*/


//maybe try adding each coord to an array, so for x,y you increment value at array[x][y]
//then just count up how many avlues of the array are >1?
let grid = new Array(1000);

for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(1000);
  for(let j=0; j<1000; j++) {
    grid[i][j] = 0;
  }
}

for(let i=0; i<allCoords.length; i++) {
  //console.log('i: ', i)
  grid[allCoords[i][0]][allCoords[i][1]] += 1;
  //console.log('grid[' + allCoords[i][0] + '][' + allCoords[i][1] + '] = ' + grid[allCoords[i][0]][allCoords[i][1]] )
}

let sum = 0;
for(let i=0; i<1000; i++) {
  for(let j=0; j<1000; j++) {
    if (grid[i][j] > 1) {
      sum += 1
    }
  }
}

console.log('sum: ', sum)

//start over for part 2?

