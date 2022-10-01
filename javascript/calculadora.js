function realizar_operaciones_matematicas(){
    
    var numero1 = document.getElementById("numero1").value; //buscar en todo el documento html el elemento identificado con el id numero1 y me guarda su valor en la variable numero1
    //alert("Ingreso a la funcion"+numero1); para colovar un mensaje a traves de una ventana emergente

    if (numero1=='')  //si numero1 es igual a vacionentonces
        document.getElementById("numero1").setAttribute("class", "form-control is-invalid")  //busque el elemento en el html y cambiele su atributo
                                            //indicamos que vamos a modificar el estilo class y le asignamos el nuevo estilo "form-control is-invalid"  esto para si el usuario no digita ningun valor, el campo se colocara de rojo
        let parrafo1 = document.getElementById("parrafo_validar1");
        parrafo1.innerHTML="El campo numero1 es obligatorio";  //innerHTML para asignar texto a un parrafo en html
        parrafo1.setAttribute = ("class, form-control is-ivalid") //setAttribute para asignar o cambiar un estilo

    var numero2 = document.getElementById("numero2").value; 
                                        
    if (numero2=='') 
        document.getElementById("numero2").setAttribute("class", "form-control is-invalid")
        let parrafo2 = document.getElementById("parrafo_validar2");
        parrafo1.innerHTML="El campo numero2 es obligatorio";                                        
}





//crear etiqueta h5
let crear_etiqueta_h5=document.createElement("h5");
let crear_texto_h5=document.createTextNode("TITULO EJEMPLO H3");
crear_etiqueta_h5.appendChild(crear_texto_h5);

//buscar caja donde pintar etiqueta
var caja_dinamica = document.getElementById("caja-uno");
caja_dinamica.appendChild(crear_etiqueta_h5);


//crear una caja en html desde javascript
let crear_caja = document.createElement("div");
let crear_texto_caja = document.createTextNode("crear texto para la caja");
crear_caja.appendChild(crear_texto_caja);

let buscar_punto_pintar = document.getElementById("caja-uno")
document.insertBefore(crear_caja, buscar_punto_pintar);


