$(document).ready(function(){
    $.ajax({
        url: 'ajax.php',
        type: 'get',
        dataType: 'JSON',
        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var nomeDisciplina = response[i].nome_disciplina;
                var primeiro_bimestre = response[i].primeiro_bimestre;
                var segundoBimestre = response[i].segundo_bimestre;
                var terceiroBimestre = response[i].terceiro_bimestre;
                var quartoBimestre = response[i].quarto_bimestre;

                if(primeiroBimestre === null){
                    primeiroBimestre = 0;
                } else if (segundoBimestre === null){
                    segundoBimestre = 0;
                } else if (terceiroBimestre === null){
                    terceiroBimestre = 0;
                } else if (quartoBimestre === null){
                    quartoBimestre = 0;
                }

                var tr_str = "<tr>" +
                    "<td align='center'>" + id + "</td>" +
                    "<td align='center'>" + nomeDisciplina + "</td>" +
                    "<td align='center'>" + primeiroBimestre+ "</td>" +
                    "<td align='center'>" + segundoBimestre + "</td>" +
                    "<td align='center'>" + terceiroBimestre + "</td>" +
                    "<td align='center'>" + quartoBimestre + "</td>" +
                    "</tr>";

                $("#userTable tbody").append(tr_str);
            }

        }
    });
});