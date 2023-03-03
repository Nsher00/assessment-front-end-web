let myColor = document.querySelector('#color')
let myPlace = document.querySelector('#place')
let myRitual = document.querySelector('#ritual')

const colorAlert = (event) =>{
  event.preventDefault()
  alert('My favorite color is Navy.')
}
const placeAlert = (event) =>{
  event.preventDefault()
  alert('My favorite place is Ruidoso.')
}
const ritualAlert = (event) =>{
  event.preventDefault()
  alert('My favorite ritual is nightly showers.')
}

myColor.addEventListener('click', colorAlert)
myPlace.addEventListener('click', placeAlert)
myRitual.addEventListener('click', ritualAlert)