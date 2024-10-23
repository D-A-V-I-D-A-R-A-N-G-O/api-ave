async function obtenerAves() {
    try {
        const response = await fetch('http://localhost:8080/API/aves');
        const data = await response.json()
        const avesContainer = document.getElementById('aves-container')
        console.log(data)
        data.forEach(ave => {
            const aveElement = document.createElement('div')
            aveElement.classList.add('ave')
            aveElement.innerHTML = `<img id=imgUrlS src="${ave.imgUrl}" alt="${ave.nombre}">
        <div>
            <h3>NOMBRE: ${ave.nombre}</h1>
            <p>NOMBRE: ${ave.nombre}</p>
            <p>ALIMENTACIÓN: ${ave.alimentación}</p>
        </div>`
        avesContainer.appendChild(aveElement)
        });
    } catch (error) {
        console.error("no se pudo hacer", error)
}
}
window.onload = obtenerAves

