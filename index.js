const imput1 = document.querySelector('#calculo1');
const imput2 = document.querySelector('#calculo2');
const btn = document.querySelector('#first_btn')
const pResultado = document.querySelector('#resultado');

btn.addEventListener('click', btnOnClick)

function btnOnClick (){
    const suma = (parseInt(imput1.value) + parseInt(imput2.value));

    pResultado.innerText = "El resultado es: "+ suma;
}


