const readline = require("readline-sync");

let idade = parseInt(readline.question("qual sua idade? "));
let carteira = readline.question("Você é estudante ou idoso? (s/n) ");

if(idade<16){
    console.log("não permitido")
}else if(idade<18 || idade >=65 || carteira=="s"){
    console.log("meia")
} else {
    console.log("inteira")
}