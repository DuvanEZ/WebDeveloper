// Los loops (bucles), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.

var estudiantes = [ 'Maria', 'Sergio', 'Rosa', 'Daniel' ]; 

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}
/* Here we are going to create a variable in singulare in order to go throw each value of estudiantes which is the array */
for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}
/* Using shift it will took out the first element of the array and since the variable student will get that value  */
while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    var estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    saludarEstudiante(estudiante);
}