console.log("starting app");

//Setting variables
let input = document.getElementById("input");
let btn = document.getElementById("btn-create");
let propositos = document.getElementById("lista-propositos");
let cumplidos = document.getElementById("lista-cumplidos");
let cantidadPendientes = document.getElementById("pendientes");
let cantidadCumplidos = document.getElementById("cumplidos");
let propsCounter;


// creating a proposito
btn.onclick = createPropo;

function createPropo(e) {
    console.log(e);
    //tqke the vqlue from input
    let entrada = input.value;
    console.log(entrada);

    //create an element for the list
    let li = document.createElement("li");
    li.textContent = entrada;

    //add the element to the list 
    propositos.appendChild(li);

    //increment the number of propositos
    propsCounter = cantidadPendientes.innerHTML;
    propsCounter ++;
    cantidadPendientes.innerHTML = propsCounter

}

