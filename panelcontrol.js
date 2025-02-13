let tareasPendientes = [];
let tareasCompletadas = [];
let tareasCurso = [];

//desafio ponerle validacion al estado y limite al array 
let listaTareas = [
    {
        id: 1,
        titulo: "Crear repositorio",
        descripcion: "Crear repositorio Git hub",
        estado: "pendiente" // puede ser "pendiente", "en curso" o "terminada"
    },
    {
        id: 2,
        titulo: "Estudiar JavaScript",
        descripcion: "Repasar las funciones y promesas en JS.",
        estado: "en curso"
    },
    {
        id: 3,
        titulo: "Conexion a la Base de datos",
        descripcion: "Login usuario y contraseña",
        estado: "terminada"
    }
];


function mostrarTareas (){

    const tablaTareas = document.getElementById('tablaTareas');
    tablaTareas.innerHTML = '';
    // realizar el listado de tareas
    listaTareas.forEach((elemento) => {
        const listItem = document.createElement('li');
        listItem.textContent = ` ${elemento.id} ${elemento.titulo} - Estado: ${elemento.estado}`;
        tablaTareas.appendChild(listItem);  

    });

}

document.addEventListener("DOMContentLoaded", mostrarTareas);

function agregarElemento() {
    let titulo = document.getElementById('titulo').value; 
    let descripcion = document.getElementById('descripcion').value;
    let estado = document.getElementById('estado').value;
    let id = listaTareas.length + 1; 
    // Asignar un nuevo ID basado en la longitud del array
    // desafio cambiar el id por un numero dinamico de 1-20 sin que se repita 
    // Crear un objeto con los datos ingresados
    let nuevaTarea = {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        estado: estado
    };

    // Agregar el objeto al array de tareas
    listaTareas.push(nuevaTarea);
 // actualizar vistas 
    mostrarTareasMas();
    mostrarTareas();  
}


function eliminarElemento() {
    const ideliminar = parseInt(document.getElementById('ideliminar').value);
    const resultadoeliminado = document.getElementById('resultadoeliminado');

    const indice = listaTareas.findIndex(tarea => tarea.id === ideliminar);

    if (indice !== -1) {
        // Si la tarea existe, eliminarla

        const tareaEliminada = listaTareas.splice(indice, 1)[0]; 
        resultadoeliminado.innerHTML = `Se eliminó la tarea: <strong>${tareaEliminada.titulo}</strong>`;

        console.log(`Tarea con ID ${ideliminar} eliminada`);
    } else {
        console.log(`No se encontró tarea con ID ${ideliminar}`);
    }


    mostrarTareas();
    mostrarTareasMas();


}

function mostrarTareasMas() {
    // Limpiar las listas actuales
    document.getElementById("pendientesLista").innerHTML = '';
    document.getElementById("enCursoLista").innerHTML = '';
    document.getElementById("terminadasLista").innerHTML = '';
    //document.getElementById("resultadoeliminado").innerHTML = '';


    pendientesLista.innerHTML = '';
    enCursoLista.innerHTML = '';
    terminadasLista.innerHTML = '';
    ///resultadoeliminado.innerHTML = ``;


    listaTareas.forEach((tarea) => {
        // Crear un elemento de lista <li> para cada tarea
        const listItem = document.createElement('li');
        listItem.classList.add('tarea'); // Clase base para todas las tareas

        // Obtener la clase según el estado de la tarea
        const claseEstado = obtenerClasePorEstado(tarea.estado);

        // Asignar la clase al <li>
        listItem.classList.add(claseEstado);

        // Agregar el título y descripción de la tarea al <li>
        listItem.innerHTML = `<strong>${tarea.titulo}</strong><p>${tarea.descripcion}</p>`;

        // Agregar la tarea a la lista correspondiente según el estado
        if (tarea.estado === "pendiente") {
            pendientesLista.appendChild(listItem);
        } else if (tarea.estado === "en curso") {
            enCursoLista.appendChild(listItem);
        } else if (tarea.estado === "terminada") {
            terminadasLista.appendChild(listItem);
        }
    });
};

function obtenerClasePorEstado(estado) {
    switch (estado) {
        case "pendiente":
            return 'pendiente';
        case "en curso":
            return 'en-curso';
        case "terminada":
            return 'terminada';
        default:
            return ''; // En caso de un estado desconocido
    }
};


// Función para agregar una tarea
function agregarTareas(titulo, descripcion, estado) {
    const nuevaTarea = {
        id: listaTareas.length + 1,
        titulo: titulo,
        descripcion: descripcion,
        estado: estado
    };

    // Agregar la nueva tarea al arreglo de listaTareas
    listaTareas.push(nuevaTarea);
    mostrarTareasMas();  // Actualizar las listas después de agregar la tarea
}

mostrarTareasMas();  