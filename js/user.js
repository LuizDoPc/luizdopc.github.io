$( document ).ready(function() {
    $(".teste").click(function () {
        var conteudo = $(this).html();
        conteudo += "teste";
        conteudo.replace("")

    });
});