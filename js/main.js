const clickSearch = document.querySelector('#clickBtn');
clickSearch.addEventListener('click', fetchApi);

function fetchApi() {
    // trim() para remover espaços em branco, dos dois lados
    const inputSearch = document.querySelector('#input').value.trim();
    const urlApi = `http://pokeapi.co/api/v2/pokemon/${inputSearch}/`.toLowerCase();
    console.log(urlApi);

    fetch(urlApi)
    .then((res) => res.json())
    //.then((data) => console.log(data))
    .then((data) => {
        let output = ``;
        output += `
            <div class="card-panel red lighten-5 z-depth-1">
            <img src="${data.sprites.front_default}" 
            height="200" width="200" align="left">
            <p><b>Nome:</b> ${data.name} </p>
            <p><b>Peso:</b> ${data.weight} </p>
            <p><b>ID:</b> ${data.id} </p>
            <p><b>Exp Base:</b> ${data.base_experience} </p>
            </div>
        `;

        document.getElementById('showPokemon').innerHTML = "";
        document.getElementById('showPokemon').insertAdjacentHTML('beforeend', output);
    })
}