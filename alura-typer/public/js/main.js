var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#quantidadepalavras");
tamanhoFrase.text(numPalavras);
var campo = $(".campodigitacao");
campo.on("input",function () {
   var conteudo_digitado = campo.val();
   var palavrasdigitadas = conteudo_digitado.split(/\S+/).length-1;
   $('#contador-palavras').text(palavrasdigitadas);
   var caracteresdigitados = conteudo_digitado.length;
   $("#contador-caracteres").text(caracteresdigitados);
});

