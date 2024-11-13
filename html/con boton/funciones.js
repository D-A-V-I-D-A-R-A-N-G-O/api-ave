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
  
  const enviar = fetch('http://localhost:8080/API/aves/'+Pepe, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: 'sebastian reyes',
      alimentación: 'mariguana',
      Viene : 'todos los dias',
      imgUrl: 'https://th.bing.com/th/id/OIP.4XIW51tT28OyuGKz2cQzAQHaGO?rs=1&pid=ImgDetMain'
    }),
  }).then(respuesta => resporespuestanse.json())
    .then(datos => console.log(datos))
 
