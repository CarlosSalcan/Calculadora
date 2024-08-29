//-------------------------------> SELECCIONAR BTN
const buttons = document.querySelectorAll('.btn');

//-------------------------------> SELECCIONAR INPUT
const resultInput = document.getElementById('screen');

/*
//-------------------------------> EVENTO CLICK
button1.addEventListener('click', function () {
    console.log('1');
});*/

/**
 *  Funcion para actualizar el valor del display de la calculadora.
 * 
 *  @param {Event} event - El evento de clic que se dispara al presionar un botón.
 *  @param {HTMLInputElement} resultInput - El campo de entrada que actúa como display de la calculadora.
 * 
 *  
 * @description
 *  Esta función se encarga de modificar el valor del campo de entrada (`input`) que actúa como 
 *  pantalla de la calculadora. Si el valor actual en el display es "0", este valor será reemplazado 
 *  por el valor del botón clicado. En caso contrario, el valor del botón se concatena al valor 
 *  existente en el display.
 * 
 *  @example
 *  Si el display muestra "0" y se hace clic en el botón "5", el display mostrará "5".
 *  Si el display muestra "12" y se hace clic en el botón "3", el display mostrará "123".
 * 
 *  @returns {void} - No retorna ningún valor.
 */
function actualizarDisplay(event) {
    // GET value btn click
    const buttonValue = event.target.textContent;

    //Reemplazar "0" por el valor del botón clicado, de lo contrario, concatenar
    if (resultInput.value === "0") {
        resultInput.value = buttonValue;
    } else {
        resultInput.value += buttonValue;
    }
}

//-------------------------------> ASIGNAR A BTNS
buttons.forEach(button => {
    button.addEventListener('click', actualizarDisplay);
});