function calculator(tipo, valor){
    if(tipo === 'acao'){
        //limperesultado no visor!! 
        if(valor === 'C') {
            document.getElementById('resultado').value ="";
        }
        //declarando a ação dos botões de operações
        if(valor === '+'||valor === '-'||valor === '*'||valor === '/'||valor === '.'){
            document.getElementById('resultado').value += valor;
        }
        //função que realiza as contas!
        if(valor === '='){
            var campoDisplay = eval(document.getElementById("resultado").value);
            document.getElementById('resultado').value = campoDisplay;
        }
    }else if(tipo === 'valor'){
        //var campoDisplay = document.getElementById('resultado').value;
        //document.getElementById('resultado').value = campoDisplay + valor;
        //enchugando o código anterior e coloca abaixo 
        document.getElementById('resultado').value += valor;
    }
    }
    console.log(tipo, valor)
}