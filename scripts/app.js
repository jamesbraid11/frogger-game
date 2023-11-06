
//* Elements
const startBtn = document.querySelector('button')
const grid = document.querySelector('.game-grid')
const cells = []
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

// On keypress update cat position
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


// Enemy movement



//* Events
startBtn.addEventListener('click', )

document.addEventListener('keydown', keyPress)