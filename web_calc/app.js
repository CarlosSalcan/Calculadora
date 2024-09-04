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
 *  Función para actualizar el valor del display de la calculadora.
 * 
 *  @param {Event} event - El evento de clic que se dispara al presionar un botón.
 *  
 *  @description
 *  Esta función modifica el valor del campo de entrada (`input`) que actúa como pantalla de la calculadora.
 *  Si el valor del botón clicado es uno de los operadores matemáticos (`+`, `-`, `X`, `/`), el display
 *  mostrará una abreviatura correspondiente (`SUM`, `RES`, `MUL`, `DIV`). Si el valor actual en el display 
 *  es "0" o una abreviatura de operación, se reemplaza por el valor del botón clicado. En caso contrario, 
 *  el valor del botón se concatena al valor existente en el display. La función también limita el número de 
 *  caracteres permitidos en el display a 16 caracteres para evitar sobrecarga de pantalla.
 * 
 *  @example
 *  Si el display muestra "0" y se hace clic en el botón "+", el display mostrará "SUM".
 *  Si el display muestra "12" y se hace clic en el botón "*", el display mostrará "MUL".
 *  Si el display ya tiene 16 caracteres, no se añadirá ningún carácter adicional.
 * 
 *  @returns {void} - No retorna ningún valor.
 */
function actualizarDisplay(event) {
    // GET value btn click
    const buttonValue = event.target.textContent;

    // Verificar longitud de Input. Si es menor que el limte max agrega nuevo carácter.
    if (resultInput.value.length < maxLength) {
        // Mapear operadores a sus abreviaturas
        const operatorMap = {
            '+': 'SUM',
            '-': 'RES',
            'X': 'MUL',
            '/': 'DIV'
        };

        // Reemplazar operador por su abreviatura
        const displayValue = operatorMap[buttonValue] || buttonValue;

        //Reemplazar "0" por el valor del botón clicado, de lo contrario, concatenar
        if (resultInput.value === "0") {
            resultInput.value = displayValue;
        } else {
            resultInput.value += displayValue;
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
    resultInput.value = null;
}

//-------------------------------> ASIGNAR EVENTOS A BTNS
buttons.forEach(button => {
    button.addEventListener('click', actualizarDisplay);
});

clearButton.addEventListener('click', resetDisplay);