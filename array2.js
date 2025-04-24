const readline = require("readline-sync");
const numeros=[ ];
const resultado=[ ];
for(let i=1; i<=3; i++){
    let numero= Number(readline.question("informe o numero "+i ))
    numeros.push(numero)
}for(let i=0; i<numeros.length; i++){
    let numero= numeros[i]*numeros[i]
    resultado.push(numero)
} console.log(resultado)