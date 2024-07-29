
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const [valor0, , valor2, , valor4] = numeros;



const mascota = {
    nombre: 'Bony',
    tipo: 'Perro',
    color: 'Dorado',
    raza: 'Golden retriever'
};

const { nombre, tipo, color, raza } = mascota;


console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);


console.log('Valores desestructurados:', valor0, valor2, valor4);

