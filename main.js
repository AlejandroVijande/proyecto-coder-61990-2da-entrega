let productos = []
//JSON.parse(localStorage.getItem("productos")) || 
const agregarProducto = (nombre,precio,condicion,descripcion) => {
    const producto = {
        id:crypto.randomUUID(),
        nombre,
        precio,
        condicion,
        descripcion
    }
    productos.push(producto)
    localStorage.setItem("productos",JSON.stringify(productos))
    return producto
} 

const borrarProducto = (id) => {
    productos = productos.filter(producto => producto.id != id)
    localStorage.setItem("productos",JSON.stringify(productos))
}

const crearTarjetaProducto = (producto) =>{
    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta"
    element.innerHTML = `
                        <input type="text" class="input" value="${producto.nombre}">
                        <input type="text" class="input" value="${producto.precio}">
                        <input type="text" class="input" value="${producto.condicion}">
                        <textarea type="text" class="input">${producto.descripcion}</textarea>
                        <button class="btn btn-borrar">Borrar</button>
    `
    app.append(element)
    const btnBorrar = element.querySelector(".btn-borrar");
    btnBorrar.addEventListener("click", () => {
        borrarProducto(producto.id);
        app.removeChild(element);
    });

    app.append(element)
}


const principal =() =>{

    productos.forEach(producto =>{
        crearTarjetaProducto(producto)
    })

    const btnAgregarProducto = document.getElementById("btnAgregarProducto")
    btnAgregarProducto.addEventListener("click",()=>{
        const nombreNuevoProducto = document.getElementById("nombreNuevoProducto")
        const precioNuevoProducto = document.getElementById("precioNuevoProducto")
        const condicionNuevoProducto = document.getElementById("condicionNuevoProducto")
        const descripcionNuevoProducto = document.getElementById ("descripcionNuevoProducto")
        const producto = agregarProducto(nombreNuevoProducto.value, precioNuevoProducto.value, condicionNuevoProducto.value, descripcionNuevoProducto.value)
        crearTarjetaProducto(producto)
        nombreNuevoProducto.value = ""
        precioNuevoProducto.value  = ""
        condicionNuevoProducto.value  = ""
        descripcionNuevoProducto.value  = ""
         
    })
} 

principal()