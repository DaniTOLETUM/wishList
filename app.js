console.log("starting app");

//Setting variables
let input = document.getElementById("input");
let btn = document.getElementById("btn-create");
let propositos = document.getElementById("lista-propositos");
let cumplidos = document.getElementById("lista-cumplidos");
let cantidadPendientes = document.getElementById("pendientes");
let cantidadCumplidos = document.getElementById("cumplidos");
let = document.getElementById("cumplidos");
let propsCounter;
let achievedCounter;

//Function to eliminate elements from lists
// function eliminar (li){
//     console.log("eliminando li ", li);
//     li.remove();

// }

//Function to create Cumplidos completed list elements
function createCompleted(li) {
  li = li.slice(0, -2);

  //create an element for the list
  let completedLi = document.createElement("li");
  completedLi.textContent = li;
  //add the element to completed list
  console.log("before ", cumplidos);
  cumplidos.appendChild(completedLi);
  console.log("after ", cumplidos);

  //increment the number of cumplidos
  achievedCounter = cantidadCumplidos.innerHTML;
  achievedCounter++;
  cantidadCumplidos.innerHTML = achievedCounter;
}

// creating a proposito
btn.onclick = createPropo;

function createPropo(e) {
  console.log(e);
  //take the vqlue from input
  let entrada = input.value;
  console.log(entrada);

  //create an element for the list
  let li = document.createElement("li");
  li.textContent = entrada;

  //add the element to the list
  propositos.appendChild(li);

  //increment the number of propositos
  propsCounter = cantidadPendientes.innerHTML;
  propsCounter++;
  cantidadPendientes.innerHTML = propsCounter;

  //add buttons to each li element in propositos
  let btnEliminar = document.createElement("btn");
  btnEliminar.textContent = "X";
  li.appendChild(btnEliminar);

  let btnCompleted = document.createElement("btn");
  btnCompleted.textContent = "V";
  li.appendChild(btnCompleted);

  //buttons functionality
  btnEliminar.onclick = () => {
    // eliminar(e, li);
    li.remove();
  };

  btnCompleted.onclick = () => {
    createCompleted(li.innerText);
    li.remove();
  };
}
