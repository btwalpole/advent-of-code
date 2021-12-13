const fs = require("fs");
const { start } = require("repl");
const { isFunction } = require("util");

//sync read file as per https://nodejs.dev/learn/reading-files-with-nodejs
let input;
try {
  const data = fs.readFileSync("day9example.txt", "utf8");
  input = data;
} catch (err) {
  console.error(err);
}

input = input.split('\n')
input = input.map(entry => entry.split(''))
//console.log(input)

//now loop over array checking vales

let lowPoints = []

for(i=0; i<input.length; i++) {
    for(j=0; j<input[i].length; j++) {
        //add each neighbour to diffArray for checking
        let diffArray = []
        //check left, if it exists
        if (input[i][j-1]) {
           // console.log('value left of me does exist at i: ' + i + ', j: ' + j)
            diffArray.push(input[i][j-1])
        } else {
           // console.log('value left of me does not exist at i: ' + i + ', j: ' + j)
        }
        //check to see if right exists
        if (input[i][j+1]) {
            //console.log('value right of me does exist at i: ' + i + ', j: ' + j)
            diffArray.push(input[i][j+1])
        } else {
            //console.log('value right of me does not exist at i: ' + i + ', j: ' + j)
        }
        //check to see if above exists
        if(i !== 0) {
            if (input[i-1][j]) {
                //console.log('value above of me does exist at i: ' + i + ', j: ' + j)
                diffArray.push(input[i-1][j])
            } else {
                //console.log('value above of me does not exist at i: ' + i + ', j: ' + j)
            }
        }
        
        //check to see if below exists
        if(i !== (input.length-1)) {
            if (input[i+1][j]) {
                //console.log('value below of me does exist at i: ' + i + ', j: ' + j)
                diffArray.push(input[i+1][j])
            } else {
                //console.log('value below of me does not exist at i: ' + i + ', j: ' + j)
            }
        }
        
        //now check if all values in diffPoints are less than current value
        let lessThanCount = 0
        for(k=0; k<diffArray.length; k++) {
            if(input[i][j] < diffArray[k]) {
                lessThanCount = lessThanCount + 1;
            }
        }
        if (lessThanCount === diffArray.length) {
            //console.log('low points at i: ' + i + ', j: ' + j + 'with value: ' + input[i][j])
            lowPoints.push({'i': i, 'j': j, 'value': parseInt(input[i][j])})
        }
    }
}

console.log('lowPoints: ', lowPoints)
let riskValue = 0

for(k=0; k<lowPoints.length; k++) {
    riskValue = riskValue + 1 + lowPoints[k].value;
}

console.log('riskValue: ', riskValue)

//convert to ints not strings
for(i=0; i<input.length; i++) {
    for(j=0; j<input[i].length; j++) {
        input[i][j] = parseInt(input[i][j])
    }
}
console.log(input)
//part2 every location counts as part of one basin. except 9s are not in any basin
//What do you get if you multiply together the sizes of the three largest basins?

//from the starting point of the low point of the basin, keep going outward until you reach a 9

//start at low point x, y (need to have saved these in a lowPoints array)

//increment vertically, if value  != 9,  incremement basin size and continue, else stop
//do the same left right and down

//but at each point we need to do this again, at each point discovered in the basin you go up and down

let basins = []
//CHANGE BACK TO k<lowPoints.length; 
for(k=0; k<2; k++) {
    let startI = lowPoints[k].i
    let startJ = lowPoints[k].j
    let basinSize = 1
    basins.push({i: startI, j: startJ, size: basinSize, coords: []})

        //increment right
        incrRight(startI, startJ);

        function incrRight(startingI, startingJ) {
            let rightCounter = 1;
            let rightNextPoint = 10;
            let rightToContinue = 'true'
            while(rightToContinue === 'true') {
                if (startingI < input.length && (startingJ+rightCounter) < input[0].length) {
                    console.log('entering right if statement for i: ' + startingI + ', j: ' + startingJ)
                    console.log('rightCounter: ', rightCounter)
                    rightNextPoint = input[startingI][startingJ + rightCounter]
                    console.log('rightNextPoint: ', rightNextPoint)
                    if (rightNextPoint !== 9) {
                        basinSize = basinSize + 1;
                        incrUp(startingI, startingJ + rightCounter)
                        console.log('for low Point i: ' + startI + ', j: ' + startJ + ' basinSize: ' + basinSize)
                    } else if (rightNextPoint == 9) {
                        rightToContinue = false;
                    }
                    rightCounter = rightCounter + 1;
                } else {
                    rightToContinue = false;
                    console.log('not entering right if statement for i: ' + startingI + ', j: ' + startingJ)
                }
            }
        }
        

        //increment left
        incrLeft(startI, startJ)

        function incrLeft(startingI, startingJ) {
            let leftCounter = 1;
            let leftNextPoint = 10;
            let leftToContinue = 'true'
            while(leftToContinue === 'true') {
                if (startingI < input.length && (startingJ-leftCounter) >= 0) {
                    console.log('entering left if statement for i: ' + startingI + ', j: ' + startingJ)
                    console.log('leftCounter: ', leftCounter)
                    leftNextPoint = input[startingI][startingJ - leftCounter]
                    console.log('leftNextPoint: ', leftNextPoint)
                    if (leftNextPoint !== 9) {
                        //first check if we've already been here
                        let coordAlreadyCounted = false;
                        for(let q=0;q<basins[k].coords; q++) {
                            if (basins[k].coords[i][0] === startingI && (basins[k].coords[i][1] === (startingJ - leftCounter))) {
                                coordAlreadyCounted = true
                            }
                        }
                        if (!coordAlreadyCounted) {
                            console.log('coord not counted yet')
                            basins[k].coords.push([startingI][startingJ - leftCounter])
                            basinSize = basinSize + 1
                            incrUp(startingI, startingJ - leftCounter)
                        } else {
                            console.log('coord already counted')
                        }
                        console.log('for low Point i: ' + startI + ', j: ' + startJ + ' basinSize: ' + basinSize)
                    } else if (leftNextPoint == 9) {
                        leftToContinue = false;
                    }
                    leftCounter = leftCounter + 1;
                } else {
                    leftToContinue = false;
                    console.log('not entering left if statement for i: ' + startingI + ', j: ' + startingJ)
                }
            }
        }
        //increment up
        incrUp(startI, startJ)
        
        function incrUp(startingI, startingJ) {
            let upCounter = 1;
            let upNextPoint = 10;
            let upToContinue = 'true'
            while(upToContinue === 'true') {
                if (startingI < input.length && (startingI-upCounter) >= 0) {
                    console.log('entering up if statement for i: ' + startingI + ', j: ' + startingJ)
                    console.log('upCounter: ', upCounter)
                    upNextPoint = input[startingI - upCounter][startingJ]
                    console.log('upNextPoint: ', upNextPoint)
                    if (upNextPoint !== 9) {
                        basinSize = basinSize + 1
                        incrRight(startingI - upCounter, startingJ)
                        incrLeft(startingI - upCounter, startingJ)
                    } else if (upNextPoint == 9) {
                        upToContinue = false;
                    }
                    upCounter = upCounter + 1;
                } else {
                    upToContinue = false;
                    console.log('not entering up if statement for i: ' + startingI + ', j: ' + startingJ)
                }
            }
        }
        

        //increment down
        let downCounter = 1;
        let downNextPoint = 10;
        let downToContinue = 'true'
        while(downToContinue === 'true') {
            if (startI < input.length && (startI + downCounter) < input.length) {
                console.log('entering down if statement for i: ' + startI + ', j: ' + startJ)
                console.log('downCounter: ', downCounter)
                downNextPoint = input[startI + downCounter][startJ]
                console.log('downNextPoint: ', downNextPoint)
                if (downNextPoint !== 9) {
                    basinSize = basinSize + 1
                    incrRight(startI + downCounter, startJ)
                    incrLeft(startI + downCounter, startJ)
                } else if (downNextPoint == 9) {
                    downToContinue = false;
                }
                downCounter = downCounter + 1;
            } else {
                downToContinue = false;
                console.log('not entering up if statement for i: ' + startI + ', j: ' + startJ)
            }
        }

        //basins.push({i: startI, j: startJ, size: basinSize})
        //basins.push({i: startI, j: startJ, size: basinSize, coords: []})
        basins[k].size = basinSize

    /*
    if (startJ < input[0].length && startJ < input.length) {
        //increment left
        let leftCounter = 1;
        let leftNextPoint = 10;
        let leftToContinue = 'true'
        console.log('hi')
        while(leftToContinue === 'true') {
            leftNextPoint = input[startI][startJ + counter]
            console.log('nextPoint: ', leftNextPoint)
            if (leftNextPoint !== 9) {
                basinSize = basinSize + 1
            } else if (leftNextPoint == 9) {
                leftToContinue = false;
            }
            leftCounter = leftCounter + 1;
        }
    }
    */
    //increment down
    /*
    counter = 1;
    nextPoint = 10
    let continue = true
    while(continue) {
        nextPoint = input[startI + counter][startJ]
        console.log('nextPoint: ', nextPoint)

        if (nextPoint !== 9) {
            basinSize = basinSize + 1
        }
        counter = counter + 1;
    }

    */

    console.log('for low Point i: ' + startI + ', j: ' + startJ + ' basinSize: ' + basinSize)

}

console.log('basins:', basins)

