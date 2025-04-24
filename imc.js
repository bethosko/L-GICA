const readline = require("readline-sync");
let peso = parseInt (readline.question("qual seu peso? "));
let altura = parseFloat(readline.question("Qual sua altura? "));
let IMC= peso/(altura * altura);
console.log("Seu IMC é:"+IMC);
if(IMC <18.5){
    console.log("só a grade")
}else if(IMC >=18.5 && IMC <=24.9){
    console.log("Normal")
}else if(IMC >=25.0 && IMC <=30){
    console.log("Sobrepeso")
}else if(IMC >=30.1 && IMC <=39.9){
    console.log("Obeso")
}else{
    console.log("Obeso-Morbido")}
    