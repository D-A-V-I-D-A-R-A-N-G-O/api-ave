async function obtenerlistaAves() {
    try {
        const response = await fetch('http://localhost:8080/API/aves');
        const data = await response.json();
        const listaContainer = document.getElementById('lista');
        console.log(data); 
        data.forEach(ave => {
            const aveElement = document.createElement('option');
            aveElement.innerHTML =
            `<option value="${ave.id}">${ave.nombre}</option>`;
            console.log(ave.id)
            listaContainer.appendChild(aveElement);
        });
        
    } catch (error) {
        console.error("no se pudo hacer", error);
    }
}
window.onload = obtenerlistaAves

function reciBir() { 
    let Pepe = document.getElementById('lista').value
    try {
      fetch('http://localhost:8080/API/aves/'+Pepe)
    .then(respuesta => respuesta.json())
    .then(datos => {
      document.getElementById('aves-container').innerHTML =    `<div>
                <h2 id="nombre">${datos.nombre}</h2>
                <img id="imgUrlS" src="${datos.imgUrl}" alt="${datos.nombre}">
                <h3>ALIMENTACIÓN: ${datos.alimentación}</h3>
                <h3>VIENE: ${datos.Viene}</h3>
            </div>`
    })
    } catch (error) {
      console.error('no se pudo encontrar', error)
      document.getElementById('nombre-ave').innerHTML = "No se encontró el ave"
    }
  }
  