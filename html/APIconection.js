async function obtenerAves() {
    try {
        const response = await fetch('http://localhost:8080/API/aves');
        const data = await response.json()
        const avesContainer = document.getElementById('aves-container')
        console.log(data)
        data.forEach(ave => {
            const aveElement = document.createElement('div')
            aveElement.classList.add('ave')
            aveElement.innerHTML = 
            `<div>
                <h2 id="nombre">NOMBRE: ${ave.nombre}</p>
                <img id=imgUrlS src="${ave.imgUrl}" alt="${ave.nombre}">
                <h3>ALIMENTACIÓN: ${ave.alimentación}</h3>
                <h3>VIENE: ${ave.Viene}</h3>

            </div>`
        avesContainer.appendChild(aveElement)
        });
    } catch (error) {
        console.error("no se pudo hacer", error)
}
}
window.onload = obtenerAves

