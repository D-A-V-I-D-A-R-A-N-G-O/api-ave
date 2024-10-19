async function obtenerAves() {
    try {
        const response = await fetch('http://localhost:8080/API/');
        const data = await response.json()
        const birdContainer = document.getElementById('bird-container')

        data.results.forEach(bird => {
            const birdElement = document.createElement('div')
            birdElement.classList.add('bird')
            birdElement.innerHTML = `<img id=imagen src="${bird.image}" alt="{bird.name}">
        <div>
            <h3 id="n">NOMBRE: ${bird.name}</h1>
            <p>NOMBRE: ${bird.nombre}</p>
            <p>ALIMENTACIÓN: ${bird.alimentación}</p>
        </div>`
        birdContainer.appendChild(birdElement)
        });
    } catch (error) {
        console.error('Error: no se puedo obtener el mensaje', error);
    }
}
window.onload = obtenerAves