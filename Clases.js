
class Usuario {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];

    }
    getFullName(){
        return (`${this.nombre}` + ` `+`${this.apellido}`)
    }
    addMascota(animal){
        return this.mascotas.push(animal)
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addLibro(nombre,autor){
        return this.libros.push({ nombre:nombre , autor:autor })           
    }
    getBooks(){
        return this.libros.map(libro => libro.nombre);
    }
}

const usuario1 = new Usuario('Jose','Perez');
const usuario2 = new Usuario('Martin','Lopez');
console.log(usuario1);
console.log(usuario2)

const nombreCompleto = usuario1.getFullName();
console.log(nombreCompleto)

const nombreCompleto2 = usuario2.getFullName();
console.log(nombreCompleto2)

usuario1.addMascota('Perro');
usuario1.addMascota('Gato');

usuario2.addMascota('Loro');
usuario2.addMascota('Pez');
usuario2.addMascota('Conejo');

const contador = usuario1.countMascotas()
console.log(contador)

const contador2 = usuario2.countMascotas()
console.log(contador2)

usuario1.addLibro('Harry Potter','Joanne Kathleen Rowling');
usuario1.addLibro('El señor de los Anillos','J. R. R. Tolkien');
usuario2.addLibro('Narnia', 'C. S. Lewis')

console.log(usuario1.libros);
console.log(usuario2.libros);

const consultaLibros = usuario1.getBooks()
console.log(consultaLibros);

const consultaLibros2 = usuario2.getBooks()
console.log(consultaLibros2);

console.log(usuario1);
console.log(usuario2);


