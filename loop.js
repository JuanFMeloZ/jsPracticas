var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}