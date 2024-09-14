"use strict";
console.log("Ejercicio 2: correindo desde typescript");
//Ejercicio 3
let texto = "Hola, TypeScript!";
let numero = 1234;
let booleano = true;
let fecha = new Date();
const textoId = document.getElementById("texto");
const numeroId = document.getElementById("numero");
const boleanoId = document.getElementById("booleano");
const fechaId = document.getElementById("fecha");
if (textoId) {
    textoId.textContent = "Texto: " + texto;
}
if (numeroId) {
    numeroId.textContent = `Numero: ${numero}`;
}
if (boleanoId) {
    boleanoId.textContent = `Booleano: ${booleano}`;
}
if (fechaId) {
    fechaId.textContent = `Fecha: ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
}
//Ejercicio 4
let numeros = 1234;
let cadena = numeroCadena(numeros);
const cadenaId = document.getElementById("cadena");
if (cadenaId) {
    cadenaId.textContent = `Cadena: ` + cadena; //Al concatenar de esta manera, me aseguro que sea una cadena
}
function numeroCadena(numero) {
    try {
        return numero.toString();
    }
    catch (error) {
        console.log(error);
        return "";
    }
}
//Ejercicio 5
let arrayNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumador = 0;
arrayNumero.forEach((item) => {
    sumador += item;
});
const arrayId = document.getElementById("array");
if (arrayId) {
    arrayId.innerHTML = `Suma del array: ${sumador}`;
}
//Ejercicio 6
class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    mostrarHTML() {
        return `
            <p>Nombre: ${this.nombre}</p>
            <p>Edad: ${this.edad}</p>
            <p>Curso: ${this.curso}</p>
        `;
    }
}
const estudiante = new Alumno("Valentin", 21, "2PROG3");
function mostrarEstudiante(alumno) {
    const alumnoId = document.getElementById("alumno");
    if (alumnoId) {
        alumnoId.innerHTML = alumno.mostrarHTML();
    }
}
mostrarEstudiante(estudiante);
const direccion = {
    calle: "Avenida Mitre 659",
    ciudad: "Mendoza",
    codigoPostal: 5500
};
function mostrarDireccion(direccion) {
    const direccionId = document.getElementById("direccion");
    if (direccionId) {
        direccionId.innerHTML = `
            <p>Calle: ${direccion.calle}</p>
            <p>Ciudad: ${direccion.ciudad}</p>
            <p>Codigo Postal: ${direccion.codigoPostal}</p>
        `;
    }
}
mostrarDireccion(direccion);
const usuario = {
    nombre: "Valentin",
    correo: "valentincuriel03@gmail.com",
    saludar() {
        return "Hola, mi nombre es " + this.nombre;
    }
};
function mostrarUsuario(usuario) {
    const usuarioId = document.getElementById("usuario");
    if (usuarioId) {
        usuarioId.innerHTML = usuario.saludar();
    }
}
mostrarUsuario(usuario);
//Ejercicio 9
class Persona {
    constructor() {
        this.nombre = "Valentin";
        this.edad = 21;
    }
    mostrarInformacion() {
        const informacionId = document.getElementById("informacion");
        if (informacionId) {
            return informacionId.innerHTML = `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
        }
    }
}
const persona = new Persona();
persona.mostrarInformacion();
//Ejercicio 10
class Caja {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
let cajaTexto = new Caja("Mensaje secreto");
let cajaNumero = new Caja(42);
const cajaTextoId = document.getElementById("cajaTexto");
const cajaNumeroId = document.getElementById("cajaNumero");
if (cajaTextoId) {
    cajaTextoId.innerHTML = `Contenido de caja de texto: ${cajaTexto.getValue()}`;
}
if (cajaNumeroId) {
    cajaNumeroId.innerHTML = `Contenido de caja de numero: ${cajaNumero.getValue()}`;
}
//Ejercicio 11
function identidad(valor) {
    return valor;
}
const identidadTexto = identidad("texto");
const identidadNumero = identidad(44);
const identidadTextoId = document.getElementById("idenTexto");
const identidadNumeroId = document.getElementById("idenNumero");
if (identidadTextoId) {
    identidadTextoId.innerHTML = `Identidad de texto: ${identidadTexto}`;
}
if (identidadNumeroId) {
    identidadNumeroId.innerHTML = `Identidad de numero: ${identidadNumero}`;
}
//Ejercicio 12
var Colores;
(function (Colores) {
    Colores["Verde"] = "Verde";
    Colores["Celeste"] = "Celeste";
    Colores["Rojo"] = "Rojo";
})(Colores || (Colores = {}));
const colorFavoritoId = document.getElementById("color");
if (colorFavoritoId) {
    colorFavoritoId.innerHTML = `Color favorito: ${Colores.Celeste}`;
}
