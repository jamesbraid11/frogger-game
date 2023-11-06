
//* Elements
const startBtn = document.querySelector('button')
const grid = document.querySelector('.game-grid')
let cells = []
const livesDisplay = document.querySelector('.lives-display')
const scoreDisplay = document.querySelector('.score-display')
const highScoreDisplay = document.querySelector('.high-score-display')

//* Variables
let lives = 3
let score = 0
let gameActive = false
const startPos = 50
let currentPos = startPos
const width = 10
const cellCount = width * width


//* Executions
// Grid creator function
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.innerText = i
    cell.id = i
    // Set width and height of the div cells
    cell.style.width = `${100 / width}%`
    grid.append(cell)
    cells.push(cell)
  }
  addChar(currentPos)
}

// Character movement
function addChar() {
  cells[currentPos].classList.add('char')
}

function removeChar() {
  cells[currentPos].classList.remove('char')
}

// On keypress update character position
function keyPress(evt) {
  const key = evt.code

  removeChar()
  
  if (key === 'ArrowUp' && currentPos >= width) {
    currentPos -= width
  } else if (key === 'ArrowDown' && currentPos + width < cells.length) {
    currentPos += width
  } else if (key === 'ArrowLeft' && currentPos % width !== 0) {
    currentPos--
  } else if (key === 'ArrowRight' && currentPos % width !== width - 1) {
    currentPos++
  }

  addChar()

}

// * On Page Load
createGrid()

// Enemy appearance
// Define column in grid as an array
const enemyCol1 = cells.filter(cell => parseInt(cell.id) % 10 === 1)
console.log(enemyCol1)
// Add enemy class to pattern of cells using their index in the array
enemyCol1[1].classList.add('dark-figure')
enemyCol1[2].classList.add('dark-figure')
enemyCol1[4].classList.add('dark-figure')
enemyCol1[6].classList.add('dark-figure')
enemyCol1[7].classList.add('dark-figure')
enemyCol1[9].classList.add('dark-figure')



// enemyCol1.forEach((cell) => {
//   if (parseInt(cell.id) === 11, 21) {
//     cell.classList.add('dark-figure')
//     console.log(enemyCol1)
//   }
// })

// Once enemy classes are added to a pattern of cells, use a forEach to iterate over them and move any instance of that class down the grid by one (using same logic as character movement) Put this in a setInterval so that it happens every n seconds


enemyCol1.forEach(function(cell, index) {
  if (cell.classList.contains('dark-figure')) {
    cell.classList.remove('dark-figure')
    cell[index + 1].classList.add('dark-figure')
  }
})

// Set enemy class to move along the array
// Set this to happen at an interval
// Loop the array back on itself so the sequence and movement continue

// Enemy movement



//* Events
// startBtn.addEventListener('click', )

document.addEventListener('keydown', keyPress)