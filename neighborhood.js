const resturants = ['Sparkys','Si Senors','La posta','Blakes']

const random = Math.floor(Math.random() * resturants.length)

const randomElement = resturants[Math.floor(Math.random() * resturants.length)]

let resturantButton = document.querySelector('.rndmBtn')

const getResturant =(element)=>{
  element.preventDefault()
  alert(randomElement)
}

resturantButton.addEventListener('click', getResturant)