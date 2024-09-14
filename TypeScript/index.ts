console.log("Ejercicio 2: correindo desde typescript");

//Ejercicio 3
let texto: string = "Hola, TypeScript!";
let numero: number = 1234;
let booleano: boolean = true;
let fecha: Date = new Date();

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

let numeros: number = 1234;
let cadena: string = numeroCadena(numeros);
const cadenaId = document.getElementById("cadena");

if (cadenaId) {
	cadenaId.textContent = `Cadena: ` + cadena; //Al concatenar de esta manera, me aseguro que sea una cadena
}

function numeroCadena(numero: number): string {
	try {
		return numero.toString();
	} catch (error) {
		console.log(error);
		return "";
	}
}

//Ejercicio 5
let arrayNumero: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumador: number = 0;

arrayNumero.forEach((item) => {
	sumador += item;
});

const arrayId = document.getElementById("array");
if (arrayId) {
	arrayId.innerHTML = `Suma del array: ${sumador}`;
}

//Ejercicio 6
class Alumno {
    nombre: string
    edad: number
    curso: string

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre
        this.edad = edad
        this.curso = curso
    }

    mostrarHTML() {
        return `
            <p>Nombre: ${this.nombre}</p>
            <p>Edad: ${this.edad}</p>
            <p>Curso: ${this.curso}</p>
        `;
    }

}

const estudiante: Alumno = new Alumno("Valentin",21,"2PROG3")

function mostrarEstudiante(alumno: Alumno) {
    const alumnoId = document.getElementById("alumno")
    if (alumnoId) {
        alumnoId.innerHTML = alumno.mostrarHTML();
    }
}

mostrarEstudiante(estudiante);

//Ejercicio 7
type calleNumero = string | number;
type localizacion = {
    calle: calleNumero;
    ciudad: string;
    codigoPostal: number;
}

const direccion: localizacion = {
    calle: "Avenida Mitre 659",
    ciudad: "Mendoza",
    codigoPostal: 5500
}

function mostrarDireccion(direccion: localizacion) {
    const direccionId = document.getElementById("direccion")
    if (direccionId) {
        direccionId.innerHTML = `
            <p>Calle: ${direccion.calle}</p>
            <p>Ciudad: ${direccion.ciudad}</p>
            <p>Codigo Postal: ${direccion.codigoPostal}</p>
        `
    }
}

mostrarDireccion(direccion);

//Ejercicio 8
interface interfazUsuario {
    nombre: string;
    correo: string;
    saludar(): string;

}

const usuario: interfazUsuario = {
    nombre: "Valentin",
    correo: "valentincuriel03@gmail.com",

    saludar(): string {
        return "Hola, mi nombre es " + this.nombre;
    }
}

function mostrarUsuario(usuario: interfazUsuario) {
    const usuarioId = document.getElementById("usuario")
    if (usuarioId) {
        usuarioId.innerHTML = usuario.saludar();
    }
}

mostrarUsuario(usuario);

//Ejercicio 9

class Persona {
    nombre: string;
    edad: number;

    constructor(){
        this.nombre = "Valentin"
        this.edad = 21
    }

    mostrarInformacion() {
        const informacionId = document.getElementById("informacion")

        if (informacionId) {
            return informacionId.innerHTML = `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
        }
    }
}

const persona: Persona = new Persona();
persona.mostrarInformacion();

//Ejercicio 10
class Caja<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
    }
}

let cajaTexto = new Caja<string>("Mensaje secreto");
let cajaNumero = new Caja<number>(42);

const cajaTextoId = document.getElementById("cajaTexto")
const cajaNumeroId = document.getElementById("cajaNumero")

if (cajaTextoId) {
    cajaTextoId.innerHTML = `Contenido de caja de texto: ${cajaTexto.getValue()}`
}

if (cajaNumeroId) {
    cajaNumeroId.innerHTML = `Contenido de caja de numero: ${cajaNumero.getValue()}`
}

//Ejercicio 11
function identidad<T>(valor: T) {
    return valor;
}

const identidadTexto = identidad("texto");
const identidadNumero = identidad(44);

const identidadTextoId = document.getElementById("idenTexto")
const identidadNumeroId = document.getElementById("idenNumero")

if (identidadTextoId) {
    identidadTextoId.innerHTML = `Identidad de texto: ${identidadTexto}`
}

if (identidadNumeroId) {
    identidadNumeroId.innerHTML = `Identidad de numero: ${identidadNumero}`
}

//Ejercicio 12
enum Colores {
    Verde = "Verde",
    Celeste = "Celeste",
    Rojo = "Rojo"
}

const colorFavoritoId = document.getElementById("color")
if (colorFavoritoId) {
    colorFavoritoId.innerHTML = `Color favorito: ${Colores.Celeste}`
}

