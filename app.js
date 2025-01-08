const colDivs = Array.from(document.getElementsByClassName('cell'));

let nextPlayer = 0;
let symbols = ['X', 'O'];

const winningCombinations = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],
    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],
    ['00', '11', '22'],
    ['02', '11', '20'],
];

let gameState = [[], []];

colDivs.forEach(colDiv => {
    
    colDiv.addEventListener('click', e =>{
        console.log(e.target.dataset.x, e.target.dataset.y);

        if ( !e.target.innerText ) {

        const move = e.target.dataset.y + e.target.dataset.x;
        gameState[nextPlayer].push(move);

        e.target.innerText = symbols[nextPlayer];

        isGameOver();

        nextPlayer = Number(!nextPlayer);

        console.log(gameState);
        }
    });

});

function isGameOver () {

    //let cheker = (arr, target) => target.every(v => arr.includes(v));

//  return winningCombinations.some( combination => {
//      (combination, moves) => combination.every(m => moves.includes(m));
//  });
    
    
//    winningCombinations.forEach( c => {
//        console.log(c, c.every(m => move.includes(m)))
//    });

    console.log(moves, winningCombinations.some( c, moves) => c.every(m, moves.includes(m)) );
}
