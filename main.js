function mostrar(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    
    var n = document.getElementById("nombre_completo").value = nombre.concat(" " + apellido)
        
    return n;
}


function sumar(){

    var Dia1 = parseInt(document.getElementById("Dia1").value)
    var Dia2 = parseInt(document.getElementById("Dia2").value),
        Dia3 = parseInt(document.getElementById("Dia3").value),
        Dia4 = parseInt(document.getElementById("Dia4").value),
        Dia5 = parseInt(document.getElementById("Dia5").value),
        Dia6 = parseInt(document.getElementById("Dia6").value),
        Dia7 = parseInt(document.getElementById("Dia7").value);


    /*if(Dia1 != ""){
        var suma = Dia1;
    }
    if(Dia1 != "" && Dia2 != ""){
        var suma = Dia1 + Dia2;
    }
    if(Dia1 != "" && Dia2 != "" && Dia3 != ""){
        var suma = Dia1 + Dia2 + Dia3;
    }
    if(Dia1 != "" && Dia2 != "" && Dia3 != "" && Dia4 != ""){
        var suma = Dia1 + Dia2 + Dia3 + Dia4;
    }
    if(Dia1 != "" && Dia2 != "" && Dia3 != "" && Dia4 != "" && Dia5 != ""){
        var suma = Dia1 + Dia2 + Dia3 + Dia4 + Dia5;
    }
    if(Dia1 != "" && Dia2 != "" && Dia3 != "" && Dia4 != "" && Dia5 != "" && Dia6 != ""){
        var suma = Dia1 + Dia2 + Dia3 + Dia4 + Dia5 + Dia6;
    } */
    if(Dia1 != "" && Dia2 != "" && Dia3 != "" && Dia4 != "" && Dia5 != "" && Dia6 != "" && Dia7 != ""){
        var suma = Dia1 + Dia2 + Dia3 + Dia4 + Dia5 + Dia6 + Dia7;
    }
    

    var result = document.getElementById("total").value = suma;

    return result;
}


function sumar5(){
    var Dia1 = parseInt(document.getElementById("Dia1").value),
        Dia2 = parseInt(document.getElementById("Dia2").value),
        Dia3 = parseInt(document.getElementById("Dia3").value),
        Dia4 = parseInt(document.getElementById("Dia4").value),
        Dia5 = parseInt(document.getElementById("Dia5").value);      


    if(Dia1 != "" && Dia2 != "" && Dia3 != "" && Dia4 != "" && Dia5 != ""){
        var suma = Dia1 + Dia2 + Dia3 + Dia4 + Dia5;
    }

    var result = document.getElementById("cinco").value = suma;

    return result;
}
