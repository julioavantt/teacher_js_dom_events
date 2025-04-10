const params = new URLSearchParams(window.location.search)
const carId = params.get("id")

const car = cars.find(c => c.id === Number(carId))

const img = document.querySelector("#producto section img")
img.src = `./img/${car.id}.webp`

const h1 = document.querySelector("#producto section h1")
h1.textContent = car.brand

const h2 = document.querySelector("#producto section h2")
h2.textContent = car.name

const h4 = document.querySelector("#producto section h4")
h4.textContent = car.price
