const header = document.querySelector('h1')

const aprendizados = ['HTML', 'CSS', 'JAVASCRIPT']
let index = 0
let characteres = 0

function atualizar() {
  characteres++
  header.innerText = `${aprendizados[index].slice(0,characteres)}`
  if (aprendizados[index].length === characteres) {
    index++
    characteres = 0
  }
  if (aprendizados.length === index) {
    index = 0
  }
  setTimeout(atualizar, 500)
}
atualizar()