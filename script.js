let json = `[{
    "title": "Stark",
    "character": "Iron Man",
    "name": "Tony Stark",
    "superpowers": "intelligence"
},{
    "title": "Cap",
    "character": "Сaptain America",
    "name": "Stephen Rogers",
    "superpowers": "strength, endurance, regeneration"
},{
    "title": "Natasha",
    "character": "Black Widow",
    "name": "Natasha Romanoff",
    "superpowers": "spy"
},{
    "title": "Thor",
    "character": "Thor",
    "name": "Thor Odinson",
    "superpowers": "the power of a god, the hammer Mjolnir"
},{
    "title": "Hawkeye",
    "character": "Hawkeye",
    "name": "Clint Barton",
    "superpowers": "great shooter"
},{
    "title": "Banner",
    "character": "Hulk",
    "name": "Bruce Banner",
    "superpowers": "intelligence, superhuman strength, flight"
}]`;

document.addEventListener("DOMContentLoaded", function(event) {
    let cards = JSON.parse(json);

    let cardsContent = "";
    for (let card of cards) {
        cardsContent += 
        `<div class='card'>
            <h2>${card.title}</h2>
            <div>${card.character}</div>
            <div>${card.name}</div>
            <div>${card.superpowers}</div>
        </div>`;
    }
    document.getElementById("cardsContainer").innerHTML = cardsContent
});