const FRMSERIE=document.querySelector("#frmSerie");
FRMSERIE.addEventListener("submit", generarFibonacci)
function generarFibonacci(evt) {
    evt.preventDefault();
    var numTerminos = parseInt(document.getElementById("numTerminos").value);

    if (numTerminos >= 0) {
        console.log("Serie de Fibonacci:");

        for (var a = 0; a < numTerminos; a++) {
            console.log(fibonacci(a));
            document.getElementById("resultado").textContent = (fibonacci(a));


        }
    } else {
        console.log("Da un nunmero mayor a 0");
        document.getElementById("resultado").textContent = "Da un numero mayor a 0";

    }
}

function fibonacci(x) {
    if (x <= 1) {
        return x;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}