const board = document.querySelector('#board')
const colors = ['#c88383', '#9ab2d1', '#a0d19a', '#b883d4', '#dce09a', '#5660a9', '#8f56a9']
const squarsNumber = 400

for (let i = 0; i < squarsNumber; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#222222'
    element.style.boxShadow = `0 0 2px #222222`
}

/*function getColor(){
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}*/
function getColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}
