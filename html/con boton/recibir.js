function reciBir() { 
  let Pepe = document.getElementById('nombre').value
  try {
    fetch('http://localhost:8080/API/aves/'+Pepe)
  .then(respuesta => respuesta.json())
  .then(datos => {
    document.getElementById('nombre-ave').innerHTML = datos.nombre
  })
  } catch (error) {
    console.error('no se pudo encontrar', error)
    document.getElementById('nombre-ave').innerHTML = "No se encontró el ave"
  }
}

    