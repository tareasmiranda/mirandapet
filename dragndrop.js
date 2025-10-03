let newX = 0, newY = 0, startX = 0, startY = 0;

const comida = document.getElementById('comida')
const pet = document.getElementById('petExp')

comida.addEventListener('mousedown', mouseDown)
pet.addEventListener('dragover', dragOver)

function dragOver(e){
    e.preventDefault();
    pet.src = ("img/mirandasketchaaaa.png")
}

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
    console.log("hoal")
}

function mouseMove(e){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
  
    startX = e.clientX
    startY = e.clientY

    comida.style.top = (comida.offsetTop - newY) + 'px'
    comida.style.left = (comida.offsetLeft - newX) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}