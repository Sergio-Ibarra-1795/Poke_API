//DOM Objectextrcion in varibles

//Example of graving a span section divisin in HTML
const mainScreen = document.querySelector('.main-screen')
const pokeName = document.querySelector('.poke-name')
const pokeId = document.querySelector('.poke-id')
const pokeFrontImage = document.querySelector('.poke-front-image')
const pokeBackImage = document.querySelector('.poke-back-image')
const pokeTypeOne = document.querySelector('.poke-type-one')
const pokeTypeTwo = document.querySelector('.poke-type-two')
const pokeWeight = document.querySelector('.poke-weight')
const pokeHeigt = document.querySelector('.poke-height')



//Constant and variables 

const TYPES = [
    'normal','fighting','flying',
    'poison','ground','rock',
    'bug','ghost','steel',
    'fire','water','grass',
    'electric','psychic','ice',
    'dragon','dark','fairy',

]


//FUNCTION SECTION
const resetScreen =()=>{

    for(const type of TYPES){
        console.log(type)
    }
}



fetch('https://pokeapi.co/api/v2/pokemon/6')
.then(resultadoFetch=>{
    return resultadoFetch.json()
})
.then(respuestaJson=>{
    console.log(respuestaJson)

    resetScreen()
    


    const pokemontypes = respuestaJson['types']
    const pokemonFirstType = pokemontypes[0]
    const pokemonSecondType = pokemontypes[1]
    pokeTypeOne.textContent = pokemonFirstType['type']['name']
    if (pokemonSecondType){
        pokeTypeTwo.classList.remove('hide')
        pokeTypeTwo.textContent = pokemonSecondType['type']['name']
    } else {
        pokeTypeTwo.classList.add('hide')
        pokeTypeTwo.textContent = ''
    }

    mainScreen.classList.add(pokemonFirstType['type']['name'])

    mainScreen.classList.remove('hide')
    pokeName.textContent = respuestaJson['name']
    pokeId.textContent = respuestaJson['id']
    pokeWeight.textContent = respuestaJson['weight']
    pokeHeigt.textContent = respuestaJson['height']


    pokeFrontImage.src = respuestaJson['sprites']['front_default'] || ""
    pokeBackImage.src = respuestaJson['sprites']['back_default'] || ""

})