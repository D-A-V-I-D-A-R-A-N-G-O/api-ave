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
      /* document.getElementById('modi').style.display = 'none'; */
      document.getElementById('formu').style.display = 'none';
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
                <h3>VIENE: ${caRita()}</h3>
                <button onclick="eDitar()" >Editar</button>
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
            document.getElementById('formu').innerHTML =    
                  `<div id="formu">
              <input type="text" id="nombre" placeholder=${datos.nombre}>
              <input type="text" id="alimento" placeholder=${datos.alimentacion}>
              <input type="text" id="viene"  placeholder="${caRita()}">
              <input type="text" id="imgUrl" placeholder="ingrese la url de la imagen">
                  <button onclick="moDificar()"  id="moDificar">guardar</button>


          </div>`
          document.getElementById('formu').style.display = 'block';
          })
          } catch (error) {
            console.error('no se pudo encontrar', error)
          }
}

function ocultarFormulario() {
  document.getElementById('modi').style.display = 'none';
  document.getElementById('formu').style.display = 'none';
  // Limpiar los valores del formulario
  document.getElementById('nombre').value = '';
  document.getElementById('alimento').value = '';
  document.getElementById('viene').value = '';
  document.getElementById('imgUrl').value = '';
}

      