var frase = $(".frase").text();
var numpalavras = frase.split(" ").length;
var tamanhoFrase = $("#quantidadepalavras");
tamanhoFrase.text(numpalavras);
console.log(frase);
console.log(tamanhoFrase);