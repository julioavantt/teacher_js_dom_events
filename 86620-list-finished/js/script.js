const input = document.querySelector("input")
const add = document.querySelector("#add")
const ul = document.querySelector("ul")
const error = document.querySelector(".bg-danger")

const handleAdd = () => {
	if (!input.value) {
		error.classList.remove("d-none")
		return
	}

	const li = document.createElement("li")
	const span = document.createElement("span")
	span.textContent = input.value
	li.appendChild(span)
	const borrar = document.createElement("img")
	borrar.src = "./img/eliminar.png"
	borrar.alt = "Eliminar tarea"
	borrar.onclick = () => li.remove()
	li.appendChild(borrar)
	ul.appendChild(li)
	input.value = ""
}

const handleReset = () => error.classList.add("d-none")

add.addEventListener("click", handleAdd)

input.addEventListener("keydown", handleReset)
