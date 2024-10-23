
async function obtenerAves() {
    try {
        const response = await fetch('http://localhost:8080/API/aves');
        const data = await response.json()
        const avesContainer = document.getElementById('aves-container')
        console.log(data)
        data.results.forEach(ave => {
            const avesElement = document.createElement('div')
            avesElement.classList.add('ave')
            avesElement.innerHTML = `<img id=imgUrlS src="${ave.imgUrl}" alt="${ave.nombre}">
        <div>
            <h3>NOMBRE: ${ave.nombre}</h1>
            <p>NOMBRE: ${ave.nombre}</p>
            <p>ALIMENTACIÓN: ${ave.alimentación}</p>
        </div>`
        avesContainer.appendChild(avesElement)
        });
    } catch (error) {
        console.error("no se pudo hacer", error)
}
}
window.onload = obtenerAves

