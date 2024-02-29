var SalarioActual
var Aumento
var SalarioAjustado
SalarioActual=parseFloat(prompt("Ingrese su salario actual"));
Aumento=parseFloat(Aumento);
if (SalarioActual<1300606) {
   Aumento=SalarioActual*0.15 
} else {
  Aumento=0  
}
  SalarioAjustado=SalarioActual+Aumento;
  alert("Su salario con ajuste es igual a  "+SalarioAjustado)  
