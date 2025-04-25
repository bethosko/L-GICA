const readline = require("readline-sync");
let nota_1 = parseInt (readline.question("nota parcial 1? "));
let nota_2 = parseFloat(readline.question("nota parcial 2? "));
let nota_3= parseFloat(readline.question("nota parcial 3? "));
let nota_4 = parseFloat(readline.question("nota final? "));

let media= (nota_1 + nota_2 + nota_3 + nota_4) / 4;
console.log("Sua nota final é:"+media);
if(media <5){
    console.log("Reprovado")
}else if((media >=5) && (media <=7)){
    console.log("recuperaçao")
}else{
    console.log("APROVADO")}
