
//* Elements
const startBtn = document.querySelector('button')
const grid = document.querySelector('.game-grid')
let cells = []
let livesDisplay = document.querySelector('.lives-display')
let scoreDisplay = document.querySelector('.score-display')
let highScoreDisplay = document.querySelector('.high-score-display')

//* Variables
let lives = 3
let score = 0
let gameActive = false
const startPos = 50
let currentPos = startPos
const width = 10
const cellCount = width * width

scoreDisplay.innerText = score

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

// Must call create grid function before using methods on it
createGrid()

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

//! Enemy movement
// Enemy movement column 1
// Define column in grid as an array
const enemyCol1 = cells.filter(cell => parseInt(cell.id) % 10 === 1)
console.log(enemyCol1)

// Create pattern of classes in an array to assign to the column
const col1Classes = ['dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank', 'dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank']

// Create function to remove classes from column, reconfigure col1Classes array, then reassign classes to column
function col1Movement() {
  setInterval(() => {
    enemyCol1.forEach(cell => {
      cell.classList.remove('blank', 'dark-figure')
    })
    col1Classes.unshift(col1Classes[9])
    col1Classes.pop(col1Classes[9])
    enemyCol1.forEach((cell, i) => {
      cell.classList.add(col1Classes[i])
    })
  }, 1000)
}

// Enemy movement column 2
const enemyCol2 = cells.filter(cell => parseInt(cell.id) % 10 === 2)
console.log(enemyCol2)

const col2Classes = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'lexaeus']

function col2Movement() {
  setInterval(() => {
    enemyCol2.forEach(cell => {
      cell.classList.remove('blank', 'lexaeus')
    })
    col2Classes.push(col2Classes[0])
    col2Classes.shift(col2Classes[0])
    enemyCol2.forEach((cell, i) => {
      cell.classList.add(col2Classes[i])
    })
  }, 500)
}

// Enemy movement column 4
const enemyCol4 = cells.filter(cell => parseInt(cell.id) % 10 === 4)
console.log(enemyCol4)

const col4Classes = ['dark-figure', 'blank', 'dark-figure', 'blank', 'dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank', 'dark-figure']

function col4Movement() {
  setInterval(() => {
    enemyCol4.forEach(cell => {
      cell.classList.remove('blank', 'dark-figure')
    })
    col4Classes.push(col4Classes[0])
    col4Classes.shift(col4Classes[0])
    enemyCol4.forEach((cell, i) => {
      cell.classList.add(col4Classes[i])
    })
  }, 1000)
}

// Enemy movement column 5
const enemyCol5 = cells.filter(cell => parseInt(cell.id) % 10 === 5)
console.log(enemyCol5)

const col5Classes = ['larxene', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']

function col5Movement() {
  setInterval(() => {
    enemyCol5.forEach(cell => {
      cell.classList.remove('blank', 'larxene')
    })
    col5Classes.unshift(col5Classes[9])
    col5Classes.pop(col5Classes[9])
    enemyCol5.forEach((cell, i) => {
      cell.classList.add(col5Classes[i])
    })
  }, 500)
}

// Enemy movement column 7
const enemyCol7 = cells.filter(cell => parseInt(cell.id) % 10 === 7)
console.log(enemyCol7)

const col7Classes = ['dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank', 'dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank']

function col7Movement() {
  setInterval(() => {
    enemyCol7.forEach(cell => {
      cell.classList.remove('blank', 'dark-figure')
    })
    col7Classes.unshift(col7Classes[9])
    col7Classes.pop(col7Classes[9])
    enemyCol7.forEach((cell, i) => {
      cell.classList.add(col7Classes[i])
    })
  }, 1000)
}

// Enemy movement column 8
const enemyCol8 = cells.filter(cell => parseInt(cell.id) % 10 === 8)
console.log(enemyCol2)

const col8Classes = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'marluxia']

function col8Movement() {
  setInterval(() => {
    enemyCol8.forEach(cell => {
      cell.classList.remove('blank', 'marluxia')
    })
    col8Classes.push(col8Classes[0])
    col8Classes.shift(col8Classes[0])
    enemyCol8.forEach((cell, i) => {
      cell.classList.add(col8Classes[i])
    })
  }, 500)
}

// Must call function movement before collision function
col1Movement()
col2Movement()
col4Movement()
col5Movement()
col7Movement()
col8Movement()

// Collision function
function collision(evt) {
  // If hit any enemies
  if (evt.target.classList.contains('dark-figure' || 'lexaeus' || 'larxene' || 'marluxia')) {
    // Remove character from current position
    removeChar(currentPos)
    console.log(currentPos)
    // Add character to start position
    currentPos = startPos
    console.log(currentPos)
    addChar(currentPos)
    console.log(currentPos)
  //   // Remove a life
  //   lives -= 1
  //   // Update lives display
  //   livesDisplay.innerText = '💚'.repeat(lives)
  //   // Check for game over
  //   // if (lives === 0) {
  //   //   gameOver()
  //   // }
  // }
  }
}
// // Game over function
// function gameOver {

// }

// * On Page Load






// enemyCol1.forEach(function(cell, index) {
//   if (cell.classList.contains('dark-figure')) {
//     // cell.classList.remove('dark-figure')
//     // if (parseInt(cell[index]) === 0) {
//     //   cell[9].classList.add('dark-figure')
//     // } else {
//     cell[index - 1].classList.add('dark-figure')
//   }
// })

// enemyCol1.forEach(function(cell, index) {
//   if (cell.classList.contains('dark-figure')) {
//     if (parseInt(cell[index]) > enemyCol1.length - 1) {
//       cell[0].classList.add('dark-figure')
//     } else {
//       cell[index + 1].classList.add('dark-figure')
//     }
//     cell.classList.remove('dark-figure')
//   }
// })




// Set enemy class to move along the array
// Set this to happen at an interval
// Loop the array back on itself so the sequence and movement continue

// Enemy movement



//* Events
// startBtn.addEventListener('click', )

document.addEventListener('keydown', keyPress)