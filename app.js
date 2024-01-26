let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function botonConsole() {
    console.log('El botón fue clicado');
}

function botonPrompt() {
    let ciudad = prompt('Nombre de una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}

function botonAlert() {
    alert('Yo amo JS');
}

function botonSuma() {
    let num1 = parseInt(prompt('Ingresa numero 1 a sumar'));
    let num2 = parseInt(prompt('Ingresa numero 2 a sumar'));
    let resultado = num1 + num2;
    alert(`La suma de ${num1} + ${num2} es = ${resultado}`);
}