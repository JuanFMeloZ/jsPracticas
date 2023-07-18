var piedra = 0;
var papel = 1;
var tijera = 2;
var elecion;
var maquina = Math.floor(Math.random() * 3);

function eleccion(a){
    if (a<0 || a>2){
        console.log("Elección invalida")
        elecion = undefined;
    }else{
        elecion = a;
    }
    ganador();
}

function ganador(){
    var resultado;
    if (maquina === elecion){
        console.log("Empate")
    }else{
        switch (elecion){
            case 0:
                resultado = maquina === 1 ? "Gana Maquina" : "Gana jugador";
                break;
            case 1:
                resultado = maquina === 2 ? "Gana Maquina" : "Gana jugador";
                break;
            case 2:
                resultado = maquina === 0 ? "Gana Maquina" : "Gana jugador";
                break;
            default:
                break;
        }
    console.log(resultado);
    }
    
}