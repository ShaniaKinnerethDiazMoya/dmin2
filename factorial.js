const FRMFACTORIAL=document.querySelector("#frmFactorial");
FRMFACTORIAL.addEventListener("submit", calcularFactorial)
function calcularFactorial(evt) {
    evt.preventDefault();
    var numero = parseInt(document.getElementById("numero").value);

    if (numero >= 0) {
        var resultado = factorial(numero);
        document.getElementById("resultado").textContent = resultado;
        console.log("El factorial de " + numero + " es " + resultado);

        } else {
            document.getElementById("resultado").textContent = "Dame un numero mayor a 0";    
            console.log("Dame un numero mayor a 0");
    }
}

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);

    }
}