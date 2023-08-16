const edadIngreso = prompt('ingrese su edad')
const condicion = parseInt(edadIngreso) > 18
    if (edadIngreso >= 18) {
        alert("sos mayor de edad");
    } else {
        alert("sos menor de edad");
    }
    alert('recuerda que el calculo sirve para empleos en blanco')


function calcularIndemnizacion(salario, porcentajeIncapacidad, edad) {
    const factorEdad = 65;
    const indemnizacion = 53 * salario * (porcentajeIncapacidad / 100) * (factorEdad / edad);
    return indemnizacion;
  }

  const salario = prompt("cual es tu salario?");
  const porcentajeIncapacidad = prompt("que porcentaje de incapacidad te dictaminaron?");
  const edad = prompt('cual es la edad del accidentado?');


  const indemnizacionCalculada = calcularIndemnizacion(salario, porcentajeIncapacidad, edad);

  alert ("la indemnizacion deberia ser de: $ " + indemnizacionCalculada.toFixed(2));
