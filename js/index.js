const container = document.getElementById('gridContainer')

fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
        
        // Pasos para crear un elemento en JS

        // 1. Creamos el elemento dentro de una variable
            const boxCharacter = document.createElement('div')
        // 2. Estilizo el elemento recién creado
            boxCharacter.classList.add('potter-card', character.house)
        // 3. Dar contenido al nuevo elemento
            boxCharacter.innerHTML = `
            <div class="imageBlock">
                <img src="${character.image}" alt="${character.name}" class="potter__image">
                <div>
                    <h4>${character.name}, ${2025-character.yearOfBirth}</h4>
                </div>
                <span></span>
            </div>
            `
        // 4. Asignar el elemento hijo al contenedor que lo muestre en la web
            container.appendChild(boxCharacter)

            boxCharacter.addEventListener('click', () => {
                const infoCharacter = document.addEventListener('div')
                infoCharacter.classList.add('character-info')
                infoCharacter.innerHTML = `<img src="${character.image}" alt="" class="potter_image">
                <p>${character.species}</p>
                <p>${character.house}</p>
                <p>Age ${2025-character.yearOfBirth}</p>
                `

                boxCharacter.appendChild(infoCharacter)

                infoCharacter.addEventListener('click', () => {
                    infoCharacter.remove();
                })
            })

            
        })
    })



        /* data.name
        data.image
        data.house
        data.species
        data.yearOfBirth */
    .catch(error => console.error(error));
