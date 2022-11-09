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
    generador(exp);
    function generador(text){
        document.write(`<p>Resultado: `);
        for(let i=0;i<text.length;i++){
            let substr = text.substring(i,text.length);
            for(let j=0;j<substr.length;j++){
                document.write(`${substr.substring(0,j+1)}`);
                if(i!==text.length-1 || j!==substr.length-1){
                    document.write(`, `);
                }
            }
        }
        document.write(`</p>`);
    }
}

function ejercicio3(exp){
    document.write('<div class="space"> </div>');
    document.write('<p>Funcion que se llama: ejercicio3</p>');
    document.write(`<p>Parámetro que se pasa: ${exp}</p>`);
    let str=exp.split('');
    str.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
    str.reverse();
    str=str.join('');
    document.write(`<p>Resultado: ${str}</p>`);
}

function ejercicio4(exp){
    document.write('<div class="space"> </div>');
    document.write('<p>Funcion que se llama: ejercicio4</p>');
    document.write(`<p>Parámetro que se pasa: ${exp}</p>`);
    let str=exp.split(' ');
    str.sort((a,b)=>{
        if(a.length>b.length){return -1;}
        else if(a.length<b.length){return 1;}
        else {return 0;}
    });
    document.write(`<p>Resultado: ${str[0]}</p>`);
}

function ejercicio5(exp){
    document.write('<div class="space"> </div>');
    document.write('<p>Funcion que se llama: ejercicio5</p>');
    document.write(`<p>Parámetro que se pasa: ${exp}</p>`);
    let str = exp;
    let re=/[^AEIOUaeiouáéíóú]/g;
    str = str.replace(re,'');
    document.write(`<p>RESULTADO: ${str.length}</p>`);

}

function ejercicio6(exp){
    document.write('<div class="space"> </div>');
    document.write('<p>Funcion que se llama: ejercicio6</p>');
    document.write(`<p>Parámetro que se pasa: ${exp}</p>`);
    let res = typeof exp;
    document.write(`<p>RESULTADO: ${res}</p>`);
}

function ejercicio7(exp, arr){
    document.write('<div class="space"> </div>');
    document.write('<p>Funcion que se llama: ejercicio7</p>');
    document.write(`<p>Parámetro que se pasa: ${exp} $</p>`);
    let q,r,qr;
    document.write(`<p>RESULTADO: `)
    qr=exp;
    for (let i=0;i<arr.length;i++){
        q=(qr/arr[i])>>0;
        r=qr%arr[i];
        if(q!==0){
        document.write(`${q} monedas de ${arr[i]} $`);
            if(r!==0){
                document.write(`, `);
            }
        }
        qr=r;
    }
    document.write(`</p>`)
}

function ejercicio8(exp){
    document.write('<div class="space"> </div>');
    document.write('<p>Funcion que se llama: ejercicio8</p>');
    document.write(`<p>Parámetro que se pasa: ${exp}</p>`);
    exp=exp.toLowerCase();
    let re=/[^A-z]/g;
    exp=exp.replace('á','a');
    exp=exp.replace('é','e');
    exp=exp.replace('í','i');
    exp=exp.replace('ó','o');
    exp=exp.replace('ú','u');
    exp=exp.replace(re,'');
    let car='';
    for(l of exp){
        if(!car.includes(l)){
            car +=l;
        }
    }
    document.write(`<p>RESULTADO: ${car}`)
}

function ejercicio9(exp){
    document.write('<div class="space"> </div>');
    document.write('<p>Funcion que se llama: ejercicio9</p>');
    document.write(`<p>Parámetro que se pasa: ${exp} (Se espera una cadena con ${exp} valores)</p>`);
    let values='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str=[exp];
    values.split('');
    for(let i=0;i<exp;i++){
        str[i] = values[Math.floor(Math.random()*values.length)+1];
    }
    str=str.join('');
    document.write(`<p>RESULTADO: ${str}</p>`);

}