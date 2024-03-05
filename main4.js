const productos = [
    { id: 1, nombre: "baguette", imagen: "./img/baguette.jpg", precio: 2000, cant: 8 },
    { id: 2, nombre: "croissants", imagen: "./img/croissants.jpg", precio: 1800, cant: 8 },
    { id: 3, nombre: "macaron", imagen: "./img/macaron.jpg", precio: 2200, cant: 8 },
]
let carrito = JSON.parse(localStorage.getItem('carrito') )|| [];

const carritoItem = [];
function crearTarjetaProducto() {
    const contenedor = document.getElementById('contenedor-productos');
    productos.forEach(producto => {
        ///////////////
        const titulo = 'titulo' + producto.id;
        const productoImg = 'productoImg' + producto.id;
        const seleccion = 'seleccion' + producto.id;
        const precioProd = 'precio' + producto.id;
        const cantProd = 'cantidad' + producto.id;
        ///////////////
        const tarjetaNombre = document.createElement('div');
        tarjetaNombre.classList.add(titulo)

        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        tarjetaNombre.appendChild(nombre);

        contenedor.appendChild(tarjetaNombre);
        //////////////
        const tarjetaImagen = document.createElement('div');
        tarjetaImagen.classList.add(productoImg);

        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        tarjetaImagen.appendChild(imagen);

        contenedor.appendChild(tarjetaImagen);
        ///////////////
        const tarjetaPrecio = document.createElement('div');
        tarjetaPrecio.classList.add(precioProd);

        const precio = document.createElement('p');
        precio.textContent = producto.precio;
        tarjetaPrecio.appendChild(precio);

        contenedor.appendChild(tarjetaPrecio);
        ///////////////
        const tarjetaSeleccion = document.createElement('select');
        tarjetaSeleccion.classList.add(seleccion);
        tarjetaSeleccion.setAttribute("id", seleccion);

        const opcion = document.createElement('option');
        opcion.value = "opcion";
        opcion.textContent = "cantidad";
        tarjetaSeleccion.appendChild(opcion);

        for (let i = 1; i <= producto.cant; i++) {
            const opciones = document.createElement('option');
            opciones.value = "opcion" + i;
            opciones.textContent = i;
            tarjetaSeleccion.appendChild(opciones);
        }

        contenedor.appendChild(tarjetaSeleccion);

        const tarjetaTotal = document.createElement('div');

        const cantTotal = document.createElement('p');
        cantTotal.setAttribute("id", cantProd)
        cantTotal.classList.add(cantProd)
        cantTotal.textContent = '0';
        tarjetaTotal.appendChild(cantTotal);

        contenedor.appendChild(tarjetaTotal);


    })
for(index of productos){
    const select = document.getElementById('seleccion'+index.id);
    select.addEventListener('change', function(){
        carrito.push(index); //agregamos el producto al carrito
        localStorage.setItem('carrito', JSON.stringify(carrito));
    })
}


};


 

crearTarjetaProducto();


