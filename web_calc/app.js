//-------------------------------> CONFIGURACIÓN
const maxLength = 16;  // Limitar caracteres en el display

//-------------------------------> ELEMENTOS DEL DOM
const resultInput = document.getElementById('screen');  // Seleccionar el input de la calculadora
const buttons = document.querySelectorAll('.btn');      // Seleccionar todos los botones
const clearButton = document.getElementById('btn-ac');  // Seleccionar el botón AC

/*
//-------------------------------> EVENTO CLICK
button1.addEventListener('click', function () {
    console.log('1');
});*/

//-------------------------------> FUNCIONES
/**
 *  Funcion para actualizar el valor del display de la calculadora.
 * 
 *  @param {Event} event - El evento de clic que se dispara al presionar un botón.
 *  @param {HTMLInputElement} resultInput - El campo de entrada que actúa como display de la calculadora.
 *  
 * @description
 *  Esta función se encarga de modificar el valor del campo de entrada (`input`) que actúa como 
 *  pantalla de la calculadora. Si el valor actual en el display es "0", este valor será reemplazado 
 *  por el valor del botón clicado. En caso contrario, el valor del botón se concatena al valor 
 *  existente en el display. La función también limita el num de caracteres permitidos
 *  en el display a 16 caracteres para evitar sobrecarga de pantalla.
 * 
 *  @example
 *  Si el display muestra "0" y se hace clic en el botón "5", el display mostrará "5".
 *  Si el display muestra "12" y se hace clic en el botón "3", el display mostrará "123".
 *  Si el display ya tiene 16 caracteres, no se añadirá ningún carácter adicional.
 * 
 *  @returns {void} - No retorna ningún valor.
 */
function actualizarDisplay(event) {
    // GET value btn click
    const buttonValue = event.target.textContent;

    // Verificar longitud de Input. Si es menor que el limte max agrega nuevo carácter.
    if (resultInput.value.length < maxLength) {
        console.log(resultInput.value);
        //Reemplazar "0" por el valor del botón clicado, de lo contrario, concatenar
        if (resultInput.value === "0") {
            console.log(resultInput.value);
            resultInput.value = buttonValue;
        } else {
            console.log(resultInput.value);
            resultInput.value += buttonValue;
        }
    }
}

/**
 *  Funcion para resetea el display de la calculadora al valor inicial.
 * 
 *  @description
 *  Esta función se encarga de restablecer el valor del campo de entrada (`input`) 
 *  que actúa como pantalla de la calculadora al valor "0". Es utilizada principlamente
 *  cuando se presiona el botón "AC" (All Clear) para borrar cualquier valor previamente 
 *  ingresado y reiniciar la calculadora a su estado inicial.
 *  
 *  @example
 *  Si el display muestra "123", al presionar el botón "AC", el display mostrará "0".
 *  
 *  @returns {void} - No retorna ningún valor.
 */
function resetDisplay() {
    console.log(resultInput.value);
    resultInput.value = null;
    console.log(resultInput.value);
}

//-------------------------------> ASIGNAR EVENTOS A BTNS
buttons.forEach(button => {
    button.addEventListener('click', actualizarDisplay);
});

clearButton.addEventListener('click', resetDisplay);