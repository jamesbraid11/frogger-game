
//* Elements

const grid = document.querySelector('.game-grid')
const cells = []



//* Variables
const width = 10
const cellCount = width * width



//* Executions
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
  // addCat(currentPos)
}


// * Page Load
createGrid()










//* Events