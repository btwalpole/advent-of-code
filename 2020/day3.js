let forest = [
'........#.............#........',
'...#....#...#....#.............',
'.#..#...#............#.....#..#',
'..#......#..##............###..',
'..........#......#..#..#.......',
'.#..#.......#.........#.#......',
'.........#..#....##..#.##....#.',
'..#....##...#..................',
'##..........#.##...#....##..#..',
'...#....#...#..............#...',
'...........................#..#',
'..##.##.#..................#...',
'...#.##..#............#........',
'........#.......#...#.....##.#.',
'.##..........#......#.......#..',
'...#..........#...#..#.......#.',
'......#...#...#.##.......#.#...',
'........#...#...#...##.........',
'#..............#.#....#.......#',
'..#..#..#.#....#...............',
'.....#........#...#..........#.',
'##......#...#..#.##.......#....',
'..#.#.....#.#.............#.#.#',
'#..#..##......##...#...........',
'..#......#........#.....#......',
'.....#.......#....#.#...#......',
'...#........#...........#...#..',
'.......#.#...........###....#..',
'...#...........##....##........',
'#....#..####....#.....#..#....#',
'..........#...........#........',
'...#.......#....#.#.........#..',
'....#...#.......#..###.........',
'......#......#..#......#..#....',
'...#.....#............#..#.....',
'...#.#.#.#..#.......#.....#....',
'#....##...#.........#...##.....',
'#..#.......#..#..#..#...##.....',
'#.......#............#.....#...',
'.#........##....##...#........#',
'.....#...#.....................',
'.......#........#..............',
'.....#............#.#.#...#.#..',
'.....##..#.............#.......',
'..#.##..#........#..#...#......',
'.........#.#....#...........#..',
'.#.....#..#....#.....#...#.....',
'....#.#................#.......',
'...............##......#...#...',
'.##...#...#.......##.#....#....',
'............#........#.......#.',
'......##.#.#...................',
'.#.#..............#.......#....',
'#.....#...#.......#..#...#.....',
'.............#....#..#......#..',
'........#...##................#',
'.......#...#..#..##............',
'..#..#...##...#..#.#.....#...#.',
'.#.#...#.........#.#...........',
'...###....#.......#...#........',
'........#......##.#...#..##..#.',
'.....................#.#.......',
'.............#...........#...#.',
'#..#..#.....#.#...#............',
'...#....#.....#...........#....',
'..##.....##...#......#..##.....',
'#.....#.....###.#.....#....##..',
'.#...........###...............',
'..................#..##.#...#..',
'................#....##.#......',
'.#.#.#...#....#.........#..#.#.',
'#.......#........##............',
'.......##.#....#.#............#',
'..........#..##.#....#.........',
'........##..#....#.............',
'.........#....#...........##...',
'#.........#.#..#..#..........#.',
'.....#........#......#.........',
'....#.#.#...............#......',
'.#..#..##...#.##..........#....',
'..#....................#.#.....',
'.........#....#...........#.#.#',
'........#....##.##.............',
'..#.....#.......#..#......#....',
'#..........#.#.....#.#....#....',
'........##.#.....#..#.....#.#..',
'...................#...#....#.#',
'............#..#....#...#...#..',
'..............#.#.........#....',
'...#..#..#.#..##..##...........',
'.#...........................#.',
'.#.......#...........#....#.#.#',
'......#..#...#........#...##...',
'.........#......#.#.......#...#',
'...#..##................#......',
'.............#.#..##....#.#....',
'...............#..#......#.....',
'.#......#.#.#....#........#....',
'........#..#.##..#..#.........#',
'...#....#.#...#..#.......#..#..',
'..#...##.........#..#...#......',
'...#...........#.............#.',
'....#.....................#....',
'.....#..#...............#.#...#',
'....#..........#........#......',
'..#....#........##..##.........',
'...#....#..#.#.......#...#.....',
'..#........#....#...##....#.#..',
'.#...#........##.....#....###..',
'#....#....##......#........#...',
'.........#..#.#..........#....#',
'....#...#.....#.......##.......',
'..............#..........#.##..',
'#...#..#..............#......#.',
'.................#......##....#',
'..#..##..#.......#..#.#......#.',
'.............#........#.....#.#',
'.#.##............#..#..........',
'..#...#...........#..##........',
'.#....#...#....#.......#.......',
'...#.#..#..#..#....#.....#..#..',
'....#..##..............#...#...',
'#..........###......###........',
'.##.##......#..#............#..',
'.#...........#.#.....#...#.....',
'#.#..#...#............#........',
'.........#...#...#..........##.',
'.......###..#..........#.......',
'...........###.....#........#..',
'.#.............#.....#......#..',
'...#.....#....#.#.........##...',
'....##..##...#.......##........',
'......#....##.........#......#.',
'..........#.....##..#.....#..#.',
'..........####...#..#.........#',
'.##....#..#.#...#.......#......',
'...#.#.##.#.#...#....#.#.#.....',
'.........#...##........##.....#',
'..#........#..........##...##.#',
'##...##..........#.#...........',
'..............#......#.........',
'........#.....#.#.......#......',
'.#...#.....#....#.#..#.........',
'.....#....................##...',
'....#..................#.#...##',
'.....#............#..##........',
'#..........#....#.#.......##.#.',
'....#..#.....................#.',
'#..#....##.....#...............',
'..#...#..#..##....#.#..........',
'.......#......#.#.......#.....#',
'...#.#.......#...#.##..........',
'....#..........#....#.#.#......',
'.......#..#..........#..##.....',
'#......#......#...#......#...#.',
'###..#....##......##........#..',
'.#..........#.....#.......#.#..',
'.......#.....#.....#.#.........',
'..#...#....#...................',
'..............#.##.............',
'.#...#.......#.##...#.#.......#',
'.......#......................#',
'....#.#...#.#........#.........',
'.#......#....#...#.............',
'#.......#...###.....#.#.#..#...',
'#....##.#...............##.....',
'..#.......#..................#.',
'.....####...............#......',
'.##......#......#.#.......##.#.',
'#......##..###....#....#......#',
'.##.......##.##...#.##.........',
'......##............#.......#..',
'......#..#.....##.#............',
'.#..........#.....##...........',
'#.........#......#......##.#...',
'.........#.......#..#......#.#.',
'.........#.......#...........#.',
'.#..##.#..................##...',
'.............#.............#...',
'.....##........#......##...##..',
'..#..#.#.....#..#....#.........',
'.....#....#.....#.....#........',
'#......##.....#....#....#......',
'#.................#..#.#......#',
'.......#..#......#....#.#...#.#',
'....#.........#..#..........#.#',
'##......#............#...#...#.',
'....##......#...#.....#....##..',
'.#...##.........#..............',
'......#.....................#..',
'..#..........###....#..........',
'#....#...#..#.............#....',
'#........#.#......#....#.......',
'.#...#.......#..#...#.#...#..#.',
'................##.#.....#.....',
'###.......#...#................',
'...#.......#...#.#.....#.......',
'..#.........#.....#.#.......#..',
'......#.......................#',
'#.....#.#..#....#.......#......',
'...#....#..#....####...........',
'.............#.....#...##......',
'.......#.........#...#..#......',
'.##..#.........#....#.#........',
'....##...#.#...........#....#..',
'.........................##....',
'..###.......##....#.#.........#',
'.#....#.#.#...........##....#..',
'......#...#..#..#..#..#.......#',
'..#....#.#.......#..#..#..#...#',
'.....##...#.##....#.#...#......',
'.........#..#....#..#..........',
'.##..##.........#.#.....#......',
'..........#...##...#.#...#.....',
'#.##..#..#.............#.......',
'...#...........#.......#......#',
'.......#....#....#...##.......#',
'..#.##........###..#......#....',
'...#...........###......#..#..#',
'.#.........#.#.........#.#.....',
'##.......##.##.##......##......',
'............#...#..........#...',
'....................#..........',
'...#..#...........#...#...#....',
'.................#...#......###',
'...#................#.#.##.....',
'...............#........#......',
'#.............##......#.#..#...',
'..#.#.....#..#.##.....##...#...',
'......#.........#......#.......',
'#.......#......#....#........#.',
'.#..##.....#.........#.........',
'....##.##.#...#.........##.#...',
'...............#..#..#..##.....',
'.#..#...............###........',
'.##............##..............',
'...............#...##...#...#.#',
'..#.#......#.#..#.............#',
'#.#..#..##.........#.#.#...#...',
'....##.#....................##.',
'.........#..#.....#.....#..#..#',
'....#......#......#.##....#....',
'........###..#.............#..#',
'##................#.........#..',
'#.....#.......#....#...........',
'..#.......#..#........#....#...',
'..#.#.##..#.#...##........#.##.',
'..#..........#............#....',
'..........#...............##...',
'..........###........#.#.......',
'.....###..#.............#......',
'##.............#...#.....#.....',
'.....#......#....#........#.#..',
'............#..#..............#',
'.................#...........##',
'#........#.........###.....#...',
'..#.#..............##......#.#.',
'.#...........#.........#..##..#',
'...............................',
'.#.....#..#....#....#......#...',
'.#...#......#.#..#....#.......#',
'......#.##.......#......#......',
'......#..###..#................',
'#..#.....#........##...#.......',
'......##.........##....#...##..',
'.#..........#.................#',
'#..#.......#...............#...',
'.........#..###....#.#.##.#....',
'..#...#.##..##...............##',
'.........#.....................',
'.#....##...#......#....#.......',
'............#..........#..#....',
'...#......##....#....#........#',
'.#...................#.........',
'#.#........###....#..........#.',
'.........#....#....#........##.',
'.#....#..#.........#..#........',
'...............#..#...#..#...##',
'.........#....##....#......#...',
'.#.............................',
'...#........#...#.#...#.#..#...',
'.....#..##...#.#...............',
'#.....#....#.........#.........',
'#...#...........##.........#...',
'..##........#.#...#...#......#.',
'...........#.....#...#.#.......',
'......###....#.....#...........',
'......##...#..........#....#.#.',
'.......##..##..........#.......',
'....#............#..#....##....',
'..##...................#.#.....',
'...#.#..#.#....................',
'.#..##..#............##.###..#.',
'#.#...#....#.#..........#.#....',
'........#....#.....#...........',
'..##....#...#.......#..........',
'...........##.##....#..........',
'.....#............#............',
'.......#.............#....#....',
'.................#......#......',
'......##.......#....#..##...#..',
'.#..#....#.....................',
'...#.#.#...#......##...........',
'##........##.#....#....#.......',
'.......#.....#..#..#...#.##....',
'#..........#....#.#..#..#..#...',
'...##..............#...........',
'.........#.....#.#....#.......#',
'.........#....##..#..##..#.....',
'.....#......................#..',
'...###...#..#......#...........',
'....#.....................#....',
'...............................',
'..#.....###.......#..#....#....',
'#..........#.................#.',
'......#.......###.......#..##..',
'.............#.##..............',
'......#..#.#..#...........#....',
'...#....##.#...#..#.#...#....#.',
'..................#...#....#.##',
'......#.#....#.................',
'......#.#.....#.....#..##......',
'#..##...........#..#.....#.##..'
]

for(let i=0;i<forest.length;i++) {
    forest[i]=forest[i].split("");
    //console.log(forest[i])
}

let position = forest[0][0];
console.log('start position: ', position)

let column = 0;
let row = 0;
let trees = 0;

//31 columns

for(let i=0; i<forest.length-1;i++) {
    column = column + 3;
    row = row + 1;
    if (column > 30) {
        column = column - 31
    }
    let value = forest[row][column]
    console.log('row: ' + row + ', column: ' + column + ', value: ' + value)
    if (value === '#') {
        console.log('found a tree')
        trees++;
    }
}

console.log('trees: ', trees)


