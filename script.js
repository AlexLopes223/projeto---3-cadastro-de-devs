const devForm = document.getElementById("devForm")
const addTechButton = document.getElementById("addTech")
const techContainer = document.getElementById("techContainer")
let developers = []

addTechButton.addEventListener("click", () => {
  const techDiv = document.createElement("div")
  techDiv.className = "tech-item"

  const techInput = document.createElement("input")
  techInput.type = "text"
  techInput.name = "techName"
  techInput.placeholder = "Nome da tecnologia"
  techInput.required = true

  const expLabel = document.createElement("p")
  expLabel.textContent = "Tempo de Experiência:"

  const expOptions = ["0-2 anos", "3-4 anos", "5+ anos"]
  expOptions.forEach((exp, index) => {
    const expRadio = document.createElement("input")
    expRadio.type = "radio"
    expRadio.name = `exp${Date.now()}`
    expRadio.value = exp

    const expRadioLabel = document.createElement("label")
    expRadioLabel.textContent = exp

    techDiv.appendChild(expRadio)
    techDiv.appendChild(expRadioLabel)
  })

  const removeButton = document.createElement("button")
  removeButton.type = "button"
  removeButton.textContent = "Remover"
  removeButton.addEventListener("click", () => techDiv.remove())

  techDiv.appendChild(techInput)
  techDiv.appendChild(expLabel)
  techDiv.appendChild(removeButton)
  techContainer.appendChild(techDiv)
})

devForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const devName = document.getElementById("devName").value
  const techItems = document.querySelectorAll(".tech-item")
  const technologies = []

  techItems.forEach((techItem) => {
    const techName = techItem.querySelector("input[name='techName']").value
    const expRadio = techItem.querySelector("input[type='radio']:checked")

    if (techName && expRadio) {
      technologies.push({ name: techName, experience: expRadio.value })
    }
  })

  developers.push({ name: devName, technologies })
  console.log(developers)

  devForm.reset()
  techContainer.innerHTML = ""
  alert("Desenvolvedor cadastrado com sucesso!")
})
