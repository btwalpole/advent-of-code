const { stat } = require("fs");

exinput = [3,4,3,1,2]
realinput = [4,3,4,5,2,1,1,5,5,3,3,1,5,1,4,2,2,3,1,5,1,4,1,2,3,4,1,4,1,5,2,1,1,3,3,5,1,1,1,1,4,5,1,2,1,2,1,1,1,5,3,3,1,1,1,1,2,4,2,1,2,3,2,5,3,5,3,1,5,4,5,4,4,4,1,1,2,1,3,1,1,4,2,1,2,1,2,5,4,2,4,2,2,4,2,2,5,1,2,1,2,1,4,4,4,3,2,1,2,4,3,5,1,1,3,4,2,3,3,5,3,1,4,1,1,1,1,2,3,2,1,1,5,5,1,5,2,1,4,4,4,3,2,2,1,2,1,5,1,4,4,1,1,4,1,4,2,4,3,1,4,1,4,2,1,5,1,1,1,3,2,4,1,1,4,1,4,3,1,5,3,3,3,4,1,1,3,1,3,4,1,4,5,1,4,1,2,2,1,3,3,5,3,2,5,1,1,5,1,5,1,4,4,3,1,5,5,2,2,4,1,1,2,1,2,1,4,3,5,5,2,3,4,1,4,2,4,4,1,4,1,1,4,2,4,1,2,1,1,1,1,1,1,3,1,3,3,1,1,1,1,3,2,3,5,4,2,4,3,1,5,3,1,1,1,2,1,4,4,5,1,5,1,1,1,2,2,4,1,4,5,2,4,5,2,2,2,5,4,4]

/*
//loop over array 
    //if value is >0, decrement the value
    //if value == 0, set it to 6 and append an 8 to the array
*/

/* Below approach only works for part 1:

day = 1;

//console.log('array: ', input)

while(day<20) {
    console.log('starting day: ', day)
    for(let i=0; i<input.length; i++) {
        if (input[i] > 0) {
            input[i] = input[i] - 1; 
        } else {
            input[i] = 6;
            input.unshift(8)
            i++
        }
        //console.log('after i: ', i)
        //console.log('array: ', input)
    }
    console.log('ending day: ' +  day + ', array length: ' + input.length)
    day++;
}

//console.log('array: ', input)
//console.log('array length: ', input.length)

*/

//part 2

//array of the states [0, 1, 2, 3, 4, 5, 6, 7, 8 ] - indices
//          [num of 0, num of 1, ...] - num of fish at each day old

// start with: 
// [3,4,3,1,2] ->

// [0, 1, 2, 3, 4, 5, 6, 7, 8 ] - indices
// [0, 1, 1, 2, 1, 0, 0, 0, 0 ] - values before day 1

// [1, 1, 2, 1, 0, 0, 0, 0, 0 ] - values after day 1, before 0 index, each value just moves to the left
// [1, 2, 1, 0, 0, 0, 1, 0, 1 ] - values after day 2, values move left but 1 in zero index is added to the 6 index, and 1 to 8 index
// [2, 1, 0, 0, 0, 1, 1, 1, 1 ] - values after day 2, values move left but 1 in zero index is added to the 6 index, and 1 to 8 index

//so we take note of the previuos value for zero before doing anything
//then we loop through teha rray, moving values to the left, then we add prevZeroValue to i=6 and set i=8 equal to it

function doStuff(array) {
    //convert fish to array state
    let states = [0,0,0,0,0,0,0,0,0]
    for(let i=0; i<array.length; i++) {
        states[array[i]]++;
    }

    day = 1;
    //console.log('array at start: ', states)

    while(day<257) {
        //console.log('starting day: ', day)
        let prevZero = states[0]
        //console.log('prevZero: ', prevZero)
        for(let i=0; i<states.length-1; i++) {
            //console.log('updating array index: ', i)
            //console.log('index i: ' + i + ', value: ' + states[i])
            //console.log('index i+1: ' + parseInt(i+1) + ', value: ' + states[i+1])
            states[i] = states[i+1]
        }
        states[6] = states[6] + prevZero
        states[8] = prevZero
    
        //console.log('ending day: ', day)
        //console.log('array now: ', states)
        day++;
    }

    console.log('total fish: ', states.reduce((a, b) => a + b))
}

doStuff(realinput)
