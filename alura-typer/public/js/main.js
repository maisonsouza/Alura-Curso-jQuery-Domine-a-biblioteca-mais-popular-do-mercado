var tempoInicial = $("#tempoRestante").text();
var campo = $(".campodigitacao");

$(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botaoReiniciar").click(reiniciaJogo);

});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#quantidadepalavras");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores(){
    campo.on("input", function () {
        var conteudo_digitado = campo.val();
        var palavrasdigitadas = conteudo_digitado.split(/\S+/).length - 1;
        $('#contador-palavras').text(palavrasdigitadas);
        var caracteresdigitados = conteudo_digitado.length;
        $("#contador-caracteres").text(caracteresdigitados);
    });
}


function inicializaCronometro() {
    var tempoRestante = $('#tempoRestante').text();
    campo.one("focus", function () {
        var id = setInterval(function () {
            tempoRestante--;
            $('#tempoRestante').text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(id);
            }
        }, 1000);
    });
}


function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempoRestante").text(tempoInicial);
    inicializaCronometro();
}

$("#botao-reiniciar").click(reiniciaJogo);

