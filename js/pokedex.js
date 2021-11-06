let container = document.getElementById('pokedex')


function getPokemon(url){
    fetch(url)
    .then(response => response.json())
    .then(data =>{
    let name = data.name;
    let id = data.id;
    let image = data.sprites.front_default
    let weight = data.weight
    let height = data.height
    let base_experience = data.base_experience
    let tipos = data.types
    let types = [];
    //Consrguimos los tipos
    for (index=0;index<tipos.length;index++){
        
        types.push(tipos[index]['type']['name'])
    }
    
    let liContainer = document.createElement('li');
    liContainer.className = 'card';
    container.appendChild(liContainer)

    let title = document.createElement('p');
    title.className = 'card-title'
    title.innerHTML = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    liContainer.appendChild(title)

    let subTitle = document.createElement('p');
    subTitle.className = 'card-subtitle';
    subTitle.innerHTML = `NO: ${id}, WT: ${weight}, HT: ${height}`
    liContainer.appendChild(subTitle)

    let pExperience = document.createElement('p');
    pExperience.className = 'card-experience';
    pExperience.innerHTML = `Exp: ${base_experience}`
    liContainer.appendChild(pExperience)

    let pTypes = document.createElement('p');
    pTypes.className = 'card-types';
    pTypes.innerHTML = `${types}`
    liContainer.appendChild(pTypes)

    let pImage = document.createElement('p');
    pImage.className = 'card-image';
    liContainer.appendChild(pImage)

    let imagenPok = document.createElement('img');
    imagenPok.src = image;
    pImage.appendChild(imagenPok)

    let pUrl = document.createElement('p');
    let uUrl = document.createElement('a');
    uUrl.href = url;
    uUrl.target = '_blank';
    uUrl.innerHTML = `Ver Json`
    pUrl.appendChild(uUrl)
    pUrl.className = 'card-url';
    liContainer.appendChild(pUrl)

    })
    .catch(err=>console.log(err))
}



for (i=1; i<=150; i++) {
    getPokemon('https://pokeapi.co/api/v2/pokemon/'+i)
    
}