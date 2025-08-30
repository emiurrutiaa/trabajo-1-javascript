// Array para almacenar productos (se carga de localStorage si existe)
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos del DOM
const productoForm = document.getElementById("productoForm");
const nombreInput = document.getElementById("nombre");
const precioInput = document.getElementById("precio");
const listaProductos = document.getElementById("productos");
const totalElement = document.getElementById("total");
const vaciarBtn = document.getElementById("vaciar");

// Función para renderizar los productos en el DOM
function renderizarCarrito() {
  listaProductos.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.addEventListener("click", () => eliminarProducto(index));

    li.appendChild(btnEliminar);
    listaProductos.appendChild(li);

    total += producto.precio;
  });

  totalElement.textContent = `Total: $${total}`;
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para agregar producto
productoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = nombreInput.value.trim();
  const precio = parseFloat(precioInput.value);

  if (nombre && !isNaN(precio)) {
    const producto = { nombre, precio };
    carrito.push(producto);
    renderizarCarrito();

    productoForm.reset();
  }
});

// Función para eliminar producto
function eliminarProducto(index) {
  carrito.splice(index, 1);
  renderizarCarrito();
}

// Vaciar carrito
vaciarBtn.addEventListener("click", () => {
  carrito = [];
  renderizarCarrito();
});

// Render inicial al cargar la página
renderizarCarrito();
