
//DOM Objecte xtrcion in varibles SECTION
const mainScreen = document.querySelector('.main-screen')
const pokeName = document.querySelector('.poke-name')
const pokeId = document.querySelector('.poke-id')
const pokeFrontImage = document.querySelector('.poke-front-image')
const pokeBackImage = document.querySelector('.poke-back-image')
const pokeTypeOne = document.querySelector('.poke-type-one')
const pokeTypeTwo = document.querySelector('.poke-type-two')
const pokeWeight = document.querySelector('.poke-weight')
const pokeHeigt = document.querySelector('.poke-height')
const pokeListItems =  document.querySelectorAll('.list-item')


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
//To capitalize the first letter of the name for each "new search"
const capitalize = (str)=>{
    return str[0].toUpperCase() + str.substr(1)
}


//To delete all the contet of the screen for a "new search"
const resetScreen =()=>{
    mainScreen.classList.remove('hide')
    for(const type of TYPES){
      mainScreen.classList.remove(type)
    }
}


//To fetch the POKEAPI and "transform" the result into a JSON 
//Fetch for the left side of the pokedex
fetch('https://pokeapi.co/api/v2/pokemon/100')
.then(resultadoFetch1=>{
    return resultadoFetch1.json()
})
.then(respuestaJson=>{
    resetScreen()
/*Section to populate the left section of the pokedex and linked 
the result of the API fetch (which is converted to a JSON) be the data
that populates the pone name, type, etc with the DOM
*/
    const pokemontypes = respuestaJson['types']
    const pokemonFirstType = pokemontypes[0]
    const pokemonSecondType = pokemontypes[1]
    pokeTypeOne.textContent = capitalize(pokemonFirstType['type']['name'])
    if (pokemonSecondType){
        pokeTypeTwo.classList.remove('hide')
        pokeTypeTwo.textContent = capitalize(pokemonSecondType['type']['name'])
    } else {
        pokeTypeTwo.classList.add('hide')
        pokeTypeTwo.textContent = ''
    }

    mainScreen.classList.add(pokemonFirstType['type']['name'])

    
    pokeName.textContent = capitalize(respuestaJson['name'])
    pokeId.textContent ='#'+ respuestaJson['id'].toString().padStart(3,'0')
    pokeWeight.textContent = respuestaJson['weight']
    pokeHeigt.textContent = respuestaJson['height']


    pokeFrontImage.src = respuestaJson['sprites']['front_default'] || ""
    pokeBackImage.src = respuestaJson['sprites']['back_default'] || ""

})




//To fetch the POKEAPI and "transform" the result into a JSON 
//Fetch for the right side of the pokedex (Endpoint ends at /pokemon)

fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
.then(resultadoFetch2=>{
    return resultadoFetch2.json()
})
.then(respuestaJson2=>{
    console.log(respuestaJson2)
    const arrayResultsTwentyPok = respuestaJson2['results']
    console.log(arrayResultsTwentyPok)
    console.log(pokeListItems.length)

    for(let i=0; i<pokeListItems.length;i++){
         const pokeListItem = pokeListItems[i]
         const pokeFromTentyArray = arrayResultsTwentyPok[i]
         const {name} = arrayResultsTwentyPok
    }


})