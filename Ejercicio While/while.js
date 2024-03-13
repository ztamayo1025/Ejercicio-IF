var numeroNatural=0;
var resultadoSuma=0;
var control=0;
numeroNatural=parseInt(prompt("Ingrese el número natural al que le quiere encontrar su suma sucesiva"));
while (control<=numeroNatural) {
    resultadoSuma = resultadoSuma + control;
    control = control+1;
    
    
}
alert("la suma de los " +numeroNatural + " primeros números naturales es igual a " +resultadoSuma)

