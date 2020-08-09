const dots = document.querySelectorAll('.slide-page span');
const cards = document.querySelectorAll('.commets-cards');

function slides(n) {
  cards.forEach((card, i) => {
    if (i === n) {
      card.style.display = "grid"
      dots[n].style.backgroundColor = '#f25f3a'
    } else {
      card.style.display = "none"
    }
  })
} slides(n = 0);

document.querySelector('.slide-page').addEventListener("click", () => {
  dots.forEach((dot, i) => {
    dot.addEventListener("click", (e) => {
      dots.forEach((dot) => dot.style.backgroundColor = "white")
      slides(i)
    })
  })
})




let myElement = document.querySelector('.slide-container')
let hammer = new Hammer(myElement)
let i = 0;
hammer.on('swipeleft', event => {
  if (i < 3)
    i++
  dots.forEach((dot) => dot.style.backgroundColor = "white")
  slides(i)

})
hammer.on('swiperight', event => {
  if (i >= 1)
    i--
  dots.forEach((dot) => dot.style.backgroundColor = "white")
  slides(i)

})
