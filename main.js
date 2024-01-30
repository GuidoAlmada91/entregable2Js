const btn = document.getElementById("btn")
const container = document.querySelector("#container")
const registros = []
const inputNombre = document.getElementById("nombre")
const inputGrupo = document.getElementById("grupoMuscular")
const inputEjercicio = document.getElementById("ejercicio")
const inputPeso = document.getElementById("peso")
const inputFecha = document.getElementById("fecha")

btn.addEventListener("click", function () {

    let nombre = inputNombre.value;
    let grupoMuscular = inputGrupo.value;
    let ejercicio = inputEjercicio.value;
    let peso = inputPeso.value;
    let fecha = inputFecha.value;

    const nuevoRegistro = {
        nombre: nombre,
        grupoMuscular: grupoMuscular,
        ejercicio: ejercicio,
        peso: peso
    }

    registros.push(nuevoRegistro)
    localStorage.setItem("registros", JSON.stringify(registros))
    

    const newCard = document.createElement("div")
    newCard.id = "containerCards";

    newCard.classList.add("card")
    newCard.innerHTML = `
    <h3 id="registro">Registro Existoso</h3>
    <h3>${fecha} </h3>
    <h2>${nombre} </h2>
    <h3>Grupo Muscular: ${grupoMuscular} </h3>
    <h3>Ejercicio: ${ejercicio} </h3>
    <h3>Peso: ${peso} </h3>


`
    container.appendChild(newCard)
    inputNombre.value = "";
    inputGrupo.value = "";
    inputEjercicio.value = "";
    inputPeso.value = "";
})