const input = document.getElementById("operacion");
const resultado = document.getElementById("resultado");

input.addEventListener('keyup',function(){
    /*
    const valor = eval(input.value)
    if (event.key === "Enter"){
        resultado.textContent = valor;
    }
    */
    const valor = math.evaluate(input.value)
    resultado.textContent = valor;
});
