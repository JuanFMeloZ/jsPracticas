//Piedra papel o tijera, validacion

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
    if (maquina === elecion){
        console.log("Empate")
    }else if(maquina === piedra && elecion === papel){
        console.log("Gana Jugador")
    }else if(maquina === piedra && elecion === tijera){
        console.log("Gana maquina")
    }else if(maquina === papel && elecion === tijera){
        console.log("Gana Jugador")
    }else if(maquina === papel && elecion === piedra){
        console.log("Gana maquina")
    }else if(maquina === tijera && elecion === piedra){
        console.log("Gana Jugador")
    }else if(maquina === tijera && elecion === papel){
        console.log("Gana maquina")
    }else{
        console.log("")
    }
}