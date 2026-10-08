const inputNombre = document.getElementById("nombre");
const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");
const listaNombres = document.getElementById("listaNombres");

let nombres = [];

function ordenarNombres() {
  nombres.sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" }));
}

function mostrarNombres() {
  listaNombres.value = nombres.join("\n");
}

function agregarNombre() {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    inputNombre.focus();
    return;
  }

  nombres.push(nombre);
  ordenarNombres();
  mostrarNombres();

  inputNombre.value = "";
  inputNombre.focus();
}

function limpiarLista() {
  nombres = [];
  mostrarNombres();
  inputNombre.focus();
}

btnAgregar.addEventListener("click", agregarNombre);
btnLimpiar.addEventListener("click", limpiarLista);
inputNombre.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarNombre();
});