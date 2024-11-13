async function obtenerlistaAves() {
    try {
        const response = await fetch('http://localhost:8080/API/aves');
        const data = await response.json();
        const listaContainer = document.getElementById('lista');
        console.log(data); 
        data.forEach(data => {
            const aveElement = document.createElement('option');
            aveElement.value = data.id;
            aveElement.textContent  = data.nombre;
            listaContainer.appendChild(aveElement)
        });
        console.log(data)
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
      let caRita = () => {
        let pepe
        if (datos.Viene === "Mucho") { 
            pepe = [datos.Viene, "😁"];
        } else if (datos.Viene === "A Veces") { 
            pepe = [datos.Viene, "😐"];
        } else if (datos.Viene === "Casi Siempre") {
            pepe = [datos.Viene,  "😅"];
        } else if  (datos.Viene === "Ya No") {
            pepe = [datos.Viene, "😔"];
        } else if(datos.Viene)
            pepe = [datos.Viene]
        return pepe}
      document.getElementById('aves-container').innerHTML =    
            `<div id="personaje">
                <h2 >${datos.nombre}</h2>
                <img src="${datos.imgUrl}" alt="${datos.nombre}">
                <h3>ALIMENTACIÓN: ${datos.alimentacion}</h3>
                <h3>VIENE: ${caRita(
                )}</h3>
            </div>`
    })
    } catch (error) {
      console.error('no se pudo encontrar', error)
      document.getElementById('nombre-ave').innerHTML = "No se encontró el ave"
    }
  }
  
  function moDificar() {
    let Pepe = document.getElementById('lista').value
     
          fetch('http://localhost:8080/API/aves/'+Pepe, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: document.getElementById('nombre').value,
            alimentación: document.getElementById('alimento').value,
            Viene : document.getElementById('viene').value,
            imgUrl: document.getElementById('imgUrl').value
          }),
        }).then(respuesta => resporespuestanse.json())
          .then(datos => console.log(datos))
      } 
 
      function eDitar() {
        let Pepe = 1
        /* let Pepe = document.getElementById('lista').value */
          
          try {
            fetch('http://localhost:8080/API/aves/'+Pepe)
          .then(respuesta => respuesta.json())
          .then(datos => {
            document.getElementById('formu').innerHTML =    
                  `<div id="formu">
              <input type="text" id="nombre" placeholder="ingrese el nombre">
              <input type="text" id="alimento" placeholder="ingrese el alimento">
              <input type="text" id="viene"  placeholder="cada cuanto viene">
              <input type="text" id="imgUrl" placeholder="ingrese la url de la imagen">
          </div>`
          })
          } catch (error) {
            console.error('no se pudo encontrar', error)
          }
      }
      