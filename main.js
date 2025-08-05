const talleres = ["Teatro", "Danza", "Programación"];
let inscripciones = [];

function pedirDatosUsuario() {
  let nombre = prompt("¿Cuál es tu nombre?");
  let edad = parseInt(prompt("¿Qué edad tenés?"));

  if (isNaN(edad)) {
    alert("La edad debe ser un número. Vuelve a intentarlo.");
    return pedirDatosUsuario();
  }

  return { nombre, edad };
}

function elegirTaller() {
  let mensaje = "¿A cuál taller querés inscribirte?\n";
  for (let i = 0; i < talleres.length; i++) {
    mensaje += `${i + 1}. ${talleres[i]}\n`;
  }

  let opcion = parseInt(prompt(mensaje));

  if (opcion < 1 || opcion > talleres.length || isNaN(opcion)) {
    alert("Opción inválida. Intentalo de nuevo.");
    return elegirTaller();
  }

  return talleres[opcion - 1];
}

function confirmarInscripcion(usuario, taller) {
  let confirmacion = confirm(
    `Vas a inscribirte al taller de ${taller}.\n¿Querés confirmar?`
  );

  if (confirmacion) {
    inscripciones.push({ ...usuario, taller });
    alert(`¡Gracias ${usuario.nombre}! Estás inscripto/a en ${taller}.`);
  } else {
    alert("Inscripción cancelada.");
  }
}

function iniciarSimulador() {
  alert("Bienvenido/a al simulador de talleres.");
  let usuario = pedirDatosUsuario();
  let tallerElegido = elegirTaller();
  confirmarInscripcion(usuario, tallerElegido);

  console.log("Inscripciones actuales:");
  console.log(inscripciones);
}

iniciarSimulador();
