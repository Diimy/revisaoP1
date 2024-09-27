/*

const nome = "Jose";
console.log(nome);
console.log(typeof nome); //type = string
const idade = 21;
console.log(idade);
console.log(typeof idade); //type = number



let numero = 23;
let roupa = "calca";

console.log("\n"+ numero);
console.log(typeof numero); //type = number
console.log(roupa);
console.log(typeof roupa); //type = string


var ddd = 11;
var objeto = "abajur";

console.log("\n"+ ddd);
console.log(typeof ddd); //type = number
console.log(objeto);
console.log(typeof objeto); //type = string

*/

/*
const teste = ["Andre", "Claudio", "Teodoro", "Salvador", "Auriccio"];
console.log(teste);

const mtdUtilitario = teste.filter((n) => n.startsWith("A"));
console.log("\n");
console.log(mtdUtilitario);
*/


/*
const ehPar = (valor) => {
    return valor % 2 === 0;
}
console.log(ehPar(10));


let dois = () => console.log(2);
dois()

const soma = (a, b) => console.log(a + b);
soma(2, 3);

function f (){
    let nome = "Joao";
    function g(){
        console.log(nome);
    }
    g();
}
f();
*/
// f(1)  eh determinado que 'f is not defined'


function demorada(tempo) {
    console.log(`demorada ${tempo}`);
    const atualMaisTempo = new Date().getTime() + tempo;
    while (new Date().getTime() <= atualMaisTempo);
    const d = 8 + 4 ;
    return d;
}

setTimeout(function(){demorada(2000)}, 2000);
setTimeout(function(){demorada(1000)}, 1000);
console.log("Fim do script principal");