// for (let i = 1; i < 3; i++) {
let episodeC = 80
        
const getData = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json()
    const characters = data.results

    for (let i = 0; i < 40; i++) {

        let styleForStatuss = ''

        if (characters[i].status === 'Dead'){
            styleForStatuss = 'character__alive-meter--dead'
        } else if (characters[i].status === 'Alive') {
            styleForStatuss = 'character__alive-meter--alive'
        } else {
            styleForStatuss = 'character__alive-meter'
        }

        //console.log(characters[i])

    const characterGrid = document.querySelector('.character__grid')

        // Create the main container for the card
    const card = document.createElement("div");
    card.classList.add("character", "character__card");
    characterGrid.append(card)


    // Create the image element and set its attributes
    const image = document.createElement("img");
    image.classList.add("character", "character__picture", "js-character-picture");
    image.setAttribute('src', characters[i].image);
    image.alt = "character picture";
    card.appendChild(image);

    // Create the container for the character information
    const information = document.createElement("div");
    information.classList.add("character", "character__information");
    card.appendChild(information);

    // Create the first text wrapper container
    const textWrapper1 = document.createElement("div");
    textWrapper1.classList.add("character", "character__text-wrapper");
    information.appendChild(textWrapper1);

    // Create the h2 heading for the character name
    const name = document.createElement("h2");
    name.classList.add("character", "character__h2", "js-character-name");
    name.textContent = characters[i].name;
    textWrapper1.appendChild(name);

    // Create the container for the character status
    const status = document.createElement("div");
    status.classList.add("character", "character__status");
    textWrapper1.appendChild(status);

    // Create the div for the alive meter
    const aliveMeter = document.createElement("div");
    aliveMeter.classList.add("character", "character__alive-meter", styleForStatuss);
    status.appendChild(aliveMeter);

    // Create the span for the character status and species
    const statusText = document.createElement("span");
    statusText.classList.add("character", "character__text-alive-and-species", "js-character-status");
    statusText.textContent = `${characters[i].status} - ${characters[i].species}`;
    status.appendChild(statusText);

    // Create the second text wrapper container
    const textWrapper2 = document.createElement("div");
    textWrapper2.classList.add("character", "character__text-wrapper");
    information.appendChild(textWrapper2);

    // Create the span for the helper text
    const helperText1 = document.createElement("span");
    helperText1.classList.add("character", "character__helper-text");
    helperText1.innerHTML = "Last known location";
    textWrapper2.appendChild(helperText1);

    // Create the h3 location info
    const location = document.createElement("h3");
    location.classList.add('character', 'character__text-h3', 'js-character-location');
    location.textContent = characters[i].location.name;
    textWrapper2.appendChild(location);

     // Create the third text wrapper container
     const textWrapper3 = document.createElement("div");
     textWrapper3.classList.add("character", "character__text-wrapper");
     information.appendChild(textWrapper3);

     // Create the span for the helper text
    const helperText2 = document.createElement("span");
    helperText2.classList.add("character", "character__helper-text");
    helperText2.innerHTML = "First seen in episode";
    textWrapper3.appendChild(helperText2);

    // Create the h3 episode info
    const episodeName = document.createElement("h3");
    episodeName.classList.add('character', 'character__text-h3', 'js-first-episode-seen');
    episodeName.textContent = characters[i].location.name;
    textWrapper3.appendChild(episodeName);



    // Create the h3 heading for the location




        
        // let name = document.querySelectorAll('.js-character-name')[i].textContent = characters[i].name;
        // let status = document.querySelectorAll('.js-character-status')[i].textContent = `${characters[i].status} - ${characters[i].species}`;
        // let location = document.querySelectorAll('.js-character-location')[i].textContent = characters[i].location.name;
        // let image = document.querySelectorAll('.js-character-picture')[i].setAttribute('src', characters[i].image);
        
        let episode = characters[i].episode[0].split('')
        let episodeNumber = Number(episode.reverse()[0])

        const getEpisodeData = async () => {
                const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`);
                const data = await response.json()
    
                const nameOfFirsteEpisodeSeen = data.name
                document.querySelectorAll(".js-first-episode-seen")[i].textContent = nameOfFirsteEpisodeSeen;
            }
        getEpisodeData()
    }
       
}
getData()


