const input = document.getElementById("operacion");
const resultado = document.getElementById("resultado");

input.addEventListener('keyup',function(){

    const valor = math.evaluate(input.value)
    resultado.textContent = valor;
});
input.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter'){
        input.value = resultado.textContent;
    }
});
