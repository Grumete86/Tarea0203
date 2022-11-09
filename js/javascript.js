function ejercicio1(exp){
    document.write('<div class="space"> </div>');
    document.write('<p>Funcion que se llama: ejercicio1</p>');
    document.write(`<p>Parámetro que se pasa: ${exp}</p>`);
    function comprobarPalindromos(texto){
        var re=/[\W]/g;
        texto=texto.replace('á','a');
        texto=texto.replace('é','e');
        texto=texto.replace('í','i');
        texto=texto.replace('ó','o');
        texto=texto.replace('ú','u');
        texto=texto.replace(re,'');
        texto=texto.toLowerCase();
        let texto2=texto.split('');
        texto2=texto2.reverse();
        texto2=texto2.join('');
        return texto===texto2;
    }

    if (comprobarPalindromos(exp)){
        document.write(`<p>El texto: "${exp}." Es un palíndromo.</p>`);
    }else{
        document.write(`<p>El texto: "${exp}." No es un palíndromo.</p>`);
    }
}

function ejercicio2(exp){
    document.write('<div class="space"> </div>');
    document.write('<p>Funcion que se llama: ejercicio2</p>');
    document.write(`<p>Parámetro que se pasa: ${exp}</p>`);
}