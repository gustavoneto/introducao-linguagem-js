// var mensagem = "Olá mundo!";
// alert(mensagem);



// var a = 2;
// var b = 3;
// var c = "Olá mundo!";

// var soma = a + b;
// var sub = a - b;
// var mult = a * b;
// var div = a / b;

// alert(soma);
// alert(sub);
// alert(mult);
// alert(div);



// if (a%2 == 1){ // operador de comparação
//     alert("Número ímpar");
// } else {
//     alert("Número par");
// }

// if (c%2 == 1){
//     alert("Número ímpar");
// } else if (c%2 == 0){
//     alert("Número par");
// } else {
//     alert("Valor inválido")
// }



// //while
// var i = 0;

// while (i < 3){
//     alert(i)
//     i = i + 1;
// }

// // for
// for ( var j = 0; j < 3; j++){
//     alert(j);
// }



// var numero = 6;
// var decimar = 4.5;
// var texto = "Olá mundo";
// var lista = ["laranja", "maçã", "banana"]

// // alert(lista)
// alert(lista[2])



// console.log("Olá munido!")


// function soma(a, b){
//     console.log(a + b);
// }
// soma(2, 3)

// function subtracao(a, b){
//     return a - b;
// }
// var s = subtracao(5, 3)
// console.log(s)

// function multiplicacao(a, b){
//     return a * b;
// }
// console.log(multiplicacao(5, 5));



// function mensagem(nome){
//     alert("Ei! Não clique em mim, " + nome + "!");
// }



// function mudaCor(cor){
//     var elemento = document.getElementById("mensagem");
//     elemento.style.color = cor
// }



function valida(){
    var nome = document.getElementById('nome');
    if (nome.nodeValue == ""){
        alert("Campo nome não pode estar em branco.");
    } else {
        alert("Nenhum problema foi detectado");
    }
}