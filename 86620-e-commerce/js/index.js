const section = document.querySelector("#index main section")

const arrayFromCars = cars.map(
	car => `<div class="card" style="width: 300px">
			<img src="./img/${car.id}.webp" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">${car.brand} - ${car.name}</h5>
				<p class="card-text">
					Some quick example text to build on the card title and
					make up the bulk of the card's content.
				</p>
				<a href="./producto.html?id=${car.id}" class="btn btn-primary">
					Ver más
				</a>
			</div>
		</div>`
)

section.innerHTML = arrayFromCars.join("")
