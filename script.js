let json = `[{
    "title": "Stark",
    "image": "img/Stark.jpg",
    "character": "Iron Man",
    "name": "Tony Stark",
    "superpowers": "intelligence",
    },{
    "title": "Cap",
    "image": "img/Cap.jpg",
    "character": "Сaptain America",
    "name": "Stephen Rogers",
    "superpowers": "strength, endurance, regeneration"
},{
    "title": "Natasha",
    "image": "img/Natasha.jpg",
    "character": "Black Widow",
    "name": "Natasha Romanoff",
    "superpowers": "spy"
},{
    "title": "Thor",
    "image": "img/Thor.jpg",
    "character": "Thor",
    "name": "Thor Odinson",
    "superpowers": "the power of a god, the hammer Mjolnir"
},{
    "title": "Hawkeye",
    "image": "img/Hawkeye.jpg",
    "character": "Hawkeye",
    "name": "Clint Barton",
    "superpowers": "great shooter"
},{
    "title": "Banner",
    "image": "img/Banner.jpg",
    "character": "Hulk",
    "name": "Bruce Banner",
    "superpowers": "intelligence, superhuman strength, flight"
}]`;

document.addEventListener("DOMContentLoaded", function(event) {
    let cards = JSON.parse(json);

    let cardsContent = "";
    for (let card of cards) {
        cardsContent += `<div class='card'>
            <h2>${card.title}</h2>
            <img src="${card.image}" style="width: 300px" />
            <div>${card.character}</div>
            <div>${card.name}</div>
            <div>${card.superpowers}</div>
        </div>`;
    }
    document.getElementById("cardsContainer").innerHTML = cardsContent
});