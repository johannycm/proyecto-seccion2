/* Crea un programa orientado a objetos que sea un gestor
  de tareas.

  El programa debe de tener las siguientes clases:
  - Tarea
    - Propiedades: nombre, descripcion, fecha, completada

  - ListaTareas
    - Propiedades: tareas (array de tareas)
    - Metodos: Agregar tarea(tarea), Completar tarea(tarea), Eliminar tarea(tarea),
    ver tareas()

  El programa debe de permitir al usuario agregar tareas,
  completar tareas y eliminar tareas. Ademas debe de permitir
  al usuario ver todas las tareas.

  El programa debe de tener un menu que permita al usuario
  seleccionar una opcion.

  El programa debe de terminar cuando el usuario seleccione
  salir.

  debes usar alert() y prompt() para interactuar con el usuario. */

  // Definición de la clase Tarea
  class Tarea {
    constructor(nombre, descripcion, fecha) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.fecha = fecha;
      this.completada = false;
    }

    completar() {
      this.completada = true;
    }
  }

  // Definición de la clase ListaTareas
  class ListaTareas {
    constructor() {
      this.tareas = [];
    }

    agregarTarea(tarea) {
      this.tareas.push(tarea);
    }

    completarTarea(nombre) {
      const tarea = this.tareas.find(t => t.nombre === nombre);
      if (tarea) {
        tarea.completar();
      }
    }

    eliminarTarea(nombre) {
      this.tareas = this.tareas.filter(t => t.nombre !== nombre);
    }

    verTareas() {
      if (this.tareas.length === 0) {
        alert("No hay tareas en la lista.");
      } else {
        this.tareas.forEach(t => {
          alert(`Nombre: ${t.nombre}\nDescripción: ${t.descripcion}\nFecha: ${t.fecha}\nCompletada: ${t.completada}`);
        });
      }
    }
  }

  // Función principal del gestor de tareas
  function gestorDeTareas() {
    const listaTareas = new ListaTareas();

    while (true) {
      const opcion = prompt("Selecciona una opción:\n1. Agregar tarea\n2. Completar tarea\n3. Eliminar tarea\n4. Ver tareas\n5. Salir");

      switch (opcion) {
        case "1":
          const nombre = prompt("Nombre de la tarea:");
          const descripcion = prompt("Descripción de la tarea:");
          const fecha = prompt("Fecha de la tarea (YYYY-MM-DD):");
          const nuevaTarea = new Tarea(nombre, descripcion, fecha);
          listaTareas.agregarTarea(nuevaTarea);
          break;
        case "2":
          const nombreCompletar = prompt("Nombre de la tarea a completar:");
          listaTareas.completarTarea(nombreCompletar);
          break;
        case "3":
          const nombreEliminar = prompt("Nombre de la tarea a eliminar:");
          listaTareas.eliminarTarea(nombreEliminar);
          break;
        case "4":
          listaTareas.verTareas();
          break;
        case "5":
          alert("Saliendo del gestor de tareas.");
          return;  // Salir del bucle y finalizar el programa
        default:
          alert("Opción no válida. Inténtalo de nuevo.");
      }
    }
  }

  gestorDeTareas();
