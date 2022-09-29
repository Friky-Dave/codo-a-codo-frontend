//primero creo la funcion
function calcularNotas() {
    //tomar los datos de los input ?
    //const inputNota1 = document.getElementById("nota1");
    //const valorNota1 = inputNota1.value;

    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;

    //validacion
    const notasValidas = validarNotas(nota1,nota2);//tipo  boolean

    if(!notasValidas) { // notasValidas === false
        alert('Verifique los datos ingresados');
        return;
    }

    calcularValores(nota1, nota2);    
}

function validarNotas(nota1,nota2) {
    //aca solo aplico validaciones
    if(Number(nota1) && Number(nota2)) {
        return true;
    }
    return false;
}

function calcularValores(nota1,nota2) {   
    //crear el vector de notas
    const notas = [];
 function calcularNotas() {
    //ahora que tengo el la suma de las notas, calculo el promedio
    promedio = suma / notas.length;

    //mustro los datos
    console.log(menor);
    console.log(mayor);
    console.log(promedio);
    //actualizamos html
    actualizar('menor',menor);
    actualizar('mayor',mayor);
    actualizar('promedio',promedio);
}

 function actualizar(div, valor) {
    document.getElementById(div).innerHTML = valor;
 }
