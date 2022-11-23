console.log("starting app");

//Setting variables
let input = document.getElementById("input");
let btn = document.getElementById("btn-create");
let propositos = document.getElementById("lista-propositos");
let cumplidos = document.getElementById("lista-cumplidos");


console.log(input);
console.log(btn);
console.log(propositos);
console.log(cumplidos);


// creating a proposito
btn.onclick = createPropo;

function createPropo(e) {
    console.log("button clicked");
    let entrada = input.value;
    console.log(entrada);
}

