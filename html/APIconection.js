
async function obtenerAves() {
    try {
        const response = await fetch('http://localhost:8080/API/aves');
        const data = await response.json()
        const avesContainer = document.getElementById('aves-container')

        data.results.forEach(aves => {
            const avesElement = document.createElement('div')
            avesElement.classList.add('aves')
            avesElement.innerHTML = `<img id=imagen src="${aves.imgUrl}" alt="{aves.nombre}">
        <div>
            <h3>NOMBRE: ${aves.nombre}</h1>
            <p>NOMBRE: ${aves.nombre}</p>
            <p>ALIMENTACIÓN: ${aves.alimentación}</p>
        </div>`
        avesContainer.appendChild(avesElement)
        });
    } catch (error) {
        console.error('Error: no se puedo obtener el mensaje', error);

    }
}
window.onload = obtenerAves