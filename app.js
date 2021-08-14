
const cookie2 = document.getElementById('cookie2')
const cream = document.querySelector('.cream')
const leftHand = document.querySelector('.left-hand2')
const palm = document.querySelector('.hand')
const rightDown = document.querySelector('.right-down')
const rhand = document.querySelector('.rhand')
const phone = document.querySelector('.phone')
const eyes = document.querySelector('.eyes')
const mouth = document.querySelector('.mouth')
var timer
// var checker
document.querySelector('.cmon').addEventListener('click', activate)
function activate () {
  cookie2.style.animationName = 'move'
  cream.style.animationName = ' creammove2'
  leftHand.style.animationName = 'yipee'
  palm.style.animationName = 'handmove'
  rightDown.style.animationName = 'rightDownMove'
  rhand.style.animationName = 'rhandmove'
  phone.style.animationName = 'phoneMove'
  eyes.style.animationName = 'eyemove'
  mouth.style.animationName = 'mouthmove'

  timer = setInterval(() => {
    window.scrollBy(0, 2)
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.querySelector('.cmon').removeEventListener('click', activate)
      setTimeout(() => {
        clearInterval(timer)
      }, 2000)
    }
  }, 18)

/*   checker = setInterval(() => {
    let scrollTop = document.documentElement.scrollTop
    let scrollLeft = document.documentElement.scrollLeft
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop)
    }
  }, 1) */
}
