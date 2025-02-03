// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// declarar la array o la lista para llenarla con los nombres
let Amigos = [];
// Esta sentencia lo que hace conectar lista con el HTML 
const listadeamigoS= document.getElementById('listaAmigos');

function agregarAmigo() {
      // pido al usuario que ingrese los nombres de los amigos 
  let llenar = document.getElementById('amigo').value;
    // verifica si el usuario ingreso el nombre correctamente 

    if (llenar !== null && llenar.trim() !== '' ) {   // Sirve para verificar si el usuario ingresa un valor asignado  pero no es definido
    // el trim es para eliminar los espacio en blanco tanto al incio como el final de un string
        Amigos.push(llenar); // Este codigo es para llenar la array de amigos 
        limpiarcaja(); // A medida que se va ingresando un nombre de un amigo a la array, se va limpiando la caja del boton añadir
        Actualizar_Lista_De_Amigos();   // Esta función tiene el objetivo de actualizar la lista de amigos y  trabajar directamente en con la pogramación de HTML;
    }
    else {
      // Este codigo nos sirve para informar al usuario que no ingreso  ningún nombre;
        alert("Por Favor Inserte Un Nombre Valido");
        limpiarcaja(); 
    }
}
// Esta Función nos sirve para limpiar la caja cuando ingresamos el nombre de un amigo
 function limpiarcaja (){
    document.querySelector('#amigo').value = '';
}
  function Actualizar_Lista_De_Amigos() {
    
   
    // ESTA SENTENCIA NOS PERMITE LIMPIAR LA LISTA EXISTENTE
    listadeamigoS.innerHTML = '';

    // SE APLICA LA INTERACCIONES CON EL FOR PARA TRABAJAR CON LA ARRAY AMIGO
    for (let i = 0; i < Amigos.length; i++) {      
       let item = document.createElement("li"); // crea la lista para trabajar con el HTML
       item.textContent = Amigos[i];  // La lista o la array del HTML esta actualizando o se esta copiando el base a la array de amigos
       listadeamigoS.appendChild(item); // Guarda la lista de amigos en HTML
   
    }
  }
 
  function sortearAmigo (){
    // Quitar o desabilitar la lista después de ver los nombres de los amigos
listadeamigoS.style.display = "none";
// desactivar el boton de añadir amigos después de haberlo ingresados todos;
document.querySelector('#añadir').setAttribute('disabled',true);

// Esta sentencia produce el índice aleatorio para escoger sortear el amigo secreto
let Indice_Aleatorio = Math.floor(Math.random()*Amigos.length);
let amigosecreto = Amigos[Indice_Aleatorio]; // Esta variable guarda el nombre del amigo secreto
let Secreto = document.getElementById("resultado"); //  Esta sentencia se activa para poder escribir un mensaje 
Secreto.innerHTML= " El Amigo Sorteado Es " + amigosecreto; // Realiza el mensaje del amigo secreto en la pagina
// desactivar el boton de sortear amigos después de conocer el amigo secreto
document.querySelector('#sorteo').setAttribute('disabled',true);
  }










