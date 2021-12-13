const fs = require("fs");

//sync read file as per https://nodejs.dev/learn/reading-files-with-nodejs
let input;
try {
  const data = fs.readFileSync("day10example.txt", "utf8");
  input = data;
} catch (err) {
  console.error(err);
}

input = input.split('\n')
input = input.map(entry => entry.split(''))
//input = input.map(entry => parseInt(entry))
for(i=0; i<input.length; i++) {
    for(j=0; j<input[i].length; j++) {
        input[i][j] = parseInt(input[i][j])
    }
}
console.log(input) //now converted to 2d array of numbers

//part 1, calculating flashes
let flashes = 0;

for(x=1; x<3; x++) {
    //ebery octopus energy increment
    for(i=0; i<input.length; i++) {
        for(j=0; j<input[i].length; j++) {
            input[i][j] = input[i][j] + 1;
        }
    }

    //check for flashes
    for(i=0; i<input.length; i++) {
        for(j=0; j<input[i].length; j++) {
    
            if (input[i][j] > 9) {
                flashes += 1
                console.log('input[' + i + '][' + j + '] ' + 'flashed')
                input[i][j] = 0;

                //let neighbours = [input[i+1][j],input[i-1][j],input[i][j+1],input[i][j-1],input[i+1][j+1],input[i-1][j-1],input[i+1][j-1],input[i-1][j+1]]
                let neighbours = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]]
                for(a=0; a<neighbours.length; a++) {
                    let neighbour_i = i + neighbours[a][0]
                    let neighbour_j = j + neighbours[a][1]

                    if(neighbour_i < input.length && neighbour_j < input[i].length && neighbour_i >= 0 && neighbour_j >= 0) {
                        console.log('incrementing neighbour ' + a + ': input[ ' + neighbour_i + '][' + neighbour_j + '] ')
                        input[neighbour_i][neighbour_j] += 1
                        if (input[neighbour_i][neighbour_j]  > 9) {
                            flashes += 1
                            console.log('neighbour ' + a + 'to input[ ' + i + '][' + j + ']:')
                            console.log('input[ ' + neighbour_i + '][' + neighbour_j + '] ' + 'flashed')
                            input[neighbour_i][neighbour_j]  = 0;
                        }
                    } else {
                        console.log('value outside of array, doing nothing')
                    }
                    
                }
            }
        }
    }
    console.log('after ' + x + 'steps:', input) //after one round?
}






/*
First, the energy level of each octopus increases by 1.
Then, any octopus with an energy level greater than 9 flashes. This increases the energy level of all adjacent octopuses by 1, including octopuses that are diagonally adjacent.
If this causes an octopus to have an energy level greater than 9, it also flashes. This process continues as long as new octopuses keep having their energy level increased beyond 9.
(An octopus can only flash at most once per step.)
Finally, any octopus that flashed during this step has its energy level set to 0, as it used all of its energy to flash.
*/

