function carregarDados(){
    //alert("FUNFANDO");
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.getElementById('dados').innerHTML = formatarDados(xhr.responseText);
        }
    }
    xhr.open("GET", "./js/lista.json", true);
    xhr.send();
}

function formatarDados(passDados){
    var objDados = JSON.parse(passDados);
    var linhasTabela = '';

    for(listaA of objDados['listaAlunos']){
        linhasTabela +='<tr>' +
        '<td>' + listaA['id'] + '</td>' +
        '<td>' + listaA['nome'] + '</td>' +
        '<td>' + listaA['sobrenome'] + '</td>' +
        '<td>' + listaA['idade'] + '</td>' +
        '<td>' + listaA['email'] + '</td>' +
        '</tr>';
    }
    return linhasTabela;

}