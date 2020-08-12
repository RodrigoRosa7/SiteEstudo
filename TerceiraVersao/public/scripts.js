const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll('.card')
const cursos = document.querySelectorAll('.curso')

for (let card of cards) {
  card.addEventListener('click', function(){
    const videoId = card.getAttribute('id')
    window.location.href = `/video?id=${videoId}`
  })
}

/* ===== Cursos ====*/

for (let curso of cursos) {
  curso.addEventListener('click', function(){
    const cursoId = curso.getAttribute('id')
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`
  })
}

document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active')
  modalOverlay.document.querySelector('iframe').src = ''
})