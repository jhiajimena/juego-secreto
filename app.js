let numeroSecreto=0;
let intentos=0;
let listaNumerosorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return; 
}
function verificarNumero(){
// parseint, el numero debe ser entero
    let numeroDeUsuario=parseInt(document.getElementById('numeroIngresado'). value);
    // console. log(intentos);
// CONDICION
    if(numeroDeUsuario===numeroSecreto){
       asignarTextoElemento('p',`Asertaste el numero en ${intentos} ${(intentos===1)? 'vez':'veces'}`);
    //cuando el usuario finalice genera un nuevo juego(aun no esta habilitado el boton)
       document.getElementById('reiniciar'). removeAttribute('disabled');
   
    }else{
        // el usuario no acerto
        if(numeroDeUsuario<numeroSecreto){
        asignarTextoElemento('p','El numero secreto es mayor');
        }else{
        asignarTextoElemento('p','El numero secreto es menor');
 
        }
        intentos++;
        limpiarCaja();
    }
     
    return;
}

function limpiarCaja(){
    //por ID #
    document.querySelector('#numeroIngresado').value = '';
}
function generarNumeroSecreto() {
    //en vez de retornar el numero, le preguntaremos si ya fue generado
    //no hacemos la operacion

    let numeroGenerado= Math.floor(Math.random()*10)+1;
    //includes=verifica en la lista si ya existe

    console.log(numeroGenerado);
    console.log(listaNumerosorteados);
//si ya sorteamos todos los numero, cerramos el juego
    if(listaNumerosorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');

    }else{

        if(listaNumerosorteados.includes(numeroGenerado)){
            //recusividad, llama a si misma y chequea si existe
            return generarNumeroSecreto();
        }else{
            //guardamos para que no vuelva a salir
            listaNumerosorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Ingrese un numero por favor, del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;


}
function reiniciarJuego(){
   //limpiar caja
   limpiarCaja();
   //indicar mensaje de intervalo de numeros
   //   mensajesIniciales();
   //generar el nmumero aleatorio
   //   numeroSecreto=generarNumeroSecreto();
   //inicializar el numero de intentos 
   //   intentos=1;
   // todos estos mensajesIniciales, numeroSecreto e Intentos se resumen en:
   condicionesIniciales();
   //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}
    //LLAMA A LA FUNCION
condicionesIniciales();


