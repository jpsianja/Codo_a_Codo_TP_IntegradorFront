//definir el valor del ticket
const ticket = 200;

//definir los descuentos

const descEstudiante = 0.80;
const descTrainee = 0.50;
const descJunior = 0.15;

//tomar los elementos (en el html tenemos un select, con value para cada categoria (sin cat, estudiante, trainee, junior))

const cantidad = document.getElementById('cantidad'); //con los id que estan en el html ticket
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

//console.log(cantidad);

function calcularPago(){
 let total = cantidad.value * ticket;
 //condicionar por descuento
switch (categoria.value){
case "estudiante":
    total = total - (total * descEstudiante);
break;
 case "trainee":
     total = total - (total * descTrainee);
case "junior":
    total = total - (total * descJunior)

default:
    total 
    break;
}

totalPagar.textContent =  `Total Pagar: $ ${total}`

 }

 btnResumen.addEventListener('click', (e)=>{
    e.preventDefault();
    calcularPago();
 });
