//comentario de linea
/*comentario de
  parrafo
  */

console.log("hola world");
console.log("holamundo".length);

const pi=3.1416182432;
console.log(pi);

var variable1 ="hola mmundo";
var variable2 = true;
var variable3 = 4;

//matematicas
console.log(variable3 + variable1);
/*
//mensaje de interaccion
var respuesta = confirm("que guapo eres");
console.log(respuesta);

for (let i=0;i<10;i++){
  console.log(i+" * 6 = "+ i*6);
}*/




/*

console.log(5<3);

if (("xavi".length<=10) && (variable3 ==4))
{
    console.log("tienes un nombre muy corto");
}

for (let h=20;h>1;h--)
  {
    if (h%2==0)
    {console.log(h);}
  }
*/
console.log("Martin Lagos".substring(7,13));


//alert ("bienvenido")
//var resultado = confirm("bienvenido");
//console.log(resultado);
//var año=prompt ("en que año naciste?")
//console.log(2017 -año);

/*
const actual=2017;
var nombre = prompt("como te llamas?");
var año= prompt ("en que año naciste?");
var operacion= actual- año;
//console.log("hola" ,nombre,  "tu edad es"  ,operacion,);
alert operacion
*/



//console.log('Numero aleatorio'+(Math.floor(Math.random()*3)+1))

let piedra=1;
let papel=2;
let tijera=3;
//let 1=piedra
//let 2=papel
//let 3=tijera
confirm ("Jugamos a piedra, papel y tijera?");
alert ("debes escribir la palabra de tu jugada en numeros");
let  jugada= prompt ("escribe tu jugada: ");
let maquina=(Math.floor(Math.random()*3)+1);
if (jugada==maquina){alert ("empate")}
else {
  if (jugada==papel)
  {
    if(maquina==tijera){
        alert ("ganas")
      }else{
        alert("pierdes")
      }
  }
{
    if(jugada==tijera)
     {
      if (maquina==papel)
      {
      alert ("ganas")
      }
      else{
      alert("pierdes")
      }
    }
}
}
