

class Productos {
  constructor(nombre, precio, cantidad, total){
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
    this.total = total
  }
}

let form = 
$("#containerInputs").submit(telefono)



function telefono (e){
  e.preventDefault()
  let formulario = e.target
  let nombre = formulario.children[1]
  let precio = formulario.children[3]
  let cantidad = formulario.children[5]
  let total = precio * cantidad
  let phoneIngresado = new Productos (nombre, precio, cantidad, total)
  arrayPhone.push(phoneIngresado)
  arrayPhone.forEach(Productos => {
    document.getElementById("containter").append(
      `<table>

      <tr>
        <th>Nombre del Celular</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
      </tr>
    
      <tr>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>${total}</td>
      </tr>
      </table>`
    )
  })
}

let arrayPhone = []





