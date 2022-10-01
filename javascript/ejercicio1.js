alert("mensaje en archivo ejecicio 1"); /* para mostrar un mensaje a traves de una ventana emergente desde el archivo java script */

/* ingresar datos a traves de una ventana emerjente utilizando pronmt */
var numero1 = prompt("Ingresar numero 1");  /*var para declarar una variable global, prompt es una funcion que nos permite perdir datos y mostrarlos en pantalla*/
let numero2 = prompt("Ingresar numero 2");  /* para declarar una variable local, es rocomendable trabajar con este tipo de variables */
const numero = 3.1416;
var resultado = parseInt(numero1)+parseInt(numero2)+numero; /*se debe hacer un parceo para convertir de string a entero */
alert("la sumatoria es: "+resultado); /*se muestra el resultado en una ventana emergente */
/*como mostrar valores en la consola del navegador, esto es importante para ir haciendo pruebas de nuestro codigo*/
console.log("la sumatoria es:"+resultado);
//mostrar el resultado escribiendo sobre la pagina html
document.write("<p style=text-align:center>la sumatoria es :"+resultado+ "</p>"); //mostrara el resultado en la parte superior izquierda de la pagina, ya que en el html, declare el javasript en la parte del head
//agregando style=text-align:center puedo añadirle estilos al parrafo en este caso para que quede centrado
document.write("<p class='estilo1'>la sumatoria2 es :"+resultado+ "</p>"); //otra forma de dar el estino es creando un class y asignando el estilo en el archivo de estilo correspondiente

var numero3 =10;   // no es necesario difinir si es entero, strign, boleano u otro ; automaticamente javastrinpt define el tipo de variable 
var numero4 =54;
var resultado2 = numero3+numero4;
alert("la suma de los dos numeros es: "+resultado2);


var a;
console.log('el valor de a es:'+a); /*nos mostrara un mensaje en consola donde nos indicara que el valor de la variable es indefinido */
console.log('el valor de b es:'+b);
var b;
//console.log('el valor de c es:'+c) /*nos mostrara un mensaje de error indicando que la variable c no esta definida, no se ha creado, si hay un error el programa se ejecuta pero no se ejecutaran las lineas de codigo desde el error hasta el final es decir solo se ejecutaran las primeras lineas de codigo hasta donde exita algun error */

/*arreglos en javascript */
var arreglo1=["quimica", "fisica", 5, 2.3, true, "idiomas"];
document.write("<div style='text-align:center'>"); //creamos una caja para decirle que lo que este dentro de la caja, a traves de un estilo que nos centre lo que nos muestra en pantalla
document.write(arreglo1[0]+"</br>"); //si dejo la linea asi document.write(arreglo1[0]); me mostrara todos los elementos en una sola linea y sin espacios ej quimicafisica52.3trueidiomas
document.write(arreglo1[1]+"</br>"); //agregamos +"</br>" para dar un salto y que los elementos del arreglo se muestren en forma vertical uno debajo de otro
document.write(arreglo1[2]+"</br>");
document.write(arreglo1[3]+"</br>");
document.write(arreglo1[4]+"</br>");
document.write(arreglo1[5]+"</br>");
document.write("</div><br /><br />"); //cierro la caja y damos dos saltos para dar espacios entre la ultima linea de codigo y la parte inferior de la pantalla
arreglo1[arreglo1.length] = "Matematicas"; //agregamos un elemento al arreglo, como lo añadimos por fuera de la caja que creamos para el arreglo lo mostrara aparte y en la parte izquierda de la pantalla
document.write(arreglo1[6]+"</br>"); //mostramos el nuevo elemento

//mostrar los elementos del arreglo a traves de un for de esta manera ahorramos lineas de codigo y dentro del for creamos una nueva caja para centrar los elementos al mostrarlos en pantalla
for (let i=0; i<arreglo1.length; i++){
    document.write("<div style='text-align:center'>");
    document.write(arreglo1[i]+"</br>")
    document.write("</div>");
}
document.write("<br />"); //para dar un espacio

//otra forma de mostrar los elementos de arreglo es a traves de .join
document.write(arreglo1.join(":")); //me mostrara los elementos del arreglo, separados por :, en la parte izquierda del computador en una linea horizontal

document.write("<br /><br />"); //para dar espacios

document.write(arreglo1.join("<br />")); //de esta forma nos mostrara los elementos del arreglo de forma vertical

document.write("<br /><br />"); //para dar espacios

document.write(arreglo1.sort()+"<br />");

document.write("<br /><br />"); //para dar espacios

//ejercicios con ciclos while
var tabla_multipicar=prompt("Ingrese tabla de multiplicar"); //solicitamos al usuario a traves de una ventana emergente que elija la tabla a multiplicar
tabla_multipicar=parseInt(tabla_multipicar); //convertir de string a numero entero
let j=1;  //creamos la variable para el ciclo while
document.write("<div style='text-align:center' class='p-3 mb-2 bg-info tex-white'>"); //creamos una caja donde daremos estilo a la tabla de multiplicar, adicional agrego un estilo bootstrap class='p-3 mb-2 bg-info tex-white'
while(j<10){    //iniciamos el ciclo
    document.write(tabla_multipicar + "x" + j + "=" + j * tabla_multipicar+"<br />"); //hacemos la operacion y mostramos resultado
    j++  //incrementamos en 1 la varialbe del ciclo
    
}
document.write("</div>"); //cerramos la caja

document.write("<br /><br />"); //para dar espacios

//ejercicio de ciclo con do while
let x=0;
do{
    x++;
    console.log(x);
}while (x < 5);      //este do while me mostrara en consola los numeros del 1 al 5


//CONDICIONALES if
//Crear un programa que solicite la edad y me diga se la persona es menor o mayor de edad
let edad = prompt("Ingrese su edad");
edad = parseInt(edad);
if (edad < 18){
    document.write("Tu eres menor de edad");
}else if (edad < 70){
    document.write("Tu eres mayor de edad");

}else{
    document.write("Tu eres adulto mayor");
}

//SWITCH
let fruta=prompt("Ingrese una fruta");
switch (fruta){
    case 'naranjas':
        document.write("<p class='text-primary' style='text-align:center'>las naranjas valen 3000</p>");
        break;
    case 'manzanas':
        document.write("<p class='text-primary' style='text-align:center'>las manzanas valen 6000</p>");
        break;    
    case 'peras':
        document.write("<p class='text-primary' style='text-align:center'>las peras valen 7000</p>");
        break;
    default:
        document.write("<p class='text-primary' style='text-align:center'>la fruta no esta en el sistema</p>");
        break;   

}

//FUNCIONES
suma(5,6,7);
function suma(numero1, numero2, numero3){  //funcion para sumar 3 numeros
    resultado = numero1+numero2+numero3;
    alert("resultado "+resultado)
}


DOM
var nombres = document.getElementById(nombres);



var input;
if (input == undefined){
    'hacer esto';
}   else{
    'hacer eso';
}

