
/* PRIMERO .- la FUNCTION se usa para poder CARGAR un EVENTO
                se le pone un NOMBRE IDENTIFICATORIO seguido de ()
                se abre y cierra con LLAVES {} 
                la FUNCTION NO SE EJECUTARA hasta que no se LE LLAME*/


/* CUARTO.- Ahora lo que vamos a hacer es APLICAR el EVENTO a una etiqueta ESPECIFICA
             Creamos OTRA FUNCTION
             le damos un nombre EJECUTA()
             */

function ejecuta(){

    /* QUINTO.-  Aplicamos un METODO (getElementasByTagName.- Permite detectar UNA etiqueta o VARIAS al MISMO TIEMPO )
                 del OBJETO de nombre DOCUMENT (hace referencia al HTML)
                 
                 El METODO (getElementsByTagName) lleva PARAMETROS ( )
                 esos parametros IDENTIFICAN cuales van a ser lso elemnetos que van a ser afectados por la FUNCTION

                 Entre CORCHETES se indica que ETIQUETAS  P  en concreto quiero identificar:
                 Se utiliza la POSICION empezando desde CERO (posición 0)

                 A continuación el EVENTO (ONCLICK) = (accion que queremos ejecutar) SALUDO 
                 PUNTO Y COMA (;)

                Esto llamara a la FUNCTION  SALUDO()

                de ahí para que MUESTRE la PANTALLA EMERGENTE recurrira a :
                --------------------------
                window.onload=ejecuta;
                --------------------------

                osea :

                1.- Function Saludo()
                2.- Function ejectura()
                3.- EVENTO DE VENTANA (window.onload=ejecuta;)



                 */

    /* document.getElementsByTagName("p")[0].onclick=saludo; */

            /*  Continua QUINTO
            Y si yo quisiera identificar a TODOS LOS ELEMENTOS  y no colo a uno????

            RECURRIMOS al concepto de BUCLE (repeticion)
            Con los conceptos de FOR
            utilizamos un BUCLE FOR
          
            
            */

    for(var i=0; i<3; i++) {
        document.getElementsByTagName("p")[i].onclick=saludo; 
    }    
    

    /* SEXTO.- Viene de la pagina HTML cuando queremos aplicar el EVENTO
                por medio de un ID
                
                Aplicamos la siguiente sentencia
    -----------------------------------------------------------          
    document.getElementById("importante").onclick = saludo;
    -----------------------------------------------------------
            No se aplicara nada mas, nada de corchetes pues solo se ejecuta a UNA SOLA ETIQUETA
                */
}

function saludo(){
    /* SEGUNDO.- ALERT ()  dentro de los parentesis el mensaje que va a salir */
    alert("Que hay de nuevo");
}

/* TERCERO.- Hemos ELIMINADO el EVENTO DE RATON que iba en la etiqueta P y que
            ejecutaba la accion del cuadro emergente.

            PROBAMOS con OTRA FORMA de ejecutar ese codigo que esta en FUNCTION (que hay de nuevo)
            Esa forma seria con un EVENTO DE VENTANA

            ..................................................................
            window.onload=saludo()   
            ..................................................................

            Con esto le decimos a nuestro codigo que CUANDO CARGUE EL CODIGO
            se ejecute la FUNCTION 
            y aparezaca la ventana emergente....sin necesidad de hacer NADA
            solo ACTUALIZANDO  el codigo ...*/



window.onload=ejecuta;