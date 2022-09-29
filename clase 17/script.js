//objeto vacio
const unAlumno = {
    edad: 25,
    nombre: 'carlos',
    carrera: 'ING'
};

//array/vector/arreglos vacio de alumnos
const alumnos = [    
    {
        edad: 25,
        nombre: 'carlos',
        carrera: 'ING'
    },
    {
        edad: 30,
        nombre: 'RODRIGO',
        carrera: 'LIC'
    },
    {
        edad: 29,
        nombre: 'REINALDO',
        carrera: 'MATEMATICAS'
    },
];

let sumaEdades = 0; //acumulador
//SUMAR TODAS LAS EDADES
for(let i=0; i < alumnos.length;i++ ) {
    //sumaEdades = sumaEdades +  alumnos[i].edad;
    sumaEdades +=alumnos[i].edad;
}
console.log('primer forma:', sumaEdades);

sumaEdades = 0;
for (let alumno of alumnos) { //forarch
    sumaEdades+= alumno.edad;
}
console.log('2nda forma:', sumaEdades);

//expresion lambda
//array.forarch()
sumaEdades = 0;
alumnos.forEach(alumno => sumaEdades+= alumno.edad);  //centrar en que quiero hacer
console.log('3er forma:', sumaEdades);

//-------------------------------
//LISTA DE ALUMNOS MENORES DE 40
const menoresde40 =  []; //inicializando el vector vacio
for(let alumno of alumnos) {
    if(alumno.edad < 40) {
        menoresde40.push(alumno);
    }
}
console.log('menores de 40' , menoresde40);

//filter: funcion lambda que retorna una lista de lo que se filtro
//dentro de la expresion lambda
const alumnosMenoresde40 = alumnos.filter(alumno => alumno.edad < 40); //que quiero?
console.log(alumnosMenoresde40);

//EXISTE ALGUN ALUMNO DE 25 AÑOS?"
let existe = false;
for(let i=0; i<alumnos.length && !existe  ;   i++) {
    existe = alumnos[i].edad ===25; //true|false
    
}

console.log('existe?:' , existe);

//.some() > boolean (true|false) : expresion lambda
const existeAlumno25 = alumnos.some(alumno => alumno.edad === 30);
console.log(existeAlumno25);

//quiero saber si "todos" los alumnos que tienen 35 años
let todos = true;
for(let i=0; i<alumnos.length && todos; i++) {
    todos =  alumnos[i].edad === 35;//false
}
console.log('todos:', todos);

//every: lambda > boolean
const todos2 = alumnos.every(alumno => alumno.edad === 35); //que quiero?
console.log('todos2:', todos2);

//QUIERO SOLO LOS NOMBRES DE LOS ALUMNOS
const nombres = [];
for(let alumno of alumnos ) {
    nombres.push(alumno.nombre);
}
console.log('nombres:', nombres);

//map: f(algo) > otro algo
const nombresMap = alumnos.map(alumno => alumno.nombre); //quer quiero?
console.log('nombresMap:', nombresMap);

//reduce
const sumaReduced = alumnos.reduce((acum,actual) =>  acum + actual.edad, 0); //quer quiero?
console.log('sumaReduced:', sumaReduced);

//filter
//some
//every
//map
//reduce 