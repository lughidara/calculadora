let coma = false;
let operacion = 0;
let resultado = 0;


function calculadora(input) {
    let pantalla = document.getElementById("pantalla");
    switch (input.value) {
        //numeros
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":

            if (pantalla.innerText == "Hello world!" || pantalla.innerText == "0") {
                pantalla.innerText = input.value;
            } else {
                pantalla.innerText = pantalla.innerText + input.value;
                if (resultado == 1) {
                    pantalla.innerText = input.value;
                    resultado = 0;
                }
            };
            //console.log(pantalla.innerText);
            break;
        case "0":
            if (pantalla.innerText != "Hello world!" && pantalla.innerText != "0") {
                pantalla.innerText = pantalla.innerText + input.value;
            }
            //console.log(pantalla.innerText);
            break;

        //AC Y C
        case "←":
            pantalla.innerText = pantalla.innerText.substring(0, pantalla.innerText.length - 1);
            break;
        case "AC":
            pantalla.innerText = "Hello world!";
            coma = false;
            operacion = 0;
            //console.log(pantalla.innerText);
            resultado = 0;
            break;

        //Negativo y coma
        case "+/-":
            if (pantalla.innerText != "Hello world!" && pantalla.innerText != "0") {
                pantalla.innerText = (pantalla.innerText) * (-1);
            }
            //console.log(pantalla.innerText);
            break;
        case ",":
            if (coma == false && pantalla.innerText == "Hello world!") {
                pantalla.innerText = ("0.");
                console.log(pantalla.innerText);
                coma = true;
            } else if (coma == false && pantalla.innerText != "Hello world!") {
                pantalla.innerText = pantalla.innerText + ".";
                coma = true;
            }
            //console.log(new Intl.NumberFormat("de-DE").format(pantalla.innerText));
            break;

        //operaciones
        case "X":
            operacion++;
            if (operacion == 1) {
                pantalla.innerText = pantalla.innerText + "*";
                operacion++;
                resultado = 0;
            } else {
                pantalla.innerText = eval(pantalla.innerText);
                pantalla.innerText = pantalla.innerText + "*";
                operacion++;
                resultado = 0;
            }
            break;

        case "+":
            operacion++;
            if (operacion == 1) {
                pantalla.innerText = pantalla.innerText + "+";
                operacion++;
                resultado = 0;
            } else {
                pantalla.innerText = eval(pantalla.innerText);
                pantalla.innerText = pantalla.innerText + "+";
                operacion++;
                resultado = 0;
            }
            break;

        case "-":
            operacion++;
            if (operacion == 1) {
                pantalla.innerText = pantalla.innerText + "-";
                operacion++;
                resultado = 0;
            } else {
                pantalla.innerText = eval(pantalla.innerText);
                pantalla.innerText = pantalla.innerText + "-";
                operacion++;
                resultado = 0;
            }
            break;

        case "/":
            operacion++;
            if (operacion == 1) {
                pantalla.innerText = pantalla.innerText + "/";
                operacion++;
                resultado = 0;
            } else {
                pantalla.innerText = eval(pantalla.innerText);
                pantalla.innerText = pantalla.innerText + "/";
                operacion++;
                resultado = 0;
            }
            break;

        //igual
        case "=":
            pantalla.innerText = eval(pantalla.innerText);
            operacion = 0;
            resultado = 1;
            break;
    }
}

